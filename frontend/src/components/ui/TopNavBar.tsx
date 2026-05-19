"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-transparent">
        {/* Left Side Links */}
        <nav className="hidden md:flex gap-8 text-[10px] tracking-widest uppercase">
          <Link href="/" className="hover:opacity-70 transition-opacity">Inicio</Link>
          <Link href="/products" className="hover:opacity-70 transition-opacity">Tienda</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">Nosotros</Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contacto</Link>
        </nav>

        {/* Center Logo */}
        <Link 
          href="/" 
          className="absolute left-1/2 -translate-x-1/2 font-bebas text-3xl md:text-4xl tracking-[0.3em] md:tracking-[0.6em] ml-[0.3em]"
        >
          ZAKURA
        </Link>

        {/* Right Side Icons */}
        <div className="flex items-center gap-8 text-[10px] tracking-widest uppercase ml-auto md:ml-0">
          <Link href="#" className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-sm">lock</span>
            CARRITO (0)
          </Link>
          
          <button 
            className="flex flex-col gap-[6px] hover:opacity-70 transition-opacity group p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-[1px] bg-white group-hover:w-8 transition-all"></span>
            <span className="block w-8 h-[1px] bg-white group-hover:w-6 transition-all"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-white font-bebas text-6xl uppercase tracking-widest"
            >
              Inicio
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors font-bebas text-6xl uppercase tracking-widest"
            >
              Tienda
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors font-bebas text-6xl uppercase tracking-widest"
            >
              Nosotros
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors font-bebas text-6xl uppercase tracking-widest"
            >
              Contacto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
