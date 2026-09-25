import React from "react";
import { useProduct } from "../../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import Loader from "../../../../shared/ui/components/Loader";

const ShopPage = () => {
  const { data, isPending } = useProduct();

  const products = data?.products || [];

  if (isPending) return <Loader />;

  return (
    <div className="min-h-screen w-full bg-surface-950/80 px-4 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="inline-flex items-center rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 text-accent-300 text-xs font-semibold uppercase tracking-widest">
            Farm fresh
          </p>
          <h1 className="text-ink-100 text-2xl sm:text-3xl font-bold mt-1">
            Shop fresh fruits & vegetables
          </h1>
          <p className="text-ink-300 text-sm mt-1">
            {products.length} products available
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-ink-300 text-sm text-center py-20">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
