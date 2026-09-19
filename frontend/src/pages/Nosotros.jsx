import { Link } from "react-router-dom";
import { negocio } from "../lib/business";

export default function Nosotros() {
  return (
    <>
      <section className="bg-vino-dark text-marfil-soft">
        <div className="container-page py-16">
          <p className="eyebrow text-dorado-light">Nosotros</p>
          <h1 className="mt-3 font-display text-5xl">Quiénes somos</h1>
        </div>
      </section>

      <section className="container-page grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <img
          src="/assets/virgen-cuadrada.png"
          alt="Virgen de las Mercedes, patrona de nuestra funeraria"
          className="w-full rounded-2xl object-cover shadow-lg shadow-vino/20"
        />

        <div className="space-y-6">
          <h2 className="font-display text-3xl text-vino">
            Un servicio hecho para sostener a tu familia
          </h2>
          <p className="text-[15px] leading-relaxed text-tinta/75">
            Funeraria "Virgen de las Mercedes" nace del compromiso de brindar un
            servicio fúnebre cercano, digno y disponible en cualquier momento, en el
            distrito de Andrés Avelino Cáceres Dorregaray. Sabemos que la pérdida de un
            ser querido no avisa, por eso nuestro equipo está preparado para
            responder de inmediato, de día o de noche.
          </p>
          <p className="text-[15px] leading-relaxed text-tinta/75">
            Bajo la advocación de la Virgen de las Mercedes, ofrecemos cada servicio con
            la calidez humana y el respeto que cada familia merece, cuidando cada
            detalle para que puedas concentrarte en lo esencial: despedir a los tuyos
            en paz.
          </p>

          <div className="hairline pt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-display text-3xl text-dorado-dark">24/7</p>
              <p className="mt-1 text-sm text-tinta/70">
                Atención permanente, todos los días del año.
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-dorado-dark">100%</p>
              <p className="mt-1 text-sm text-tinta/70">
                Compromiso con la dignidad y privacidad de tu familia.
              </p>
            </div>
          </div>

          <Link
            to="/contacto"
            className="rounded-md inline-flex w-fit items-center gap-2 bg-vino px-7 py-3 text-sm font-semibold text-marfil-soft hover:bg-vino-dark transition-colors"
          >
            Conversemos sobre tu caso
          </Link>
        </div>
      </section>

      <section className="bg-marfil-deep/60">
        <div className="container-page grid gap-10 py-16 sm:grid-cols-3">
          <Valor titulo="Cercanía" texto="Escuchamos a cada familia y adaptamos el servicio a sus necesidades y creencias." />
          <Valor titulo="Respeto" texto="Cuidamos cada detalle del velatorio y los trámites con dignidad y discreción." />
          <Valor titulo="Disponibilidad" texto="Un equipo listo para responder a cualquier hora, todos los días del año." />
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="container-page py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-dorado-dark">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-vino sm:text-4xl">
            Cuatro pasos, un solo acompañamiento
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Paso n="1" titulo="Nos contactas" texto="Llámanos o escríbenos por WhatsApp, a cualquier hora del día." />
          <Paso n="2" titulo="Coordinamos" texto="Definimos el plan, el ataúd y la capilla según tu presupuesto." />
          <Paso n="3" titulo="Nos encargamos" texto="Gestionamos trámites, traslados y documentación necesaria." />
          <Paso n="4" titulo="Te acompañamos" texto="Estamos presentes en cada momento del velatorio y la despedida." />
        </div>
      </section>

      <section className="container-page py-16 text-sm text-tinta/60">
        {negocio.direccion}, {negocio.distrito}, {negocio.ciudad}
      </section>
    </>
  );
}

function Paso({ n, titulo, texto }) {
  return (
    <div className="relative rounded-2xl border border-tinta/10 bg-marfil-soft p-6">
      <span className="text-4xl font-bold text-dorado/30">{n}</span>
      <h3 className="mt-2 font-semibold text-vino">{titulo}</h3>
      <p className="mt-1 text-[14px] leading-relaxed text-tinta/65">{texto}</p>
    </div>
  );
}

function Valor({ titulo, texto }) {
  return (
    <div className="border-t border-tinta/15 pt-5">
      <h3 className="font-display text-2xl text-vino">{titulo}</h3>
      <p className="mt-2 text-[15px] text-tinta/70">{texto}</p>
    </div>
  );
}
