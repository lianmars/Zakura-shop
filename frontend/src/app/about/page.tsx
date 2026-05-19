"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import sakuraImg from "../../../public/images/sakura.png";

import { StaticImageData } from "next/image";

function CinematicSection({ 
  image, 
  title, 
  children, 
  priority = false 
}: { 
  image: string | StaticImageData; 
  title?: string; 
  children: React.ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-32 px-8 md:px-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Cinematic Background"
          fill
          className="object-cover grayscale-[0.8] brightness-50 contrast-125"
          priority={priority}
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none"></div>

      {/* Viewfinder Corners */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-white/20 pointer-events-none hidden md:block"></div>
      <div className="absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-white/20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-white/20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-white/20 pointer-events-none hidden md:block"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-bebas text-6xl md:text-[100px] mb-8 leading-none tracking-wide"
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Intro Scene */}
      <CinematicSection 
        image={sakuraImg}
        title="SOBRE ZAKURA" 
        priority={true}
      >
        <p className="font-mono text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-white/80 leading-loose max-w-3xl mx-auto md:mx-0">
          ZAKURA ES LA INTERSECCIÓN ENTRE EL BRUTALISMO ARQUITECTÓNICO Y LA CULTURA URBANA ARGENTINA. 
          NACIDA EN SAN LUIS, BUSCAMOS REDEFINIR LA IDENTIDAD A TRAVÉS DE PRENDAS DISEÑADAS PARA DESTACAR Y NO PARA ENCAJAR.
        </p>
      </CinematicSection>

      {/* Vision Scene */}
      <CinematicSection 
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBxI1ECEB3Xxv1AgmILWt6z2eflfPIE4EsKqJEddAjKWXnhtgZiZ2GDIbXUUUYcCkxbnobfNflBo01lioo-9MTiSaAgqfx50BHCI5dUkJfZvtdssVyeG3ZsNjWqDsgnmdOl_x896pUY_ZKwKJwxKuQ_8VJovn6dhIKzBhGRm_QwoTfNDD8Ti67Zflu25tu-BDQOUzYx48N3P1bxyCnk0CgR6QgHqiVkMbZNUvpUySWjvU_TIAY5V10V6JpY-GxE-B6IVWEWsYqVm-ai"
        title="NUESTRA VISIÓN"
      >
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60 leading-loose space-y-6 max-w-2xl mx-auto md:mx-0">
          <p>
            NO CREAMOS ROPA PARA LAS MASAS. CREAMOS ARMADURAS PARA INDIVIDUOS QUE ENTIENDEN QUE LA FORMA EN QUE SE VISTEN ES UNA DECLARACIÓN DE PRINCIPIOS Y REBELDÍA.
          </p>
          <p>
            CADA COLECCIÓN ES UNA EXPLORACIÓN DEL VACÍO, DE LAS SOMBRAS QUE CONSTRUYEN LAS CIUDADES, Y DEL RUIDO VISUAL AL QUE ESTAMOS SOMETIDOS A DIARIO. REDUCIMOS ESE RUIDO A LÍNEAS LIMPIAS, CORTES AGRESIVOS Y MATERIALES PREMIUM QUE HABLAN POR SÍ SOLOS.
          </p>
        </div>
      </CinematicSection>

      {/* Process Scene */}
      <CinematicSection 
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgZ7o6yKO_cfC9pY2-LT4PIsHiZzMiekvj0LmH3-zDSKucSw2VV4gf0s9XMqkKRi6mM0MbRdNxL0aQ45L7DcPoYvENEf9qIUWCH1Sq2Q0Q_BxqkGAx1hgX1QdJ4EUXocXIzQNvJif8VGTQ42GBywsCE3-yxWt-7FAoQ8X4GvZ40vd6MtftO_ffXbCAUaZAE3aByn47KACVqlXsg0shX47r0x5ZXYeLo5_zgdmawtbEBs2z34YFETHeMp5CF1zZSZtD-SyWKy_Grk9"
        title="EL PROCESO Y EL DISEÑO"
      >
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60 leading-loose space-y-6 max-w-2xl mx-auto md:mx-0 mb-16">
          <p>
            EL ESTÁNDAR DE LA INDUSTRIA ESTÁ ROTO Y LAS PRENDAS DESCARTABLES YA NO SON UNA OPCIÓN. 
          </p>
          <p>
            EN ZAKURA, CADA DISEÑO PASA POR UN RIGUROSO PROCESO DE PRUEBA EN ENTORNOS URBANOS REALES. DESARROLLAMOS SILUETAS OVERSIZE, ESTRUCTURAS PESADAS Y COSTURAS REFORZADAS PENSADAS PARA SOPORTAR EL RITMO IMPLACABLE DE LA CALLE. 
          </p>
          <p>
            LA ESTÉTICA ES OSCURA Y PESADA, PERO EL PROPÓSITO ES CLARO: OFRECER DURABILIDAD, FUNCIONALIDAD Y UN ESTILO SIN COMPROMISOS NI LIMITACIONES.
          </p>
        </div>

        <Link href="/products" className="border border-white/30 px-10 py-6 hover:bg-white hover:text-black transition-all text-[11px] font-bold tracking-[0.3em] uppercase group flex items-center justify-center md:justify-start gap-6 w-max mx-auto md:mx-0">
          EXPLORAR LA COLECCIÓN
          <span className="material-symbols-outlined text-sm font-light group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </Link>
      </CinematicSection>
    </div>
  );
}
