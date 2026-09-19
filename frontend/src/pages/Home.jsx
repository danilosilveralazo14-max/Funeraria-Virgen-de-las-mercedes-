import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import {
  FlorOrnamento,
  CarrozaIlustracion,
  CapillaIlustracion,
  UrnaIlustracion,
} from "../components/Ornaments";
import { negocio, servicios } from "../lib/business";

const destacados = [
  {
    id: "velorios",
    titulo: "Velorios",
    descripcion: "Espacios cómodos y respetuosos.",
    icono: "candle",
    imagen: "/assets/serv-velorios.jpg",
  },
  {
    id: "traslados",
    titulo: "Traslados",
    descripcion: "A nivel local y nacional.",
    icono: "car",
    imagen: "/assets/serv-traslados.jpg",
  },
  {
    id: "arreglos",
    titulo: "Arreglos Florales",
    descripcion: "Para cada momento especial.",
    icono: "flower",
    imagen: "/assets/serv-flores.jpg",
  },
  {
    id: "cremaciones",
    titulo: "Cremaciones",
    descripcion: "Con la dignidad que merecen.",
    icono: "urn",
    Ilustracion: UrnaIlustracion,
  },
  {
    id: "capilla",
    titulo: "Capilla",
    descripcion: "Un lugar de paz y recogimiento.",
    icono: "church",
    Ilustracion: CapillaIlustracion,
  },
];

const infoStrip = [
  { icon: "checkShield", title: "Atención", subtitle: "24/7" },
  { icon: "handshake", title: "Confidencial", subtitle: "en todo momento" },
  { icon: "users", title: "Trato humano", subtitle: "y respetuoso" },
  { icon: "pin", title: "Cobertura", subtitle: "en toda la región" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* INFO STRIP */}
      <section className="bg-vino-dark text-marfil-soft">
        <div className="container-page grid gap-8 py-8 sm:grid-cols-2 sm:divide-x sm:divide-marfil-soft/15 lg:grid-cols-4">
          {infoStrip.map((item) => (
            <div key={item.title} className="flex items-center gap-3 sm:pl-6 sm:first:pl-0">
              <Icon name={item.icon} className="h-7 w-7 shrink-0 text-dorado-light" />
              <div>
                <p className="font-display font-semibold leading-tight">{item.title}</p>
                <p className="text-sm text-marfil-soft/70">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS TEASER */}
      <section className="container-page grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-dorado/30" aria-hidden="true" />
          <img
            src="/assets/virgen-cuadrada.png"
            alt="Virgen de las Mercedes, patrona de nuestra funeraria"
            className="relative w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-dorado-dark">
            Nosotros
          </p>
          <h2 className="mt-3 text-3xl font-bold text-vino sm:text-4xl">
            Un acompañamiento cercano en el momento más difícil
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-tinta/75">
            En Funeraria "Virgen de las Mercedes" entendemos que despedir a un ser
            querido es uno de los momentos más delicados que puede vivir una familia.
            Por eso ponemos a tu disposición infraestructura digna, personal atento y
            disponibilidad inmediata, para que puedas dedicarte a lo importante:
            acompañar a los tuyos.
          </p>
          <Link
            to="/nosotros"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-vino px-6 py-3 text-sm font-semibold text-marfil-soft hover:bg-vino-dark transition-colors"
          >
            Conocer más sobre nosotros
          </Link>
        </div>
      </section>

      {/* SERVICIOS TEASER */}
      <section className="bg-marfil-deep/50">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-dorado-dark">
                Nuestros servicios
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-vino sm:text-4xl">
                Estamos contigo <span className="text-dorado-dark">en cada paso</span>
              </h2>
              <FlorOrnamento className="mt-4 h-8 w-8 -rotate-12 text-dorado" />
            </div>
            <Link
              to="/servicios"
              className="text-sm font-semibold text-vino hover:text-vino-dark"
            >
              Ver todos los servicios →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {destacados.map(({ id, titulo, descripcion, icono, imagen, Ilustracion }) => (
              <div
                key={id}
                className="group overflow-hidden rounded-2xl border border-tinta/10 bg-marfil-soft shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-vino/10 to-marfil-deep">
                  {imagen ? (
                    <img
                      src={imagen}
                      alt={titulo}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Ilustracion className="h-24 w-24 text-vino transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-marfil-soft bg-vino shadow-md">
                    <Icon name={icono} className="h-5 w-5 text-dorado-light" />
                  </div>
                </div>
                <div className="px-4 pb-6 pt-9 text-center">
                  <p className="font-display font-semibold text-vino">{titulo}</p>
                  <p className="mt-1 text-sm leading-snug text-tinta/65">{descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHÍCULOS */}
      <section className="container-page py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-dorado-dark">
            Vehículos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-vino sm:text-4xl">
            Carroza, porta-flores y movilidad
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] text-tinta/70">
            Contamos con unidades propias para acompañar el cortejo con puntualidad y
            presentación impecable en cada servicio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {["Carroza fúnebre", "Porta-flores", "Movilidad de acompañamiento"].map((v, i) => (
            <div
              key={v}
              className="overflow-hidden rounded-2xl border border-tinta/10 bg-marfil-soft shadow-sm"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-b from-marfil-deep to-[#e9ddc0] p-5">
                <CarrozaIlustracion id={`home-vehiculo-${i}`} className="h-full w-full" />
              </div>
              <p className="py-4 text-center font-semibold text-vino">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONVENIOS */}
      <section className="bg-vino text-marfil-soft">
        <div className="container-page py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-dorado-light">
                Convenios y facilidades
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Te ayudamos con los trámites ante tu seguro o plan exequial
              </h2>
              <p className="mt-4 max-w-xl text-[15px] text-marfil-soft/80">
                Si cuentas con un seguro de vida, plan exequial o cobertura pública,
                contáctanos: te orientamos en la coordinación de los trámites
                correspondientes, sin costos ocultos.
              </p>
            </div>
            <FlorOrnamento className="hidden h-20 w-20 text-dorado-light sm:block" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["EsSalud", "SIS", "AFP", "ONP", "SOAT", "Seguros privados"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-marfil-soft/30 px-4 py-2 text-sm font-medium text-marfil-soft/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-dorado-dark">
          Estamos disponibles para ti
        </p>
        <h2 className="mt-3 text-3xl font-bold text-vino sm:text-4xl">
          No tienes que atravesar esto solo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] text-tinta/70">
          Llámanos en cualquier momento del día o la noche. Nuestro equipo te guiará en
          cada paso, con calidez y total disposición.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${negocio.telefonoTel}`}
            className="rounded-md bg-vino px-8 py-3.5 text-sm font-semibold text-marfil-soft hover:bg-vino-dark transition-colors"
          >
            Llamar ahora
          </a>
          <Link
            to="/contacto"
            className="rounded-md border border-vino/40 px-8 py-3.5 text-sm font-semibold text-vino hover:bg-vino/5 transition-colors"
          >
            Escribir un mensaje
          </Link>
        </div>
      </section>
    </>
  );
}


