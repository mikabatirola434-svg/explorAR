
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const destinos = [
  {
    id: 1,
    nombre: "Cataratas del Iguazú",
    provincia: "Misiones",
    region: "Litoral",
    descripcion: "Un conjunto de cataratas en medio de la selva, con pasarelas que te llevan hasta la Garganta del Diablo.",
    tipo_experiencia: "Naturaleza",
    mejor_epoca: "Otoño y primavera",
    imagen: "img/cataratas.png",
    destacado: true
  },
  {
    id: 2,
    nombre: "Quebrada de Humahuaca",
    provincia: "Jujuy",
    region: "Norte",
    descripcion: "Un valle con montañas de muchos colores y pueblos antiguos donde todavia mantienen vivas sus tradiciones.",
    tipo_experiencia: "Cultura",
    mejor_epoca: "Abril a octubre",
    imagen: "img/destino-humahuaca.png",
    destacado: true
  },
  {
    id: 3,
    nombre: "Cafayate",
    provincia: "Salta",
    region: "Norte",
    descripcion: "Rodeado de montañas rojizas y grandes viñedos, se destaca por sus paisajes y por el Torrontés, el vino blanco tipico de la región.",
    tipo_experiencia: "Gastronomía",
    mejor_epoca: "Otoño y primavera",
    imagen: "img/destino-cafayate.png",
    destacado: false
  },
  {
    id: 4,
    nombre: "Mendoza y sus viñedos",
    provincia: "Mendoza",
    region: "Cuyo",
    descripcion: "Bodegas, degustaciones y la Cordillera de fondo, con la cosecha como gran época del año.",
    tipo_experiencia: "Gastronomía",
    mejor_epoca: "Febrero a abril",
    imagen: "img/destino-mendoza.png",
    destacado: true
  },
  {
    id: 5,
    nombre: "Parque Provincial Aconcagua",
    provincia: "Mendoza",
    region: "Cuyo",
    descripcion: "Caminatas de montaña con vista al cerro más alto de América.",
    tipo_experiencia: "Montaña",
    mejor_epoca: "Diciembre a marzo",
    imagen: "img/destino-aconcagua.png",
    destacado: false
  },
  {
    id: 6,
    nombre: "Valle de la Luna (Ischigualasto)",
    provincia: "San Juan",
    region: "Cuyo",
    descripcion: "Formaciones rocosas que parecen un paisaje lunar y un importante tesoro de fósiles.",
    tipo_experiencia: "Naturaleza",
    mejor_epoca: "Abril a octubre",
    imagen: "img/destino-ischigualasto.png",
    destacado: false
  },
  {
    id: 7,
    nombre: "San Carlos de Bariloche",
    provincia: "Río Negro",
    region: "Patagonia",
    descripcion: "Lagos, bosques y cerros nevados, con esquí en invierno y chocolate durante todo el año.",
    tipo_experiencia: "Nieve",
    mejor_epoca: "Julio a septiembre",
    imagen: "img/destino-bariloche.png",
    destacado: false
  },
  {
    id: 8,
    nombre: "Glaciar Perito Moreno",
    provincia: "Santa Cruz",
    region: "Patagonia",
    descripcion: "Un enorme muro de hielo que se ve puede observar de cerca desde las pasarelas del parque.",
    tipo_experiencia: "Naturaleza",
    mejor_epoca: "Octubre a abril",
    imagen: "img/destino-perito-moreno.png",
    destacado: true
  },
  {
    id: 9,
    nombre: "Ushuaia",
    provincia: "Tierra del Fuego",
    region: "Patagonia",
    descripcion: "La ciudad más austral del mundo, rodeada de montañas, el canal Beagle y el fin del mundo.",
    tipo_experiencia: "Montaña",
    mejor_epoca: "Diciembre a marzo",
    imagen: "img/destino-ushuaia.png",
    destacado: false
  },
  {
    id: 10,
    nombre: "Península Valdés",
    provincia: "Chubut",
    region: "Patagonia",
    descripcion: "Fauna marina que se puede observar de cerca: ballenas, lobos marinos y pingüinos en la costa.",
    tipo_experiencia: "Naturaleza",
    mejor_epoca: "Junio a diciembre",
    imagen: "img/destino-valdes.png",
    destacado: false
  },
  {
    id: 11,
    nombre: "Mar del Plata",
    provincia: "Buenos Aires",
    region: "Centro",
    descripcion: "La clásica ciudad balnearia argentina, con playas, rambla y mucha actividad durante el verano.",
    tipo_experiencia: "Playas",
    mejor_epoca: "Diciembre a marzo",
    imagen: "img/destino-mar-del-plata.png",
    destacado: false
  },
  {
    id: 12,
    nombre: "Ciudad de Buenos Aires",
    provincia: "Ciudad Autónoma de Buenos Aires",
    region: "Centro",
    descripcion: "Teatros, cafés, museos y barrios con identidad propia para recorrer y conocer.",
    tipo_experiencia: "Cultura",
    mejor_epoca: "Marzo a mayo y septiembre a noviembre",
    imagen: "img/destino-buenos-aires.png",
    destacado: false
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