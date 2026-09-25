import React from "react";
import { Tag, AlignLeft, IndianRupee, Boxes, ArrowLeft } from "lucide-react";
import { useProduct } from "../../../hooks/useProduct";

const ProductAddForm = () => {
  const { register, handleSubmit, errors, handleProductAdd, navigate } =
    useProduct();

  return (
    <div className="p-6 sm:p-8">
      <div className="w-full">
        <div className="mb-6">
          <p className="inline-flex items-center rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 text-accent-300 text-xs font-semibold uppercase tracking-widest">
            Inventory
          </p>
          <h1 className="text-ink-100 text-2xl sm:text-3xl font-bold mt-1">
            Add a new product
          </h1>
          <p className="text-ink-300 text-sm mt-1">
            Fill in the details below to list a product in your shop.
          </p>
        </div>

        <div className="bg-surface-900 border border-surface-600/50 rounded-2xl shadow-[var(--shadow-card)] p-6 sm:p-8">
          <form
            onSubmit={handleSubmit(handleProductAdd)}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="title"
                className="text-xs text-ink-500 mb-1 block"
              >
                Product title
              </label>
              <div className="border border-surface-600/50 bg-surface-800 flex items-center px-3 py-2.5 gap-2 rounded-lg focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                <Tag size={16} className="text-brand-400 shrink-0" />
                <input
                  id="title"
                  type="text"
                  placeholder="e.g. Organic Honeycrisp Apples"
                  className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
                  {...register("title", {
                    required: "Title is required",
                  })}
                />
              </div>
              {errors.title && (
                <p className="text-danger-400 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-xs text-ink-500 mb-1 block"
              >
                Description
              </label>
              <div className="border border-surface-600/50 bg-surface-800 flex items-start px-3 py-2.5 gap-2 rounded-lg focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                <AlignLeft
                  size={16}
                  className="text-brand-400 shrink-0 mt-0.5"
                />
                <textarea
                  id="description"
                  rows={3}
                  placeholder="Describe the product..."
                  className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full resize-none"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
              </div>
              {errors.description && (
                <p className="text-danger-400 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="price"
                  className="text-xs text-ink-500 mb-1 block"
                >
                  Price
                </label>
                <div className="border border-surface-600/50 bg-surface-800 flex items-center px-3 py-2.5 gap-2 rounded-lg focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                  <IndianRupee size={16} className="text-brand-400 shrink-0" />
                  <input
                    id="price"
                    type="number"
                    min="0"
                    placeholder="0"
                    className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
                    {...register("price", {
                      required: "Price is required",
                      min: { value: 0, message: "Price cannot be negative" },
                    })}
                  />
                </div>
                {errors.price && (
                  <p className="text-danger-400 text-xs mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="stock"
                  className="text-xs text-ink-500 mb-1 block"
                >
                  Stock
                </label>
                <div className="border border-surface-600/50 bg-surface-800 flex items-center px-3 py-2.5 gap-2 rounded-lg focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                  <Boxes size={16} className="text-brand-400 shrink-0" />
                  <input
                    id="stock"
                    type="number"
                    min="0"
                    placeholder="0"
                    className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
                    {...register("stock", {
                      required: "Stock is required",
                      min: { value: 0, message: "Stock cannot be negative" },
                    })}
                  />
                </div>
                {errors.stock && (
                  <p className="text-danger-400 text-xs mt-1">
                    {errors.stock.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                type="submit"
                className="flex px-4 bg-brand-600 text-ink-100 font-semibold py-2.5 rounded-lg shadow-[var(--shadow-glow-brand)] hover:bg-brand-500 transition-colors cursor-pointer"
              >
                Add Product
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard/product")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-surface-600/50 text-ink-300 hover:text-ink-100 hover:border-surface-600 transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAddForm;
