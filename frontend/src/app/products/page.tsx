"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/mockData";

export default function ProductsPage() {
  return (
    <div className="pt-32 px-8 md:px-24 pb-section-gap min-h-screen max-w-[1600px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="font-bebas text-5xl md:text-7xl uppercase mb-4 tracking-wide">
          TODAS LAS COLECCIONES
        </h1>
        <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest">
          CLASIFICADO VOL. 01 — EL VACÍO
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Link href={`/products/${product.id}`} className="group block bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-accent-purple text-white px-3 py-1 text-[9px] font-bold tracking-widest uppercase">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bebas text-2xl tracking-wide mb-2 truncate">{product.name}</h3>
                <div className="flex justify-between items-center font-mono text-[10px] tracking-widest text-white/70">
                  <span>${product.price.toFixed(2)} USD</span>
                  <span className="material-symbols-outlined text-sm font-light group-hover:translate-x-1 transition-transform group-hover:text-white">arrow_forward</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
