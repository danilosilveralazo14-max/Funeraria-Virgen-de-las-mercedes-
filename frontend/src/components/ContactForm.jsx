import { useState } from "react";
import { enviarContacto } from "../lib/api";
import { servicios } from "../lib/business";

const estadoInicial = { nombre: "", telefono: "", email: "", servicio: "", mensaje: "" };

export default function ContactForm() {
  const [form, setForm] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState(null); // { ok: bool, texto }

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    setErrores({});
    setResultado(null);
    try {
      const data = await enviarContacto(form);
      setResultado({ ok: true, texto: data.mensaje });
      setForm(estadoInicial);
    } catch (err) {
      setErrores(err.errores || {});
      setResultado({
        ok: false,
        texto: err.message || "No se pudo enviar el mensaje. Intenta nuevamente.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" error={errores.nombre}>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={onChange}
            className="campo"
            placeholder="Tu nombre"
          />
        </Field>
        <Field label="Teléfono" error={errores.telefono}>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={onChange}
            className="campo"
            placeholder="9xx xxx xxx"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo (opcional)" error={errores.email}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="campo"
            placeholder="tucorreo@ejemplo.com"
          />
        </Field>
        <Field label="Servicio de interés">
          <select name="servicio" value={form.servicio} onChange={onChange} className="campo">
            <option value="">Selecciona una opción</option>
            {servicios.map((s) => (
              <option key={s.id} value={s.titulo}>
                {s.titulo}
              </option>
            ))}
            <option value="Otro">Otro / Urgente</option>
          </select>
        </Field>
      </div>

      <Field label="Mensaje" error={errores.mensaje}>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={onChange}
          rows={4}
          className="campo resize-none"
          placeholder="Cuéntanos brevemente cómo podemos ayudarte"
        />
      </Field>

      <button
        type="submit"
        disabled={enviando}
        className="rounded-md inline-flex items-center justify-center bg-vino text-marfil-soft px-7 py-3 text-sm font-semibold tracking-wide hover:bg-vino-dark transition-colors disabled:opacity-60"
      >
        {enviando ? "Enviando…" : "Enviar mensaje"}
      </button>

      {resultado && (
        <p
          role="status"
          className={`text-sm ${resultado.ok ? "text-vino" : "text-red-700"}`}
        >
          {resultado.texto}
        </p>
      )}
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-sm text-tinta/70">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
    </label>
  );
}
