import { Link } from "react-router-dom";
import { AtaudIlustracion, CapillaIlustracion, CarrozaIlustracion } from "../components/Ornaments";
import { whatsappUrl } from "../lib/business";

const capillas = [
  { id: 1, titulo: "Capilla clásica", texto: "Cortinas en vino, candelabros dorados y crucifijo central." },
  { id: 2, titulo: "Capilla íntima", texto: "Ambiente reducido para servicios privados y familiares." },
  { id: 3, titulo: "Capilla principal", texto: "Nuestra sala más amplia, con capacidad para grandes cortejos." },
  { id: 4, titulo: "Capilla nocturna", texto: "Iluminación cálida para el acompañamiento durante la noche." },
];

const vehiculos = [
  { id: 1, titulo: "Coche porta-flores", texto: "Unidad para el traslado de arreglos florales del cortejo." },
  { id: 2, titulo: "Carroza clásica", texto: "Acabados en negro con detalles cromados." },
  { id: 3, titulo: "Carroza ejecutiva", texto: "Modelo sedán, ideal para servicios en la ciudad." },
  { id: 4, titulo: "Carroza premium", texto: "Nuestra unidad de mayor categoría, para servicios especiales." },
];

const ataudes = [
  { id: 1, titulo: "Modelo Caoba", texto: "Acabado en madera caoba con interior en tela clara.", medida: "1.90 x 0.55 m", claro: "#C98554", oscuro: "#6E3A1E" },
  { id: 2, titulo: "Modelo Nogal", texto: "Línea recta, barniz brillante y herrajes dorados.", medida: "1.90 x 0.55 m", claro: "#8A5C36", oscuro: "#3E2612" },
  { id: 3, titulo: "Modelo Cedro", texto: "Tono cálido, ideal para servicios tradicionales.", medida: "1.90 x 0.55 m", claro: "#D9A466", oscuro: "#8C5A34" },
  { id: 4, titulo: "Modelo Ejecutivo", texto: "Diseño ovalado con acabado de alto brillo.", medida: "2.00 x 0.60 m", claro: "#9C6A3E", oscuro: "#4A2E16" },
  { id: 5, titulo: "Modelo Clásico", texto: "Nuestro modelo más solicitado, equilibrio entre calidad y precio.", medida: "1.90 x 0.55 m", claro: "#B87A4B", oscuro: "#6E4526" },
  { id: 6, titulo: "Modelo Premium", texto: "Maderas selectas y herrajes de mayor categoría.", medida: "2.00 x 0.60 m", claro: "#6E4526", oscuro: "#241608" },
  { id: 7, titulo: "Modelo Estándar", texto: "Opción digna y accesible para todo presupuesto.", medida: "1.85 x 0.55 m", claro: "#CB9A6A", oscuro: "#7A4A28" },
  { id: 8, titulo: "Modelo Especial", texto: "Detalles tallados a mano en la tapa.", medida: "2.00 x 0.60 m", claro: "#7C5230", oscuro: "#3A2312" },
];

export default function Galeria() {
  return (
    <>
      <section className="bg-vino-dark text-marfil-soft">
        <div className="container-page py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-dorado-light">
            Galería
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Nuestras instalaciones y equipamiento
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-marfil-soft/75">
            Estos son los modelos y ambientes que ofrecemos. Cada familia puede elegir
            la opción que mejor se ajuste a sus necesidades y posibilidades. Escríbenos
            para conocer disponibilidad y tarifas actualizadas.
          </p>
        </div>
      </section>

      <GaleriaSeccion
        titulo="Capillas"
        subtitulo="Salas de velación equipadas para acompañar con dignidad."
        items={capillas}
        prefijo="capilla"
        render={(item, idKey) => <CapillaIlustracion id={idKey} className="h-full w-full" />}
      />

      <div className="hairline" />

      <GaleriaSeccion
        titulo="Vehículos"
        subtitulo="Unidades propias para el traslado y acompañamiento del cortejo."
        items={vehiculos}
        prefijo="carroza"
        render={(item, idKey) => <CarrozaIlustracion id={idKey} className="h-full w-full" />}
        alterno
      />

      <div className="hairline" />

      <GaleriaSeccion
        titulo="Ataúdes"
        subtitulo="Distintos modelos y acabados, cada uno con sus medidas de referencia."
        items={ataudes}
        prefijo="ataud"
        render={(item, idKey) => (
          <AtaudIlustracion id={idKey} claro={item.claro} oscuro={item.oscuro} className="h-full w-full" />
        )}
      />

      <section className="container-page pb-20">
        <div className="rounded-2xl border border-dorado/30 bg-marfil-deep/50 p-8 text-center">
          <p className="text-[15px] text-tinta/70">
            Estas ilustraciones representan nuestros modelos disponibles. Muy pronto
            actualizaremos esta galería con fotografías reales de nuestras
            instalaciones, vehículos y ataúdes. Si quieres conocerlos antes,
            contáctanos y coordinamos una visita sin compromiso.
          </p>
          <a
            href={whatsappUrl("Hola, quisiera agendar una visita para conocer sus ataúdes y capillas.")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-md bg-vino px-6 py-2.5 text-sm font-semibold text-marfil-soft hover:bg-vino-dark transition-colors"
          >
            Agendar una visita
          </a>
        </div>
      </section>
    </>
  );
}

function GaleriaSeccion({ titulo, subtitulo, items, render, prefijo, alterno = false }) {
  return (
    <section className={alterno ? "bg-marfil-deep/50" : "bg-white"}>
      <div className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-tinta/10 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-vino">{titulo}</h2>
            <p className="mt-2 max-w-xl text-[15px] text-tinta/70">{subtitulo}</p>
          </div>
          <span className="text-sm font-medium text-tinta/50">{items.length} modelos</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-tinta/10 bg-marfil-soft shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-b from-marfil-deep to-[#e9ddc0] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),transparent_70%)]" />
                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                  {render(item, `${prefijo}-${item.id}`)}
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="font-semibold text-vino">{item.titulo}</p>
                <p className="mt-1 text-[13px] leading-snug text-tinta/60">{item.texto}</p>
                {item.medida && (
                  <p className="mt-2 text-xs font-medium text-dorado-dark">Medidas: {item.medida}</p>
                )}
                <Link
                  to="/contacto"
                  className="mt-3 inline-block text-xs font-semibold text-vino hover:text-vino-dark"
                >
                  Consultar precio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
