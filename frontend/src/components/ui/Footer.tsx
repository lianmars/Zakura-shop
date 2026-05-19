import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white relative z-20">
      {/* Banner */}
      <div className="border-b border-white/10 py-6 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined font-light text-base">language</span>
          <span>ENVÍOS A TODO EL MUNDO</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined font-light text-base">sync</span>
          <span>DEVOLUCIONES FÁCILES</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined font-light text-base">lock</span>
          <span>PAGO SEGURO</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="font-bebas text-5xl tracking-[0.6em] mb-4">ZAKURA</h2>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-4">
              STREETWEAR / CULTURA / IDENTIDAD
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              EST. 2024
            </p>
          </div>
          
          <div className="mt-16 md:mt-0 text-[9px] tracking-[0.2em] text-white/40 uppercase">
            © 2024 ZAKURA. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* SHOP */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">TIENDA</h3>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">TODOS LOS PRODUCTOS</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">ABRIGOS</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">BUZOS</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">REMERAS</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">PANTALONES</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">ACCESORIOS</Link>
          </div>

          {/* COLLECTIONS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">COLECCIONES</h3>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">INVIERNO 24</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">FIRMA</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">ESENCIALES</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">DROPS LIMITADOS</Link>
          </div>

          {/* INFO */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">INFO</h3>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">SOBRE NOSOTROS</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">ENVÍOS</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">DEVOLUCIONES</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">GUÍA DE TALLES</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">CONTACTO</Link>
          </div>

          {/* STAY CONNECTED */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">MANTENTE CONECTADO</h3>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">INSTAGRAM</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">TIKTOK</Link>
            <Link href="#" className="text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">YOUTUBE</Link>
            
            <div className="mt-4">
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/60 block mb-3">SUSCRIBIRSE AL CORREO</span>
              <div className="flex items-center border border-white/20 px-4 py-3 group focus-within:border-white transition-colors">
                <input 
                  type="email" 
                  placeholder="TU CORREO" 
                  className="bg-transparent outline-none w-full text-[9px] tracking-[0.2em] placeholder:text-white/30"
                />
                <button className="material-symbols-outlined text-sm font-light text-white/50 group-focus-within:text-white transition-colors">
                  arrow_forward
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer Links */}
      <div className="px-8 md:px-24 pb-12 md:pb-8 flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 md:gap-12 text-[9px] tracking-[0.2em] text-white/40 uppercase text-center">
        <Link href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDAD</Link>
        <Link href="#" className="hover:text-white transition-colors">TÉRMINOS Y CONDICIONES</Link>
      </div>
    </footer>
  );
}
