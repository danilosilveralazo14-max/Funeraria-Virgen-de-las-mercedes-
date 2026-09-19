import { Link } from "react-router-dom";
import { negocio } from "../lib/business";

export default function Footer() {
  return (
    <footer className="bg-vino-dark text-marfil-soft/90">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-virgen.png"
              alt="Virgen de las Mercedes"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-dorado/50"
            />
            <p className="font-display text-lg font-bold">
              Funeraria
              <br />
              <span className="text-dorado-light">Virgen de las Mercedes</span>
            </p>
          </div>
          <p className="mt-4 text-sm text-marfil-soft/70 max-w-xs">
            {negocio.slogan}.
          </p>
        </div>

        <div>
          <p className="eyebrow text-dorado-light/90">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-dorado-light">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-dorado-light">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-dorado-light">Servicios</Link></li>
            <li><Link to="/galeria" className="hover:text-dorado-light">Galería</Link></li>
            <li><Link to="/contacto" className="hover:text-dorado-light">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-dorado-light/90">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-marfil-soft/85">
            <li>
              <a href={`tel:${negocio.telefonoTel}`} className="hover:text-dorado-light">
                {negocio.telefono}
              </a>
            </li>
            <li>
              {negocio.direccion}, {negocio.distrito}
            </li>
            <li>{negocio.ciudad}</li>
            <li className="pt-1 text-marfil-soft/60">{negocio.horario}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-marfil-soft/15">
        <p className="container-page py-5 text-xs text-marfil-soft/60">
          © {new Date().getFullYear()} Funeraria "Virgen de las Mercedes". Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
