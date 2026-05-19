"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { PRODUCTS } from "@/lib/mockData";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };

  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-bebas text-6xl">PRODUCTO NO ENCONTRADO</h1>
      </div>
    );
  }

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen pt-24 md:pt-0">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Product Image Gallery (Left Side) */}
        <div className="w-full md:w-1/2 md:h-screen relative bg-[#0a0a0a] overflow-hidden group h-[60vh] border-r border-white/10">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0, 0.2, 1] }}
            className="w-full h-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover grayscale brightness-75 md:group-hover:scale-105 transition-transform duration-1000 cursor-crosshair"
              priority
            />
          </motion.div>
          {product.badge && (
            <div className="absolute top-8 left-8 bg-accent-purple text-white px-4 py-2 font-mono text-[10px] tracking-widest uppercase z-10">
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Info (Right Side) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-24 md:py-0 md:pl-20 md:pr-24 bg-black">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-[10px] tracking-[0.2em] mb-12 uppercase"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              VOLVER A LA TIENDA
            </button>

            <span className="font-mono text-[10px] text-white/60 mb-4 block uppercase tracking-[0.3em]">
              {product.category} • {product.code}
            </span>
            <h1 className="font-bebas text-5xl md:text-7xl uppercase mb-6 leading-none tracking-wide">
              {product.name}
            </h1>
            <p className="font-mono text-[11px] opacity-80 mb-12 tracking-widest">
              ${product.price.toFixed(2)} USD
            </p>

            <div className="mb-12">
              <div className="flex justify-between items-end mb-4 font-mono">
                <span className="text-[10px] uppercase tracking-[0.2em]">
                  SELECCIONAR TALLE
                </span>
                <span className="text-[9px] uppercase opacity-50 underline cursor-pointer hover:opacity-100 transition-opacity tracking-[0.1em]">
                  GUÍA DE TALLES
                </span>
              </div>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center font-mono text-sm border transition-all ${
                      selectedSize === size
                        ? "border-white bg-white text-black font-bold"
                        : "border-white/20 text-white/70 hover:border-white hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-transparent border border-white text-white py-5 font-mono text-[11px] tracking-[0.3em] font-bold uppercase transition-all active:scale-[0.98] hover:bg-white hover:text-black mb-8">
              AGREGAR AL CARRITO
            </button>

            <div className="space-y-6 pt-8 border-t border-white/10 font-mono">
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="text-[10px] tracking-[0.2em] uppercase">DETALLES</span>
                <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors text-sm">
                  add
                </span>
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="text-[10px] tracking-[0.2em] uppercase">ENVÍOS</span>
                <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors text-sm">
                  add
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
