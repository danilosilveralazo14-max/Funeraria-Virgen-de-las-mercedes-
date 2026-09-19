import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { negocio } from "../lib/business";
import Icon from "./Icon";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-tinta/10">
      <div className="hidden bg-vino-dark sm:block">
        <div className="container-page flex items-center justify-between py-2 text-xs text-marfil-soft/90">
          <span className="inline-flex items-center gap-2">
            <Icon name="clock" className="h-3.5 w-3.5 text-dorado-light" />
            {negocio.horario}
          </span>
          <a
            href={`tel:${negocio.telefonoTel}`}
            className="inline-flex items-center gap-2 hover:text-dorado-light transition-colors"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-dorado-light" />
            {negocio.telefono}
          </a>
        </div>
      </div>

      <div className="bg-marfil-soft/95 backdrop-blur">
        <nav className="container-page flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo-virgen.png"
            alt="Virgen de las Mercedes"
            className="h-12 w-12 rounded-full object-cover ring-1 ring-dorado/40"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-vino">Funeraria</span>
            <span className="block font-display text-sm font-semibold text-dorado-dark -mt-1">
              Virgen de las Mercedes
            </span>
          </span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-2 font-body text-[15px]">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `inline-block rounded-md px-4 py-2 transition-colors ${
                    isActive
                      ? "bg-vino text-marfil-soft font-semibold"
                      : "text-tinta/80 hover:text-vino"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${negocio.telefonoTel}`}
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-vino text-marfil-soft px-5 py-2.5 text-sm font-semibold hover:bg-vino-dark transition-colors"
        >
          <Icon name="phone" className="h-4 w-4" />
          Llamar ahora
        </a>

        <button
          className="md:hidden p-2 text-vino"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-tinta/10 bg-marfil-soft">
          <ul className="container-page py-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 border-b border-tinta/10 ${isActive ? "text-vino" : "text-tinta/80"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={`tel:${negocio.telefonoTel}`}
                className="rounded-md block text-center bg-vino text-marfil-soft py-2.5 font-semibold"
              >
                Llamar: {negocio.telefono}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}