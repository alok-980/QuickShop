import React from "react";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-surface-950 border-t border-surface-600/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-brand-500/20 border border-brand-400/40 flex items-center justify-center">
              <Leaf size={16} className="text-brand-300" />
            </span>
            <span className="text-ink-100 font-bold tracking-wide uppercase text-sm">
              QuickShop
            </span>
          </div>
          <p className="text-ink-300 text-sm mt-3">
            Farm-fresh fruits and vegetables delivered straight to your door.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full border border-surface-600/70 bg-surface-800/70 flex items-center justify-center text-ink-300 hover:text-brand-300 hover:border-brand-400/40 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} size="sm" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full border border-surface-600/70 bg-surface-800/70 flex items-center justify-center text-ink-300 hover:text-brand-300 hover:border-brand-400/40 transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="h-9 w-9 rounded-full border border-surface-600/70 bg-surface-800/70 flex items-center justify-center text-ink-300 hover:text-brand-300 hover:border-brand-400/40 transition"
            >
              <FontAwesomeIcon icon={faTwitter} size="sm" />
            </a>
          </div>
        </div>

        {/* quick links */}
        <div>
          <h3 className="text-ink-100 text-sm font-semibold mb-3">Quick links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* help */}
        <div>
          <h3 className="text-ink-100 text-sm font-semibold mb-3">Help</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/faq"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/shipping"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="/returns"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-ink-300 text-sm hover:text-brand-300 transition-colors"
              >
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-ink-100 text-sm font-semibold mb-3">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-ink-300 text-sm">
              <MapPin size={14} className="text-brand-300 shrink-0" />
              Mumbai, Maharashtra, India
            </li>
            <li className="flex items-center gap-2 text-ink-300 text-sm">
              <Phone size={14} className="text-brand-300 shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2 text-ink-300 text-sm">
              <Mail size={14} className="text-brand-300 shrink-0" />
              support@quickshop.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-600/70 py-5 px-4 sm:px-8">
        <p className="text-center text-ink-500 text-xs">
          © {new Date().getFullYear()} QuickShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
