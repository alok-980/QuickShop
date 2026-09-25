# QuickShop

QuickShop is a multi-user e-commerce platform. Users can purchase products from the shop, and can also become sellers to list and sell their own products.

## Project Overview

- Users can register/login to browse and buy products.
- Any user can become a seller and add, edit, and delete their own products.
- Sellers can manage their products through a separate dashboard.
- Available products can be viewed and purchased on the shop page.
- The frontend is built with React and Vite, along with a backend API, for authentication and product management.

## Setup

### Requirements

- Node.js 18+
- QuickShop server running on `http://localhost:3000`

### Run the client

```bash
cd client
npm install
npm run dev
```

## Available API Endpoints

### Authentication

| Method | Endpoint              | Description                       |
| ------ | --------------------- | --------------------------------- |
| `POST` | `/auth/register`      | Register a new user               |
| `POST` | `/auth/login`         | Log in a user                     |
| `POST` | `/auth/refresh-token` | Refresh the access token          |
| `POST` | `/auth/logout`        | Log out the current user          |
| `GET`  | `/auth/me`            | Get details of the logged-in user |

### Products

| Method   | Endpoint       | Description                            |
| -------- | -------------- | -------------------------------------- |
| `POST`   | `/product`     | Create a new product _(authenticated)_ |
| `GET`    | `/product`     | Get all products                       |
| `GET`    | `/product/:id` | Get details of a single product        |
| `PUT`    | `/product/:id` | Update your product _(authenticated)_  |
| `DELETE` | `/product/:id` | Delete your product _(authenticated)_  |

A valid authentication token/cookie is required for protected endpoints.

## Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run lint      # Run ESLint
npm run preview   # Preview the production build
```
