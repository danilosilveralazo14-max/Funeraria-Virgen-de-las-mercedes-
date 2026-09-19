const API_BASE = import.meta.env.VITE_API_URL || "/api";

export async function enviarContacto(payload) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const error = new Error(data.mensaje || "No se pudo enviar el mensaje.");
    error.errores = data.errores || {};
    throw error;
  }

  return data;
}
