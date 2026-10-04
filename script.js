
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const destinos = [
    {
    id: 1,
    nombre: "Mar del Plata",
    provincia: "Buenos Aires",
    region: "Centro",
    descripcion: "La clásica ciudad balnearia argentina, con playas, rambla y mucha actividad durante el verano.",
    tipo_experiencia: "Playas",
    imagen: "img/destino-mar-del-plata.png",
  },
  {
    id: 2,
    nombre: "Campo de Piedra Pómez",
    provincia: "Catamarca",
    region: "Norte",
    descripcion: "Un gigantesco e impactante 'mar' de bloques de roca volcánica blanca tallados por el viento.",
    tipo_experiencia: "Aventura",
    imagen: "img/campo-piedrapomez.png",
  },
   {
    id: 3,
    nombre: "Parque Nacional Chaco",
    provincia: "Chaco",
    region: "Litoral",
    descripcion: "Un denso monte de quebrachos centenarios y lagunas que resguarda monos carayá, tapires y aves nativas.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/parquechaco.png",
  },
    {
    id: 4,
    nombre: "Península Valdés",
    provincia: "Chubut",
    region: "Patagonia",
    descripcion: "Fauna marina que se puede observar de cerca: ballenas, lobos marinos y pingüinos en la costa.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/destino-valdes.png",
  },
  {
    id: 5,
    nombre: "CABA",
    provincia: "Ciudad Autónoma de Buenos Aires",
    region: "Centro",
    descripcion: "Teatros, cafés, museos y barrios con identidad propia para recorrer y conocer.",
    tipo_experiencia: "Cultura",
    imagen: "img/destino-buenos-aires.png",
  },
  {
    id: 6,
    nombre: "Villa Carlos Paz",
    provincia: "Córdoba",
    region: "Centro",
    descripcion: "Una vibrante ciudad a orillas de un lago, rodeada de sierras, teatros y entretenimiento veraniego.",
    tipo_experiencia: "Cultura",
    imagen: "img/carlospaz.png",
  },
  {
    id: 7,
    nombre: "Esteros del Iberá",
    provincia: "Corrientes",
    region: "Norte",
    descripcion: "Un inmenso humedal protegido ideal para navegar y ver yacarés, carpinchos y cientos de aves de cerca.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/ibera.png",
  },
   {
    id: 8,
    nombre: "Termas de Federación",
    provincia: "Entre Ríos",
    region: "Litoral",
    descripcion: "Un complejo de piletas con aguas relajantes a orillas de un lago, ideal para el descanso familiar.",
    tipo_experiencia: "Familiar",
    imagen: "img/termas.png",
  },
  {
    id: 9,
    nombre: "Bañado La Estrella",
    provincia: "Formosa",
    region: "Litoral",
    descripcion: "Un enorme humedal donde árboles inundados y cubiertos de enredaderas crean un paisaje acuático único.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/bañadolaestrella.png",
  },
  {
    id: 10,
    nombre: "Cerro de los Siete Colores",
    provincia: "Jujuy",
    region: "Norte",
    descripcion: "Un valle con montañas de muchos colores y pueblos antiguos donde todavia mantienen vivas sus tradiciones.",
    tipo_experiencia: "Cultura",
    imagen: "img/destino-humahuaca.png",
  },
  {
    id: 11,
    nombre: "Parque Nacional Lihué Calel",
    provincia: "La Pampa",
    region: "Pampeana",
    descripcion: "Un oasis de serranías bajas con pinturas rupestres y fauna nativa como guanacos en medio de la llanura.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/lihuelcalel.png",
  },
  {
    id: 12,
    nombre: "Parque Nacional Talampaya",
    provincia: "La Rioja",
    region: "Norte",
    descripcion: "Un imponente cañón de altísimas paredes rocosas rojas con petroglifos antiguos y geoformas esculpidas.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/talampaya.png",
  },
    {
    id: 13,
    nombre: "Mendoza y sus viñedos",
    provincia: "Mendoza",
    region: "Cuyo",
    descripcion: "Bodegas, degustaciones y la Cordillera de fondo, con la cosecha como gran época del año.",
    tipo_experiencia: "Gastronomía",
    imagen: "img/destino-mendoza.png",
  },
  {
    id: 14,
    nombre: "Parque Provincial Aconcagua",
    provincia: "Mendoza",
    region: "Cuyo",
    descripcion: "Caminatas de montaña con vista al cerro más alto de América.",
    tipo_experiencia: "Montaña",
    imagen: "img/destino-aconcagua.png",
  },
  {
    id: 15,
    nombre: "Cataratas del Iguazú",
    provincia: "Misiones",
    region: "Litoral",
    descripcion: "Un conjunto de cataratas en medio de la selva, con pasarelas que te llevan hasta la Garganta del Diablo.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/cataratas.png",
  },
  {
    id: 16,
    nombre: "San Martín de los Andes",
    provincia: "Neuquén",
    region: "Patagonia",
    descripcion: "Un pueblo de montaña de madera y piedra a orillas del Lago Lácar y la Ruta de los Siete Lagos.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/losandes.png",
  },
  {
    id: 17,
    nombre: "San Carlos de Bariloche",
    provincia: "Río Negro",
    region: "Patagonia",
    descripcion: "Lagos, bosques y cerros nevados, con esquí en invierno y chocolate durante todo el año.",
    tipo_experiencia: "Nieve",
    imagen: "img/destino-bariloche.png",
  },
  {
    id: 18,
    nombre: "Cafayate",
    provincia: "Salta",
    region: "Norte",
    descripcion: "Rodeado de montañas rojizas y grandes viñedos, se destaca por sus paisajes y por el Torrontés, el vino blanco tipico de la región.",
    tipo_experiencia: "Gastronomía",
    imagen: "img/destino-cafayate.png",
  },
  {
    id: 19,
    nombre: "Valle de la Luna (Ischigualasto)",
    provincia: "San Juan",
    region: "Cuyo",
    descripcion: "Formaciones rocosas que parecen un paisaje lunar y un importante tesoro de fósiles.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/destino-ischigualasto.png",
  },
   {
    id: 20,
    nombre: "Villa de Merlo",
    provincia: "San Luis",
    region: "Cuyo",
    descripcion: "Una villa serrana famosa en el mundo por su microclima de alta calidad y senderos naturales.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/merlo.png",
  },
  {
    id: 21,
    nombre: "Glaciar Perito Moreno",
    provincia: "Santa Cruz",
    region: "Patagonia",
    descripcion: "Un enorme muro de hielo que se ve puede observar de cerca desde las pasarelas del parque.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/destino-perito-moreno.png",
  },
  {
    id: 22,
    nombre: "Monumento a la Bandera (Rosario)",
    provincia: "Santa Fe",
    region: "Centro",
    descripcion: "Una imponente torre de piedra junto al río Paraná que conmemora el sitio donde se izó la bandera nacional..",
    tipo_experiencia: "Cultura",
    imagen: "img/rosario.png",
  },
  {
    id: 23,
    nombre: "Termas de Río Hondo",
    provincia: "Santiago del Estero",
    region: "Norte",
    descripcion: "Una gran ciudad-spa asentada sobre aguas termales curativas que combina relax y automovilismo.",
    tipo_experiencia: "Relax",
    imagen: "img/termasriohondo.png",
  },
  {
    id: 24,
    nombre: "Ushuaia",
    provincia: "Tierra del Fuego",
    region: "Patagonia",
    descripcion: "La ciudad más austral del mundo, rodeada de montañas, el canal Beagle y el fin del mundo.",
    tipo_experiencia: "Montaña",
    imagen: "img/destino-ushuaia.png",
  },
    {
    id: 25,
    nombre: "Tafí del Valle",
    provincia: "Tucumán",
    region: "Norte",
    descripcion: "Un verde oasis de montaña ideal para disfrutar de paisajes folclóricos y quesos artesanales.",
    tipo_experiencia: "Naturaleza",
    imagen: "img/tucuman.png",
  }
];

const destinosGrid = document.getElementById('destinos-grid');

function crearTarjeta(destino) {
  return `
    <div class="card">
      <img src="${destino.imagen}" alt="${destino.nombre}, ${destino.provincia}">
      <div class="card-content">
        <h3>${destino.nombre}</h3>
        <p class="card-provincia">${destino.provincia}</p>
        <p class="card-descripcion">${destino.descripcion}</p>
      </div>
    </div>
  `;
}

function mostrarDestinos(lista) {
  destinosGrid.innerHTML = lista.map(crearTarjeta).join('');
}

if (destinosGrid) {
  mostrarDestinos(destinos);
}