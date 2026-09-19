import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";
import { negocio, whatsappUrl } from "../lib/business";

const mapsQuery = encodeURIComponent(
  `${negocio.direccion}, ${negocio.distrito}, ${negocio.ciudad}`
);

export default function Contacto() {
  return (
    <>
      <section className="bg-vino-dark text-marfil-soft">
        <div className="container-page py-16">
          <p className="eyebrow text-dorado-light">Contacto</p>
          <h1 className="mt-3 font-display text-5xl">Estamos para servirte</h1>
          <p className="mt-4 max-w-xl text-[15px] text-marfil-soft/75">
            Escríbenos y te responderemos a la brevedad, o llámanos directamente si
            necesitas atención inmediata.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-8">
          <Dato icon="phone" titulo="Teléfono / WhatsApp">
            <a href={`tel:${negocio.telefonoTel}`} className="hover:text-vino">
              {negocio.telefono}
            </a>
          </Dato>
          <Dato icon="pin" titulo="Dirección">
            {negocio.direccion}
            <br />
            {negocio.distrito}, {negocio.ciudad}
          </Dato>
          <Dato icon="clock" titulo="Horario de atención">
            {negocio.horario}
          </Dato>
          <Dato icon="mail" titulo="Correo">
            contacto@funerariavirgendelasmercedes.pe
          </Dato>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="rounded-md inline-flex items-center gap-2 bg-[#25D366] px-7 py-3 text-sm font-semibold text-white hover:brightness-95 transition"
          >
            Escribir por WhatsApp
          </a>

          <div className="hairline overflow-hidden rounded-2xl pt-6">
            <iframe
              title="Ubicación de Funeraria Virgen de las Mercedes"
              className="h-64 w-full grayscale-[15%]"
              loading="lazy"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-tinta/10 bg-marfil-soft p-8 shadow-sm sm:p-10">
          <h2 className="font-display text-2xl text-vino">Envíanos un mensaje</h2>
          <p className="mt-2 text-sm text-tinta/60">
            Completa el formulario y nos comunicaremos contigo a la brevedad.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function Dato({ icon, titulo, children }) {
  return (
    <div className="flex items-start gap-3">
      <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-dorado-dark" />
      <div>
        <p className="text-sm text-tinta/50">{titulo}</p>
        <p className="mt-0.5 text-[15px] text-tinta/85">{children}</p>
      </div>
    </div>
  );
}
