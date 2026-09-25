import React from "react";
import { ShoppingBasket, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { id, title, description, price, stock } = product;

  const inStock = stock > 0;

  return (
    <div
      key={id}
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-emerald-400/40 transition"
    >
      <div className="h-40 w-full bg-emerald-900/20 flex items-center justify-center">
        <ShoppingBasket size={36} className="text-emerald-400/60" />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white font-semibold text-sm line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-400 text-xs line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-1">
          <span className="text-emerald-400 font-bold text-base">₹{price}</span>
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full border ${
              inStock
                ? "text-emerald-400 border-emerald-400/30 bg-emerald-500/10"
                : "text-red-400 border-red-400/30 bg-red-500/10"
            }`}
          >
            {inStock ? `${stock} in stock` : "Out of stock"}
          </span>
        </div>

        <button
          disabled={!inStock}
          className="mt-2 flex items-center justify-center gap-2 bg-emerald-600 disabled:bg-white/10 disabled:text-gray-500 disabled:cursor-not-allowed text-white text-sm font-semibold py-2 rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer"
        >
          <ShoppingCart size={16} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
