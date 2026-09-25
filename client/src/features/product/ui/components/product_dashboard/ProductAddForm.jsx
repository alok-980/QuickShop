import React from "react";
import { useProduct } from "../../../hooks/useProduct";

const ProductAddForm = () => {
  const { register, handleSubmit, errors, handleProductAdd } = useProduct();

  return (
    <div>
      <form onSubmit={handleSubmit(handleProductAdd)}>
        <div>
          <div className="border">
            <input
              type="text"
              placeholder="Enter product title"
              {...register("title", {
                required: "title is required",
              })}
            />
          </div>
          {errors.title && (
            <p className="text-red-400">{errors.title.message}</p>
          )}
        </div>

        <div>
          <div className="border">
            <input
              type="text"
              placeholder="Enter product description"
              {...register("description", {
                required: "description is required",
              })}
            />
          </div>
          {errors.title && (
            <p className="text-red-400">{errors.title.message}</p>
          )}
        </div>

        <div>
          <div className="border">
            <input
              type="number"
              placeholder="Enter price"
              {...register("price", {
                required: "price is required",
              })}
            />
          </div>
          {errors.title && (
            <p className="text-red-400">{errors.title.message}</p>
          )}
        </div>

        <div>
          <div className="border">
            <input
              type="number"
              placeholder="Enter stock"
              {...register("stock", {
                required: "stock is required",
              })}
            />
          </div>
          {errors.title && (
            <p className="text-red-400">{errors.title.message}</p>
          )}
        </div>
        <button className="border">Add Product</button>
      </form>
    </div>
  );
};

export default ProductAddForm;
