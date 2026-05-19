"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LookbookPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="bg-obsidian w-full relative">
      {/* Editorial Header */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden px-8 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="font-bebas text-[80px] md:text-[200px] leading-none text-white uppercase tracking-tighter mix-blend-difference">
            VOL 01
          </h1>
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase mt-4 text-white/50">
            LA ARQUITECTURA DEL VACÍO
          </p>
        </motion.div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-surface-container-low rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-charcoal rounded-full blur-[120px] opacity-20"></div>
      </section>

      {/* Lookbook Entries */}
      <LookbookEntry
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBxI1ECEB3Xxv1AgmILWt6z2eflfPIE4EsKqJEddAjKWXnhtgZiZ2GDIbXUUUYcCkxbnobfNflBo01lioo-9MTiSaAgqfx50BHCI5dUkJfZvtdssVyeG3ZsNjWqDsgnmdOl_x896pUY_ZKwKJwxKuQ_8VJovn6dhIKzBhGRm_QwoTfNDD8Ti67Zflu25tu-BDQOUzYx48N3P1bxyCnk0CgR6QgHqiVkMbZNUvpUySWjvU_TIAY5V10V6JpY-GxE-B6IVWEWsYqVm-ai"
        title="01 / ESTRUCTURA"
        text="La intersección de formas brutalistas y movimiento humano. Exploramos cómo las prendas pesadas interactúan con la dureza del paisaje urbano."
        reverse={false}
      />
      <LookbookEntry
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgZ7o6yKO_cfC9pY2-LT4PIsHiZzMiekvj0LmH3-zDSKucSw2VV4gf0s9XMqkKRi6mM0MbRdNxL0aQ45L7DcPoYvENEf9qIUWCH1Sq2Q0Q_BxqkGAx1hgX1QdJ4EUXocXIzQNvJif8VGTQ42GBywsCE3-yxWt-7FAoQ8X4GvZ40vd6MtftO_ffXbCAUaZAE3aByn47KACVqlXsg0shX47r0x5ZXYeLo5_zgdmawtbEBs2z34YFETHeMp5CF1zZSZtD-SyWKy_Grk9"
        title="02 / LUZ Y SOMBRA"
        text="Definiendo la identidad a través del contraste. Tejidos técnicos de alta gama que absorben la luz, creando una silueta que habla en silencio."
        reverse={true}
      />
      <LookbookEntry
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDRmhWneEdipFV71Nua-DD0v9Q9PHJv8UXtF_dmjPBG2zFjszNO_Tzkv1DBZ7YUJM9EequHw49iCt08OeRp_2K5S3k0wZueyyCeHIzCQz2XEI2lr3ObG1yCXrwvriOezJxsFnpLPg1h-RColLDFd5LipXdezfmmq8qsO6-oytgIT5sBQc28eHqnxnRXzXJ5Mf9FU_rZRJDllTm4nkWvEfbi7XvrClleUAXkQG6JQZQnCnUB3qCPnLWcsiO5-F2AjESoO_45lusVI-s5"
        title="03 / EL VACÍO"
        text="Abrazando el vacío. La evolución final de la forma, despojando lo innecesario para dejar solo lo esencial y puro."
        reverse={false}
      />

      <section className="py-40 text-center px-12 md:px-24">
        <h2 className="font-bebas text-6xl md:text-8xl uppercase mb-8">
          FIN DEL VOL 01
        </h2>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-mono text-[10px] tracking-[0.2em] border-b border-white/30 pb-1 uppercase hover:opacity-70 transition-opacity">
          VOLVER ARRIBA
        </button>
      </section>
    </div>
  );
}

function LookbookEntry({
  image,
  title,
  text,
  reverse,
}: {
  image: string;
  title: string;
  text: string;
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div
      ref={ref}
      className={`min-h-[80vh] flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between px-8 md:px-24 py-20 md:py-0 gap-12 md:gap-24 overflow-hidden`}
    >
      <motion.div
        style={{ y: y1 }}
        className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale brightness-75 scale-110"
        />
      </motion.div>
      <motion.div style={{ y: y2 }} className="w-full md:w-1/2 max-w-xl">
        <h3 className="font-bebas text-5xl md:text-7xl uppercase mb-6 tracking-wide">{title}</h3>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 leading-loose">{text}</p>
      </motion.div>
    </div>
  );
}
