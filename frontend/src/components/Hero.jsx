import { negocio, videoHero, whatsappUrl } from "../lib/business";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-vino-dark">
      {/* Fondo a pantalla completa: video si ya lo tienes, si no la imagen de poster */}
      {videoHero.mp4 ? (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={videoHero.mp4}
          poster={videoHero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : (
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={videoHero.poster}
          alt=""
          aria-hidden="true"
        />
      )}

      {/* Capa oscura para que el texto se lea.
          En móvil el texto ocupa todo el ancho, así que el degradado va de abajo hacia
          arriba (más oscuro abajo, donde está el texto). En pantallas grandes el texto
          queda a la izquierda, así que el degradado va de izquierda a derecha. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-vino-dark/90 via-vino-dark/65 to-vino-dark/25 sm:bg-gradient-to-r sm:from-vino-dark/90 sm:via-vino-dark/60 sm:to-vino-dark/20"
        aria-hidden="true"
      />

      <div className="container-page flex min-h-[460px] flex-col justify-center py-14 sm:min-h-[480px] sm:py-16 lg:min-h-[560px] lg:py-20">
        <div className="max-w-2xl text-marfil-soft">
          <p className="flex items-center gap-3 text-sm font-medium tracking-wide text-dorado-light">
            <span className="h-px w-8 bg-dorado-light/60" />
            {negocio.slogan}
          </p>

          <h1 className="mt-4 font-display text-[2.15rem] font-medium leading-[1.12] tracking-tight sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-[3.4rem] lg:leading-[1.06]">
            Funeraria
            <br />
            <span className="text-dorado-light">&ldquo;Virgen de las Mercedes&rdquo;</span>
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-marfil-soft/90 sm:mt-5 sm:text-base lg:text-[17px]">
            Acompañamos a tu familia con calidez, respeto y disponibilidad inmediata, las 24
            horas del día. Un solo lugar para cada trámite y cada decisión, sin que tengas que
            preocuparte por nada más.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href={`tel:${negocio.telefonoTel}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-dorado px-8 py-3.5 text-sm font-semibold text-vino-dark transition-colors hover:bg-dorado-light sm:w-auto"
            >
              <Icon name="phone" className="h-4 w-4" />
              {negocio.telefono}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-marfil-soft/50 bg-transparent px-8 py-3.5 text-sm font-semibold text-marfil-soft transition-colors hover:border-marfil-soft hover:bg-marfil-soft/10 sm:w-auto"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
