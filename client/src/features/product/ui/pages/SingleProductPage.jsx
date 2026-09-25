import React from "react";
import { ArrowLeft, ShoppingBasket, ShoppingCart } from "lucide-react";
import { useProduct } from "../../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import Loader from "../../../../shared/ui/components/Loader";

const SingleProductPage = () => {
  const { singleProduct, isSingleProductPending, relatedProducts, navigate } =
    useProduct();

  if (isSingleProductPending) return <Loader />;

  if (!singleProduct) {
    return (
      <div className="min-h-screen w-full bg-surface-950/80 px-4 sm:px-8 py-10">
        <p className="text-ink-300 text-sm text-center py-20">
          Product not found.
        </p>
      </div>
    );
  }

  const { title, description, price, stock } = singleProduct;
  const inStock = stock > 0;

  return (
    <div className="min-h-screen w-full bg-surface-950/80 px-4 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-ink-300 text-sm hover:text-brand-400 transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Shop page
        </button>

        {/* product detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="h-72 sm:h-96 rounded-2xl bg-brand-900/40 border border-surface-600/50 flex items-center justify-center">
            <ShoppingBasket size={64} className="text-brand-300/60" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-ink-100 text-2xl sm:text-3xl font-bold">
              {title}
            </h1>
            <p className="text-ink-300 text-sm mt-3 leading-relaxed">
              {description}
            </p>

            <div className="flex items-center gap-3 mt-5">
              <span className="text-brand-300 font-bold text-2xl">
                ₹{price}
              </span>
              <span
                className={`text-xs px-2.5 py-1 rounded-full border ${
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
              className="mt-6 flex items-center justify-center gap-2 bg-brand-600 disabled:bg-surface-700 disabled:text-ink-500 disabled:cursor-not-allowed text-ink-100 text-sm font-semibold py-3 rounded-lg shadow-glow-brand hover:bg-brand-500 transition-colors cursor-pointer max-w-xs"
            >
              <ShoppingCart size={16} />
              Add to cart
            </button>
          </div>
        </div>

        {/* related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-ink-100 text-lg font-semibold mb-4">
              You might also like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
