export const negocio = {
  nombre: 'Funeraria "Virgen de las Mercedes"',
  slogan: "En los momentos difíciles estamos para servirte",
  telefono: "+51 948 600 608",
  telefonoTel: "+51948600608",
  whatsapp: "51948600608",
  direccion: "Av. 9 de Diciembre 405",
  distrito: "Andrés Avelino Cáceres Dorregaray",
  ciudad: "Lima, Perú",
  horario: "Atención las 24 horas, los 7 días de la semana",
};

export const whatsappUrl = (mensaje = "Hola, quisiera más información sobre sus servicios.") =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

// Video de fondo del Hero. Si aún no tienes un video, deja mp4 en null y se
// usará la imagen de "poster" como fondo estático (así queda funcionando ya).
// Cuando tengas el video, solo coloca el archivo en /public/assets y escribe
// su ruta aquí, por ejemplo: "/assets/hero-video.mp4".
export const videoHero = {
  mp4: null,
  poster: "/assets/hero-virgen.png",
};

export const servicios = [
  {
    id: "velatorio",
    icono: "candle",
    titulo: "Servicio de velatorio",
    descripcion:
      "Salas de velación acogedoras y equipadas para acompañar a tu familia en un ambiente de paz, respeto y privacidad.",
  },
  {
    id: "cremacion",
    icono: "flame",
    titulo: "Cremación",
    descripcion:
      "Servicio de cremación cumpliendo todos los protocolos vigentes, con la calidez humana que tu familia merece.",
  },
  {
    id: "traslados",
    icono: "route",
    titulo: "Traslados nacionales e internacionales",
    descripcion:
      "Coordinamos el traslado de restos dentro y fuera del país, con total responsabilidad, puntualidad y respaldo legal.",
  },
  {
    id: "carroza",
    icono: "car",
    titulo: "Carroza y movilidad",
    descripcion:
      "Contamos con carroza fúnebre, unidades de acompañamiento y porta-flores para todo el cortejo.",
  },
  {
    id: "planes",
    icono: "shield",
    titulo: "Planes y convenios",
    descripcion:
      "Trabajamos con planes exequiales y convenios con compañías de seguros para brindarte tranquilidad económica.",
  },
  {
    id: "asesoria",
    icono: "headset",
    titulo: "Asesoría personalizada 24/7",
    descripcion:
      "Nuestro equipo te acompaña en todo momento, de día o de noche, en los trámites y documentación necesarios.",
  },
];

export const galeria = [
  { id: 1, src: "/assets/virgen-cuadrada.png", alt: "Nuestra Señora de las Mercedes" },
  { id: 2, src: "/assets/hero-virgen.png", alt: "Imagen venerada en la capilla" },
];
