const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const DATA_FILE = path.join(__dirname, "..", "data", "mensajes.json");

function readMessages() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error leyendo mensajes:", err);
    return [];
  }
}

function saveMessages(messages) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

function isValidPhone(phone) {
  return /^[+()\d\s-]{6,20}$/.test(phone);
}

// POST /api/contact -> recibe un mensaje del formulario de contacto
router.post("/", (req, res) => {
  const { nombre, telefono, email, mensaje, servicio } = req.body || {};

  const errores = {};
  if (!nombre || String(nombre).trim().length < 2) {
    errores.nombre = "Ingresa un nombre válido.";
  }
  if (!telefono || !isValidPhone(String(telefono))) {
    errores.telefono = "Ingresa un teléfono válido.";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    errores.email = "Ingresa un correo válido.";
  }
  if (!mensaje || String(mensaje).trim().length < 5) {
    errores.mensaje = "Cuéntanos brevemente cómo podemos ayudarte.";
  }

  if (Object.keys(errores).length > 0) {
    return res.status(400).json({ ok: false, errores });
  }

  const nuevoMensaje = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    nombre: String(nombre).trim(),
    telefono: String(telefono).trim(),
    email: email ? String(email).trim() : null,
    servicio: servicio ? String(servicio).trim() : null,
    mensaje: String(mensaje).trim(),
    fecha: new Date().toISOString(),
  };

  const messages = readMessages();
  messages.push(nuevoMensaje);
  saveMessages(messages);

  res.status(201).json({
    ok: true,
    mensaje: "Gracias por escribirnos. Nos comunicaremos contigo a la brevedad.",
    data: { id: nuevoMensaje.id },
  });
});

// GET /api/contact -> (uso administrativo) lista los mensajes recibidos
router.get("/", (req, res) => {
  res.json(readMessages());
});

module.exports = router;
