"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/mockData";
import { useState, useEffect } from "react";

import wallpaper1 from "../../public/images/wallpaper-1.png";
import wallpaper2 from "../../public/images/wallpaper-2.png";
import wallpaper3 from "../../public/images/wallpaper-3.png";
import { StaticImageData } from "next/image";

const HERO_IMAGES: StaticImageData[] = [wallpaper1, wallpaper2, wallpaper3];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.05]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section - Cinematic Effect */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 w-full h-full origin-top">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={HERO_IMAGES[currentImage]}
                alt="ZAKURA Cinematic Hero"
                fill
                className="object-cover grayscale-[0.8] brightness-50 contrast-125 pointer-events-none"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Dark Vignette Overlay for exact mood */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent pointer-events-none w-2/3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

        {/* Cinematic Viewfinder Corners */}
        <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-white/30 pointer-events-none"></div>
        <div className="absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-white/30 pointer-events-none"></div>
        <div className="absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-white/30 pointer-events-none"></div>
        <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-white/30 pointer-events-none"></div>

        <div className="relative z-10 px-8 md:pl-24 mt-20 w-full max-w-7xl mx-auto flex flex-col h-full justify-center">
          
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-bebas text-[80px] md:text-[140px] leading-[0.8] tracking-[0.1em] mb-8 md:mb-12"
          >
            ZAKURA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-2 mb-12 text-[11px] tracking-[0.4em] uppercase text-white/80 font-mono"
          >
            <span>STREETWEAR</span>
            <span>• SAN LUIS •</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-12 text-[10px] tracking-[0.5em] text-white/50 uppercase font-mono"
          >
            EST. 2024
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col gap-2 text-[9px] tracking-[0.3em] uppercase text-white/60 font-mono"
          >
            <span>IDENTIDAD</span>
            <span>ACTITUD</span>
            <span>CULTURA</span>
          </motion.div>
        </div>

        {/* Right side line decoration */}
        <div className="absolute bottom-32 right-0 w-32 h-[1px] bg-white/30 pointer-events-none"></div>
      </section>

      {/* Featured Drop Section */}
      <section className="bg-[#050505] py-24 px-8 md:px-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-2 text-white/50">DROP DESTACADO</p>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide">COLECCIÓN INVIERNO 24</h2>
          </div>
          <Link href="/products" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
            VER TODO
            <span className="material-symbols-outlined text-sm font-light group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((product, i) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors">
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
                <div className="flex justify-between items-center text-[10px] tracking-widest text-white/70">
                  <span>${product.price.toFixed(2)} USD</span>
                  <span className="material-symbols-outlined text-sm font-light group-hover:translate-x-1 transition-transform group-hover:text-white">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Split Editorial Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh]">
        {/* Left Editorial */}
        <div className="relative h-[60vh] md:h-full border-b md:border-b-0 md:border-r border-white/10 group overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxI1ECEB3Xxv1AgmILWt6z2eflfPIE4EsKqJEddAjKWXnhtgZiZ2GDIbXUUUYcCkxbnobfNflBo01lioo-9MTiSaAgqfx50BHCI5dUkJfZvtdssVyeG3ZsNjWqDsgnmdOl_x896pUY_ZKwKJwxKuQ_8VJovn6dhIKzBhGRm_QwoTfNDD8Ti67Zflu25tu-BDQOUzYx48N3P1bxyCnk0CgR6QgHqiVkMbZNUvpUySWjvU_TIAY5V10V6JpY-GxE-B6IVWEWsYqVm-ai"
            alt="More Than Clothes"
            fill
            className="object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute inset-0 p-8 md:p-24 flex flex-col justify-center">
            <h2 className="font-bebas text-[60px] md:text-[100px] leading-[0.85] mb-4 md:mb-6">MÁS QUE<br/>ROPA.</h2>
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-white/70 mb-10 md:mb-16">ES UNA CULTURA.</p>
            
            <Link href="/about" className="mt-auto md:mt-0 flex items-center justify-between border border-white/20 px-8 py-5 hover:bg-white hover:text-black transition-all w-full max-w-sm group/btn">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">SOBRE ZAKURA</span>
              <span className="material-symbols-outlined text-sm font-light group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Right Editorial */}
        <div className="relative h-[60vh] md:h-full group overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgZ7o6yKO_cfC9pY2-LT4PIsHiZzMiekvj0LmH3-zDSKucSw2VV4gf0s9XMqkKRi6mM0MbRdNxL0aQ45L7DcPoYvENEf9qIUWCH1Sq2Q0Q_BxqkGAx1hgX1QdJ4EUXocXIzQNvJif8VGTQ42GBywsCE3-yxWt-7FAoQ8X4GvZ40vd6MtftO_ffXbCAUaZAE3aByn47KACVqlXsg0shX47r0x5ZXYeLo5_zgdmawtbEBs2z34YFETHeMp5CF1zZSZtD-SyWKy_Grk9"
            alt="Built On Purpose"
            fill
            className="object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 p-8 md:p-24 flex flex-col justify-center">
            <h2 className="font-bebas text-[60px] md:text-[100px] leading-[0.85] mb-4 md:mb-6">HECHO CON<br/>PROPÓSITO.</h2>
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-white/70 mb-10 md:mb-16">DISEÑADO PARA DESTACAR.</p>
            
            <Link href="/about" className="mt-auto md:mt-0 flex items-center justify-between border border-white/20 px-8 py-5 hover:bg-white hover:text-black transition-all w-full max-w-sm group/btn">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">NUESTRA HISTORIA</span>
              <span className="material-symbols-outlined text-sm font-light group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
