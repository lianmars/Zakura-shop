export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 px-12 md:px-24 flex flex-col items-center justify-center text-center">
      <h1 className="font-bebas text-6xl md:text-[100px] mb-8">CONTÁCTANOS</h1>
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/70 max-w-2xl mb-12">
        ¿TIENES ALGUNA PREGUNTA SOBRE NUESTROS DROPS, TU PEDIDO O COLABORACIONES?
      </p>
      <form className="w-full max-w-md flex flex-col gap-6 font-mono text-[10px] tracking-[0.2em] uppercase">
        <input 
          type="text" 
          placeholder="NOMBRE" 
          className="bg-transparent border border-white/20 px-6 py-4 outline-none focus:border-white transition-colors placeholder:text-white/30"
        />
        <input 
          type="email" 
          placeholder="CORREO" 
          className="bg-transparent border border-white/20 px-6 py-4 outline-none focus:border-white transition-colors placeholder:text-white/30"
        />
        <textarea 
          placeholder="MENSAJE" 
          rows={5}
          className="bg-transparent border border-white/20 px-6 py-4 outline-none focus:border-white transition-colors placeholder:text-white/30 resize-none"
        ></textarea>
        <button type="button" className="bg-white text-black py-5 font-bold tracking-[0.3em] hover:bg-white/80 transition-colors">
          ENVIAR MENSAJE
        </button>
      </form>
    </div>
  );
}
