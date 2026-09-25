import React from "react";
import { useNavigate } from "react-router";
import { ShoppingBasket, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { id, title, description, price, stock } = product;
  const navigate = useNavigate();

  const inStock = stock > 0;

  return (
    <div
      key={id}
      onClick={() => navigate(`/products/${id}`)}
      className="bg-surface-800/70 border border-surface-600/70 rounded-xl overflow-hidden flex flex-col shadow-card hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-glow-brand transition-all duration-300 cursor-pointer"
    >
      <div className="h-40 w-full bg-brand-900/40 flex items-center justify-center">
        <ShoppingBasket size={36} className="text-brand-300/60" />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-ink-100 font-semibold text-sm line-clamp-1">
          {title}
        </h3>
        <p className="text-ink-300 text-xs line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-1">
          <span className="text-brand-300 font-bold text-base">₹{price}</span>
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full border ${
              inStock
                ? "text-brand-300 border-brand-400/30 bg-brand-500/10"
                : "text-danger-400 border-danger-400/30 bg-danger-500/10"
            }`}
          >
            {inStock ? `${stock} in stock` : "Out of stock"}
          </span>
        </div>

        <button
          disabled={!inStock}
          onClick={(e) => e.stopPropagation()}
          className="mt-2 flex items-center justify-center gap-2 bg-brand-600 disabled:bg-surface-700 disabled:text-ink-500 disabled:cursor-not-allowed text-ink-100 text-sm font-semibold py-2 rounded-lg hover:bg-brand-500 transition-colors cursor-pointer"
        >
          <ShoppingCart size={16} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
