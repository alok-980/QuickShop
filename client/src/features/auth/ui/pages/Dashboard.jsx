import React from "react";
import { useSelector } from "react-redux";
import {
  Package,
  ShoppingCart,
  Clock,
  Truck,
  IndianRupee,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useProduct } from "../../../product/hooks/useProduct";
import Loader from "../../../../shared/ui/components/Loader";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const statCards = [
  {
    label: "Total orders",
    value: "1,284",
    icon: ShoppingCart,
  },
  {
    label: "Pending orders",
    value: "36",
    icon: Clock,
  },
  {
    label: "Delivered orders",
    value: "1,192",
    icon: Truck,
  },
  {
    label: "Total sale",
    value: "₹4,82,650",
    icon: IndianRupee,
  },
  {
    label: "Total profit",
    value: "₹96,430",
    icon: TrendingUp,
  },
];

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user.user);
  const { data, isPending } = useProduct();

  const products = data?.products || [];
  const recentProducts = products.slice(-5).reverse();

  if (isPending) return <Loader />;

  return (
    <div className="p-6 sm:p-8">
      {/* greeting header */}
      <div className="relative overflow-hidden rounded-2xl border border-surface-600/50 bg-surface-900 p-6 sm:p-8 mb-8">
        <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl" />

        <div className="relative z-10">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 text-accent-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={12} />
            {getGreeting()}
          </p>
          <h1 className="text-ink-100 text-2xl sm:text-3xl font-bold mt-3">
            Welcome back, {user?.name || "there"} 👋
          </h1>
          <p className="text-ink-300 text-sm mt-1">
            Here's what's happening with your shop today.
          </p>
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-surface-900 border border-surface-600/50 rounded-xl p-4 flex flex-col gap-2">
          <span className="h-9 w-9 rounded-lg bg-brand-500/10 border border-brand-400/20 flex items-center justify-center text-brand-400">
            <Package size={16} />
          </span>
          <p className="text-ink-500 text-xs">Total products</p>
          <p className="text-ink-100 text-xl font-bold">{products.length}</p>
        </div>

        {statCards.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="bg-surface-900 border border-surface-600/50 rounded-xl p-4 flex flex-col gap-2"
          >
            <span className="h-9 w-9 rounded-lg bg-brand-500/10 border border-brand-400/20 flex items-center justify-center text-brand-400">
              <Icon size={16} />
            </span>
            <p className="text-ink-500 text-xs">{label}</p>
            <p className="text-ink-100 text-xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      {/* recent products */}
      <div>
        <h2 className="text-ink-100 text-lg font-semibold mb-4">
          Recently added products
        </h2>

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
              </tr>
            </thead>
            <tbody>
              {recentProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-5 py-10 text-center text-ink-300 text-sm"
                  >
                    No products yet.
                  </td>
                </tr>
              ) : (
                recentProducts.map((product) => (
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
