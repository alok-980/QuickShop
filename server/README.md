# QuickShop Server

QuickShop Server is the Express and MongoDB backend for the QuickShop
e-commerce application. It provides user authentication and product
management APIs.

## Features

- User registration and login with bcrypt password hashing.
- Short-lived access tokens and rotating refresh tokens using JWT.
- Refresh tokens stored in an HTTP-only cookie.
- Authenticated user profile (`me`) and logout endpoints.
- Product create, read, update, and delete operations.
- Request validation with `express-validator`.
- Login rate limiting: five failed attempts per 15 minutes per client.
- MongoDB persistence through Mongoose.

## Requirements

- Node.js 18 or later
- npm
- MongoDB running locally or a MongoDB connection string

## Setup

From the `server` directory:

```bash
npm install
```

Create a `.env` file in this directory. The file is intentionally ignored by
Git because it contains secrets:

```env
MONGODB_URI=mongodb://localhost:27017/QuickShop
PORT=3000
ACCESS_TOKEN_SECRET=replace-with-a-long-random-secret
REFRESH_TOKEN_SECRET=replace-with-a-different-long-random-secret
```

`MONGODB_URI` and both token secrets are required. `PORT` defaults to `8000`
when it is not set.

Start the development server with:

```bash
npm run dev
```

The API is then available at `http://localhost:3000` when using the example
configuration. The server attempts to connect to MongoDB before it starts
listening.

## Authentication

Successful login returns an access token and sets a `refreshToken` HTTP-only
cookie. Send the access token on protected requests:

```http
Authorization: Bearer <access-token>
```

Access tokens expire after 15 minutes. Use `POST /api/auth/refresh-token` with
the refresh-token cookie to receive a new access token. Clients must preserve
cookies when calling the login, refresh, and logout endpoints.

## API Reference

The examples below assume:

All JSON responses include a `success` boolean and a `message`. Validation
errors return HTTP `400` and include an `errors` array.

### Authentication

| Method | Endpoint                  | Auth           | Description                                              |
| ------ | ------------------------- | -------------- | -------------------------------------------------------- |
| `POST` | `/api/auth/register`      | No             | Create a user account                                    |
| `POST` | `/api/auth/login`         | No             | Authenticate and issue tokens                            |
| `POST` | `/api/auth/refresh-token` | Refresh cookie | Rotate the refresh token and issue a new access token    |
| `POST` | `/api/auth/logout`        | Bearer token   | Invalidate the stored refresh token and clear the cookie |
| `GET`  | `/api/auth/me`            | Bearer token   | Return the authenticated user's public profile           |

#### Register

`POST /api/auth/register`

```json
{
  "name": "Alex Shopper",
  "email": "alex@example.com",
  "password": "secret123",
  "confirmPassword": "secret123"
}
```

Validation: `name` must be 2-30 characters, `email` must be valid, and both
password fields must contain at least six characters and match. Returns
`201 Created`; an already registered email returns `409 Conflict`.

#### Login

`POST /api/auth/login`

```json
{
  "email": "alex@example.com",
  "password": "secret123"
}
```

Returns `200 OK`, an `accessToken`, and a `refreshToken` HTTP-only cookie.
Invalid credentials return `401 Unauthorized`. Successful requests do not
count toward the login rate limit.

#### Refresh token

`POST /api/auth/refresh-token`

No JSON body is required. Include the `refreshToken` cookie. The endpoint
returns a new access token and rotates the refresh-token cookie.

#### Logout and current user

`POST /api/auth/logout` and `GET /api/auth/me` require the Bearer access token.
The current user response contains the user's `id`, `name`, and `email`;
password hashes and refresh tokens are never returned.

### Products

| Method   | Endpoint           | Auth         | Description                                      |
| -------- | ------------------ | ------------ | ------------------------------------------------ |
| `POST`   | `/api/product`     | Bearer token | Create a product owned by the authenticated user |
| `GET`    | `/api/product`     | No           | List all products                                |
| `GET`    | `/api/product/:id` | No           | Get one product by MongoDB ID                    |
| `PUT`    | `/api/product/:id` | Bearer token | Update a product owned by the authenticated user |
| `DELETE` | `/api/product/:id` | Bearer token | Delete a product owned by the authenticated user |

#### Create a product

`POST /api/product`

```json
{
  "title": "Wireless keyboard",
  "description": "A compact wireless keyboard with a comfortable layout.",
  "price": 2499,
  "stock": 25
}
```

Required fields are `title`, `description`, `price`, and `stock`. Titles must
be 3-100 characters, descriptions 20-500 characters, and `price` and `stock`
must be non-negative integers.

The authenticated user is recorded as the product seller. The product model
also supports an `images` array of up to five image URLs, although the current
create and update validators do not expose that field.

#### Read products

`GET /api/product` returns a `products` array. `GET /api/product/:id` returns
one product. The `id` path parameter must be a valid MongoDB ObjectId.

#### Update a product

`PUT /api/product/:id`

```json
{
  "price": 2299,
  "stock": 30
}
```

All update fields are optional, but any supplied field must satisfy the same
validation rules as creation. Only the product owner can update it; other
authenticated users receive `403 Forbidden`.

#### Delete a product

`DELETE /api/product/:id` requires the product owner. A successful deletion
returns `200 OK`.

## Common Status Codes

| Status | Meaning                                                                  |
| ------ | ------------------------------------------------------------------------ |
| `200`  | Request completed successfully                                           |
| `201`  | User or product created                                                  |
| `400`  | Invalid request, validation failure, or missing token                    |
| `401`  | Missing or invalid credentials/token                                     |
| `403`  | Valid user does not own the requested product, or refresh-token mismatch |
| `404`  | User or product was not found                                            |
| `409`  | Email is already registered                                              |
| `429`  | Login rate limit exceeded                                                |
| `500`  | Unexpected server/database error                                         |

## Project Structure

```text
server/
├── src/
│   ├── app/app.js                 # Express middleware and route mounting
│   ├── config/                    # Environment and MongoDB configuration
│   ├── controllers/               # Authentication and product handlers
│   ├── middlewares/               # Authentication and login rate limiting
│   ├── models/                    # User and product Mongoose models
│   ├── routes/                    # API route definitions
│   ├── utils/                     # JWT generation and verification
│   ├── validators/                # Request validation rules
│   └── server.js                  # Database connection and HTTP startup
├── .env                           # Local secrets (not committed)
└── package.json
```

## Development Notes

The backend was built in stages: server and MongoDB setup, user schema and
validation, JWT authentication, registration/login, refresh-token rotation,
logout and profile APIs, login rate limiting, and finally product validation
and CRUD endpoints. There is currently no automated test script; use an API
client such as Postman while developing.
