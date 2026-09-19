const express = require("express");
const business = require("../data/business");

const router = express.Router();

// GET /api/info -> datos generales de la funeraria (contacto, dirección, horario)
router.get("/", (req, res) => {
  const { servicios, galeria, ...info } = business;
  res.json(info);
});

// GET /api/info/servicios -> lista de servicios ofrecidos
router.get("/servicios", (req, res) => {
  res.json(business.servicios);
});

// GET /api/info/galeria -> lista de imágenes de la galería
router.get("/galeria", (req, res) => {
  res.json(business.galeria);
});

module.exports = router;
