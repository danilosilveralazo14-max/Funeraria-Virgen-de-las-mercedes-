import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center py-20">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 font-display text-4xl text-vino">Página no encontrada</h1>
      <p className="mt-3 max-w-sm text-[15px] text-tinta/70">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex rounded-md bg-vino px-7 py-3 text-sm font-semibold text-marfil-soft hover:bg-vino-dark transition-colors"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
