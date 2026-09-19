import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { servicios, whatsappUrl } from "../lib/business";

export default function Servicios() {
  return (
    <>
      <section className="bg-vino-dark text-marfil-soft">
        <div className="container-page py-16">
          <p className="eyebrow text-dorado-light">Servicios</p>
          <h1 className="mt-3 font-display text-5xl">Cómo podemos ayudarte</h1>
          <p className="mt-4 max-w-xl text-[15px] text-marfil-soft/75">
            Cada familia es distinta, por eso ofrecemos un conjunto de servicios que se
            adapta a tus necesidades, tus tiempos y tus posibilidades.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </section>

      {/* PLANES */}
      <section className="bg-vino-dark text-marfil-soft">
        <div className="container-page py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-dorado-light">
              Planes funerarios
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Un plan para cada necesidad
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-marfil-soft/75">
              Cada plan incluye ataúd, capilla ardiente y coordinación de trámites.
              Escríbenos y te enviamos el detalle y las tarifas actualizadas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <PlanCard
              nombre="Esencial"
              descripcion="Cobertura básica digna, pensada para servicios sencillos y con presupuesto ajustado."
              items={["Ataúd modelo estándar", "Capilla ardiente por 24h", "Coordinación de trámites"]}
            />
            <PlanCard
              destacado
              nombre="Tradicional"
              descripcion="Nuestro plan más solicitado, con mejores acabados y mayor acompañamiento."
              items={[
                "Ataúd modelo clásico o superior",
                "Capilla ardiente sin límite de horas",
                "Carroza fúnebre incluida",
                "Asesoría en trámites y seguros",
              ]}
            />
            <PlanCard
              nombre="Integral"
              descripcion="Servicio completo con los mejores acabados y total acompañamiento a la familia."
              items={[
                "Ataúd modelo premium",
                "Capilla ardiente principal",
                "Carroza y porta-flores",
                "Traslados incluidos",
                "Acompañamiento personalizado 24/7",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-dorado-dark text-center">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-vino">
            Resolvemos tus dudas
          </h2>

          <div className="mt-10 divide-y divide-tinta/10 rounded-2xl border border-tinta/10">
            <Faq pregunta="¿Cuánto tiempo tardan en llegar tras la llamada?">
              Nuestro equipo se moviliza de inmediato apenas recibimos tu llamada o
              mensaje. Los tiempos varían según la zona, pero trabajamos con
              disponibilidad las 24 horas para responder lo antes posible.
            </Faq>
            <Faq pregunta="¿Qué necesito para iniciar el servicio?">
              Basta con contactarnos por teléfono o WhatsApp. Te iremos guiando en cada
              trámite y documentación necesaria durante el proceso.
            </Faq>
            <Faq pregunta="¿Trabajan con seguros o planes exequiales?">
              Sí. Te ayudamos a coordinar y validar tu cobertura con EsSalud, SIS, AFP,
              ONP, SOAT o tu seguro privado, sin costos ocultos.
            </Faq>
            <Faq pregunta="¿Puedo ver los ataúdes y ambientes antes de decidir?">
              Por supuesto. Puedes agendar una visita a nuestras instalaciones o
              pedirnos fotos y videos por WhatsApp para conocer las opciones
              disponibles antes de tomar una decisión.
            </Faq>
            <Faq pregunta="¿Hacen traslados fuera de Lima?">
              Sí, coordinamos traslados nacionales e internacionales de restos, con
              todo el respaldo legal y la documentación correspondiente.
            </Faq>
          </div>
        </div>
      </section>

      <section className="bg-marfil-deep/60">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl text-vino">
            ¿Necesitas orientación en este momento?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-tinta/70">
            Escríbenos o llámanos y te explicaremos, sin compromiso, qué opción se
            ajusta mejor a tu situación.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-vino px-7 py-3 text-sm font-semibold text-marfil-soft hover:bg-vino-dark transition-colors"
            >
              Escribir por WhatsApp
            </a>
            <Link
              to="/contacto"
              className="rounded-md border border-vino/40 px-7 py-3 text-sm font-semibold text-vino hover:bg-vino/5 transition-colors"
            >
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Faq({ pregunta, children }) {
  return (
    <details className="group px-6 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-vino">
        {pregunta}
        <span className="shrink-0 text-dorado-dark transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-[15px] leading-relaxed text-tinta/70">{children}</p>
    </details>
  );
}

function PlanCard({ nombre, descripcion, items, destacado = false }) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        destacado
          ? "bg-dorado text-vino-dark shadow-xl ring-2 ring-dorado-light"
          : "bg-marfil-soft/10 text-marfil-soft"
      }`}
    >
      {destacado && (
        <span className="rounded-full bg-vino-dark px-3 py-1 text-xs font-semibold text-marfil-soft">
          Más elegido
        </span>
      )}
      <h3 className="mt-4 text-xl font-bold">{nombre}</h3>
      <p className={`mt-2 text-sm ${destacado ? "text-vino-dark/80" : "text-marfil-soft/70"}`}>
        {descripcion}
      </p>
      <ul className="mt-5 space-y-2 text-sm">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className={destacado ? "text-vino-dark" : "text-dorado-light"}>✓</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contacto"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-md py-2.5 text-sm font-semibold transition-colors ${
          destacado
            ? "bg-vino-dark text-marfil-soft hover:bg-vino"
            : "border border-marfil-soft/30 hover:bg-marfil-soft/10"
        }`}
      >
        Consultar tarifas
      </Link>
    </div>
  );
}
