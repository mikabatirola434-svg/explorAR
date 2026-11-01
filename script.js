
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
    imagen: "img/destino-mar-del-plata.png",
  },
  {
    id: 2,
    nombre: "Campo de Piedra Pómez",
    provincia: "Catamarca",
    region: "Norte",
    descripcion: "Un gigantesco e impactante 'mar' de bloques de roca volcánica blanca tallados por el viento.",
    imagen: "img/campo-piedrapomez.png",
  },
   {
    id: 3,
    nombre: "Parque Nacional Chaco",
    provincia: "Chaco",
    region: "Litoral",
    descripcion: "Un denso monte de quebrachos centenarios y lagunas que resguarda monos carayá, tapires y aves nativas.",
    imagen: "img/parquechaco.png",
  },
    {
    id: 4,
    nombre: "Península Valdés",
    provincia: "Chubut",
    region: "Patagonia",
    descripcion: "Fauna marina que se puede observar de cerca: ballenas, lobos marinos y pingüinos en la costa.",
    imagen: "img/destino-valdes.png",
  },
  {
    id: 5,
    nombre: "CABA",
    provincia: "Ciudad Autónoma de Buenos Aires",
    region: "Centro",
    descripcion: "Teatros, cafés, museos y barrios con identidad propia para recorrer y conocer.",
    imagen: "img/destino-buenos-aires.png",
  },
  {
    id: 6,
    nombre: "Villa Carlos Paz",
    provincia: "Córdoba",
    region: "Centro",
    descripcion: "Una vibrante ciudad a orillas de un lago, rodeada de sierras, teatros y entretenimiento veraniego.",
    imagen: "img/carlospaz.png",
  },
  {
    id: 7,
    nombre: "Esteros del Iberá",
    provincia: "Corrientes",
    region: "Norte",
    descripcion: "Un inmenso humedal protegido ideal para navegar y ver yacarés, carpinchos y cientos de aves de cerca.",
    imagen: "img/ibera.png",
  },
   {
    id: 8,
    nombre: "Termas de Federación",
    provincia: "Entre Ríos",
    region: "Litoral",
    descripcion: "Un complejo de piletas con aguas relajantes a orillas de un lago, ideal para el descanso familiar.",
    imagen: "img/termas.png",
  },
  {
    id: 9,
    nombre: "Bañado La Estrella",
    provincia: "Formosa",
    region: "Litoral",
    descripcion: "Un enorme humedal donde árboles inundados y cubiertos de enredaderas crean un paisaje acuático único.",
    imagen: "img/bañadolaestrella.png",
  },
  {
    id: 10,
    nombre: "Cerro de los Siete Colores",
    provincia: "Jujuy",
    region: "Norte",
    descripcion: "Un valle con montañas de muchos colores y pueblos antiguos donde todavia mantienen vivas sus tradiciones.",
    imagen: "img/destino-humahuaca.png",
  },
  {
    id: 11,
    nombre: "Parque Nacional Lihué Calel",
    provincia: "La Pampa",
    region: "Pampeana",
    descripcion: "Un oasis de serranías bajas con pinturas rupestres y fauna nativa como guanacos en medio de la llanura.",
    imagen: "img/lihuelcalel.png",
  },
  {
    id: 12,
    nombre: "Parque Nacional Talampaya",
    provincia: "La Rioja",
    region: "Norte",
    descripcion: "Un imponente cañón de altísimas paredes rocosas rojas con petroglifos antiguos y geoformas esculpidas.",
    imagen: "img/talampaya.png",
  },
    {
    id: 13,
    nombre: "Mendoza y sus viñedos",
    provincia: "Mendoza",
    region: "Cuyo",
    descripcion: "Bodegas, degustaciones y la Cordillera de fondo, con la cosecha como gran época del año.",
    imagen: "img/destino-mendoza.png",
  },
  {
    id: 14,
    nombre: "Parque Provincial Aconcagua",
    provincia: "Mendoza",
    region: "Cuyo",
    descripcion: "Caminatas de montaña con vista al cerro más alto de América.",
    imagen: "img/destino-aconcagua.png",
  },
  {
    id: 15,
    nombre: "Cataratas del Iguazú",
    provincia: "Misiones",
    region: "Litoral",
    descripcion: "Un conjunto de cataratas en medio de la selva, con pasarelas que te llevan hasta la Garganta del Diablo.",
    imagen: "img/cataratas.png",
  },
  {
    id: 16,
    nombre: "San Martín de los Andes",
    provincia: "Neuquén",
    region: "Patagonia",
    descripcion: "Un pueblo de montaña de madera y piedra a orillas del Lago Lácar y la Ruta de los Siete Lagos.",
    imagen: "img/losandes.png",
  },
  {
    id: 17,
    nombre: "San Carlos de Bariloche",
    provincia: "Río Negro",
    region: "Patagonia",
    descripcion: "Lagos, bosques y cerros nevados, con esquí en invierno y chocolate durante todo el año.",
    imagen: "img/destino-bariloche.png",
  },
  {
    id: 18,
    nombre: "Cafayate",
    provincia: "Salta",
    region: "Norte",
    descripcion: "Rodeado de montañas rojizas y grandes viñedos, se destaca por sus paisajes y por el Torrontés, el vino blanco tipico de la región.",
    imagen: "img/destino-cafayate.png",
  },
  {
    id: 19,
    nombre: "Valle de la Luna (Ischigualasto)",
    provincia: "San Juan",
    region: "Cuyo",
    descripcion: "Formaciones rocosas que parecen un paisaje lunar y un importante tesoro de fósiles.",
    imagen: "img/destino-ischigualasto.png",
  },
   {
    id: 20,
    nombre: "Villa de Merlo",
    provincia: "San Luis",
    region: "Cuyo",
    descripcion: "Una villa serrana famosa en el mundo por su microclima de alta calidad y senderos naturales.",
    imagen: "img/merlo.png",
  },
  {
    id: 21,
    nombre: "Glaciar Perito Moreno",
    provincia: "Santa Cruz",
    region: "Patagonia",
    descripcion: "Un enorme muro de hielo que se ve puede observar de cerca desde las pasarelas del parque.",
    imagen: "img/destino-perito-moreno.png",
  },
  {
    id: 22,
    nombre: "Monumento a la Bandera (Rosario)",
    provincia: "Santa Fe",
    region: "Centro",
    descripcion: "Una imponente torre de piedra junto al río Paraná que conmemora el sitio donde se izó la bandera nacional..",
    imagen: "img/rosario.png",
  },
  {
    id: 23,
    nombre: "Termas de Río Hondo",
    provincia: "Santiago del Estero",
    region: "Norte",
    descripcion: "Una gran ciudad-spa asentada sobre aguas termales curativas que combina relax y automovilismo.",
    imagen: "img/termasriohondo.png",
  },
  {
    id: 24,
    nombre: "Ushuaia",
    provincia: "Tierra del Fuego",
    region: "Patagonia",
    descripcion: "La ciudad más austral del mundo, rodeada de montañas, el canal Beagle y el fin del mundo.",
    imagen: "img/destino-ushuaia.png",
  },
    {
    id: 25,
    nombre: "Tafí del Valle",
    provincia: "Tucumán",
    region: "Norte",
    descripcion: "Un verde oasis de montaña ideal para disfrutar de paisajes folclóricos y quesos artesanales.",
    imagen: "img/tucuman.png",
  }
];
const experiencias = [
  {
    id: 1,
    nombre: "Trekking al Aconcagua",
    destino_id: 14,
    tipo: "Aventura",
    duracion: "Varios días",
    mejor_epoca: "Diciembre a marzo",
    descripcion: "Una expedición de montaña para quienes buscan un desafío real."
  },
  {
    id: 2,
    nombre: "Degustación de vinos en Cafayate",
    destino_id: 18,
    tipo: "Gastronomía",
    duracion: "Medio día",
    mejor_epoca: "Otoño y primavera",
    descripcion: "Un recorrido por bodegas de altura para probar el torrontés."
  },
  {
    id: 3,
    nombre: "Avistaje de ballenas",
    destino_id: 4,
    tipo: "Naturaleza",
    duracion: "2 horas",
    mejor_epoca: "Junio a diciembre",
    descripcion: "Una salida en barco para ver ballenas francas de cerca."
  },
  {
    id: 4,
    nombre: "Navegación al glaciar",
    destino_id: 21,
    tipo: "Naturaleza",
    duracion: "1 hora",
    mejor_epoca: "Octubre a abril",
    descripcion: "Un paseo en barco frente a la pared de hielo del Perito Moreno."
  },
  {
    id: 5,
    nombre: "Esquí en el cerro",
    destino_id: 17,
    tipo: "Nieve",
    duracion: "Día completo",
    mejor_epoca: "Julio a septiembre",
    descripcion: "Pistas para todos los niveles con vista a los lagos."
  },
  {
    id: 6,
    nombre: "Pasarelas de la Garganta del Diablo",
    destino_id: 15,
    tipo: "Naturaleza",
    duracion: "Medio día",
    mejor_epoca: "Otoño y primavera",
    descripcion: "Una caminata entre selva hasta el salto más impresionante del parque."
  },
  {
    id: 7,
    nombre: "Caminata por el Cerro de los Siete Colores",
    destino_id: 10,
    tipo: "Aventura",
    duracion: "2 horas",
    mejor_epoca: "Abril a noviembre",
    descripcion: "Contemplá las sorprendentes tonalidades de las montañas y descubrí los paisajes característicos de Purmamarca."
  },
  {
    id: 8,
    nombre: "Excursión a Ischigualasto",
    destino_id: 19,
    tipo: "Aventura",
    duracion: "Medio día",
    mejor_epoca: "Abril a octubre",
    descripcion: "Un recorrido en vehículo por un paisaje de rocas que parece lunar."
  },
  {
    id: 9,
    nombre: "Día de playa y paseo por la rambla",
    destino_id: 1,
    tipo: "Playas",
    duracion: "Medio día",
    mejor_epoca: "Diciembre a marzo",
    descripcion: "Disfrutá de las playas de Mar del Plata y recorré su tradicional rambla frente al mar."
  },
  {
    id: 10,
    nombre: "Exploración del Campo de Piedra Pómez",
    destino_id: 2,
    tipo: "Aventura",
    duracion: "Medio día",
    mejor_epoca: "Abril a noviembre",
    descripcion: "Recorré este impresionante paisaje volcánico y descubrí sus enormes formaciones de piedra blanca."
  },
  {
    id: 11,
    nombre: "Safari chaqueño",
    destino_id: 3,
    tipo: "Naturaleza",
    duracion: "Medio día",
    mejor_epoca: "Mayo a septiembre",
    descripcion: "Explorá los senderos del parque y observá animales autóctonos y aves en su ambiente natural."
  },
  {
    id: 12,
    nombre: "Recorrido cultural por Buenos Aires",
    destino_id: 5,
    tipo: "Cultura",
    duracion: "Día completo",
    mejor_epoca: "Todo el año",
    descripcion: "Descubrí barrios históricos, edificios emblemáticos, museos y rincones tradicionales de la ciudad."
  },
  {
    id: 13,
    nombre: "Safari en lancha",
    destino_id: 7,
    tipo: "Naturaleza",
    duracion: "2 a 3 horas",
    mejor_epoca: "Marzo a noviembre",
    descripcion: "Navegá por los humedales y observá carpinchos, yacarés y numerosas especies de aves."
  },
  {
    id: 14,
    nombre: "Paseo en lancha",
    destino_id: 9,
    tipo: "Naturaleza",
    duracion: "2 a 3 horas",
    mejor_epoca: "Mayo a septiembre",
    descripcion: "Recorré este enorme humedal entre árboles inundados, vegetación acuática y una gran variedad de aves."
  },
  {
    id: 15,
    nombre: "Trekking por las sierras de Lihué Calel",
    destino_id: 11,
    tipo: "Aventura",
    duracion: "2 a 4 horas",
    mejor_epoca: "Marzo a noviembre",
    descripcion: "Recorré senderos entre formaciones rocosas, vegetación autóctona y paisajes únicos de la llanura pampeana."
  },
   {
    id: 16,
    nombre: "Excursión por el Cañón de Talampaya",
    destino_id: 12,
    tipo: "Aventura",
    duracion: "3 horas",
    mejor_epoca: "Abril a noviembre",
    descripcion: "Explorá las enormes paredes rojizas del cañón y descubrí antiguas figuras talladas en las rocas."
  },
  {
    id: 17,
    nombre: "Recorrido por los viñedos mendocinos",
    destino_id: 13,
    tipo: "Gastronomía",
    duracion: "Medio día",
    mejor_epoca: "Febrero a abril",
    descripcion: "Conocé los paisajes de los viñedos, aprendé sobre la producción regional y descubrí las tradiciones de la vendimia."
  },
   {
    id: 18,
    nombre: "Trekking por las sierras de Merlo",
    destino_id: 20,
    tipo: "Aventura",
    duracion: "2 a 4 horas",
    mejor_epoca: "Marzo a noviembre",
    descripcion: "Caminá por senderos serranos y disfrutá de las vistas panorámicas de los valles y las montañas."
  },
   {
    id: 19,
    nombre: "Visita al Monumento Nacional a la Bandera",
    destino_id: 22,
    tipo: "Cultura",
    duracion: "1 a 2 horas",
    mejor_epoca: "Todo el año",
    descripcion: "Conocé uno de los monumentos más importantes del país y descubrí la historia de la creación de la bandera argentina."
  },
  {
    id: 20,
    nombre: "Navegación por el Canal Beagle",
    destino_id: 24,
    tipo: "Nieve",
    duracion: "3 a 4 horas",
    mejor_epoca: "Octubre a abril",
    descripcion: "Navegá por el famoso canal y observá islas, aves marinas y los paisajes montañosos de Tierra del Fuego."
  },
  {
    id: 21,
    nombre: "Cabalgata por los paisajes de Tafí del Valle",
    destino_id: 25,
    tipo: "Aventura",
    duracion: "2 a 3 horas",
    mejor_epoca: "Abril a noviembre",
    descripcion: "Recorré los valles y caminos serranos a caballo mientras disfrutás de los paisajes naturales tucumanos."
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

const buscador = document.getElementById('buscador');

function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filtrarDestinos() {
  const termino = normalizar(buscador.value.trim());

  const resultados = destinos.filter(d =>
    normalizar(d.nombre).includes(termino) ||
    normalizar(d.provincia).includes(termino) ||
    normalizar(d.region).includes(termino) ||
    normalizar(d.descripcion).includes(termino)
  );

  if (resultados.length === 0) {
    destinosGrid.innerHTML = '<p class="no-resultados">No encontramos destinos con esa búsqueda.</p>';
  } else {
    mostrarDestinos(resultados);
  }
}

if (buscador && destinosGrid) {
  buscador.addEventListener('input', filtrarDestinos);
}

const experienciasGrid = document.getElementById('experiencias-grid');
const experienciaTabs = document.getElementById('experiencia-tabs');

function crearTarjetaExperiencia(exp) {
  const destino = destinos.find(d => d.id === exp.destino_id);

  if (!destino) {
    console.warn('No existe un destino con id', exp.destino_id, 'para', exp.nombre);
    return '';
  }

  return `
    <div class="card">
      <img src="${destino.imagen}" alt="${exp.nombre}, ${destino.nombre}">
      <div class="card-content">
        <h3>${exp.nombre}</h3>
        <p class="card-provincia">${destino.nombre}, ${destino.provincia}</p>
        <p class="card-descripcion">${exp.descripcion}</p>
        <div class="card-datos">
          <div>
            <span>Duración</span>
            <strong>${exp.duracion}</strong>
          </div>
          <div>
            <span>Mejor época</span>
            <strong>${exp.mejor_epoca}</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}

function mostrarExperiencias(tipo) {
  const lista = tipo === 'Todas'
    ? experiencias
    : experiencias.filter(e => e.tipo === tipo);

  experienciasGrid.innerHTML = lista.map(crearTarjetaExperiencia).join('');
}

if (experienciasGrid && experienciaTabs) {
  const tipos = ['Todas', ...new Set(experiencias.map(e => e.tipo))];

  experienciaTabs.innerHTML = tipos
    .map(t => `<button class="tab-btn" data-tipo="${t}">${t}</button>`)
    .join('');

  experienciaTabs.addEventListener('click', (e) => {
    const boton = e.target.closest('.tab-btn');
    if (!boton) return;

    experienciaTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    boton.classList.add('active');
    mostrarExperiencias(boton.dataset.tipo);
  });

  experienciaTabs.querySelector('.tab-btn').classList.add('active');
  mostrarExperiencias('Todas');
}