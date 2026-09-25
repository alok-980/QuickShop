import React from "react";
import { Plus, Pencil, Trash2, Package } from "lucide-react";
import { useProduct } from "../../../hooks/useProduct";
import Loader from "../../../../../shared/ui/components/Loader";

const ProductTable = () => {
  const { data, isPending, navigate, handleProductDelete } = useProduct();

  const products = data?.products || [];

  if (isPending) return <Loader />;

  return (
    <div className="p-6 sm:p-8">
      {/* header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-ink-100 text-2xl font-bold">Products</h1>
          <p className="text-ink-300 text-sm mt-1">
            {products.length} products in your inventory
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/product/add")}
          className="flex items-center gap-2 bg-brand-600 text-ink-100 text-sm font-semibold px-4 py-2.5 rounded-lg shadow-[var(--shadow-glow-brand)] hover:bg-brand-500 transition-colors cursor-pointer"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* table */}
      <div className="bg-surface-900 border border-surface-600/50 rounded-2xl shadow-[var(--shadow-card)] overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-surface-600/50">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Product
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Price
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Stock
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-5 py-10 text-center text-ink-300 text-sm"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-surface-600/30 last:border-0 hover:bg-surface-800/60 transition-colors"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-lg bg-brand-500/10 border border-brand-400/20 flex items-center justify-center shrink-0">
                        <Package size={16} className="text-brand-400" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-ink-100 text-sm font-medium truncate">
                          {product.title}
                        </p>
                        <p className="text-ink-500 text-xs truncate max-w-xs">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-ink-100">
                    ₹{product.price}
                  </td>
                  <td className="px-5 py-3 text-sm text-ink-300">
                    {product.stock}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() =>
                          navigate(`/dashboard/product/update/${product.id}`)
                        }
                        aria-label="Update product"
                        className="h-9 w-9 rounded-lg border border-surface-600/50 flex items-center justify-center text-ink-300 hover:text-brand-400 hover:border-brand-400/40 transition-colors cursor-pointer"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => handleProductDelete(product.id)}
                        aria-label="Delete product"
                        className="h-9 w-9 rounded-lg border border-surface-600/50 flex items-center justify-center text-ink-300 hover:text-danger-400 hover:border-danger-400/40 transition-colors cursor-pointer"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
