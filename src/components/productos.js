const ropa = [
  {
    id: 1,
    name: "Remera Blanca",
    color: "blanco",
    stock: 10,
    precio: 1000,
    imagen:
      "https://ideasmvd.com.uy/wp-content/uploads/2020/12/star-wars-remera-blanca-ideas-mvd.jpg",
  },

  {
    id: 2,
    name: "Remera Gris",
    color: "gris",
    stock: 10,
    precio: 1000,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/342/641/products/star-wars01-gris-melange1-116516acf69e71d87816235626139862-1024-1024.png",
  },

  {
    id: 3,
    name: "Remera Negra",
    color: "negro",
    stock: 10,
    precio: 1000,
    imagen:
      "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/19786/3720000000231.jpg",
  },
  {
    id: 4,
    name: "Remera Han Solo",
    color: "hanSolo",
    stock: 10,
    precio: 1200,
    imagen:
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/064/882/products/remera_certified_estampados_mockup111-d50eb0a855384adf6915943214374931-640-0.jpg",
  },
  {
    id: 5,
    name: "Remera BB8",
    color: "bb8",
    stock: 10,
    precio: 1200,
    imagen: "https://http2.mlstatic.com/D_964357-MLA48467103044_122021-O.jpg",
  },
  {
    id: 6,
    name: "Remera R2D2",
    color: "r2d2",
    stock: 10,
    precio: 1500,
    imagen:
      "https://mimilandtiendafriki.com.ar/wp-content/uploads/2021/02/adrogue-star-wars-mimi-land-adrogue-babyjoda.jpg",
  },
  {
    id: 7,
    name: "Remera Stormtrooper",
    color: "stormtrooper",
    stock: 10,
    precio: 1500,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/star-2-1cc90b2909ca2378a815572586666975-1024-1024.jpg",
  },

  {
    id: 8,
    name: "Buzo Blanco",
    color: "blanco",
    stock: 10,
    precio: 2000,
    imagen: "https://http2.mlstatic.com/D_975726-MLA46468011063_062021-O.jpg",
  },

  {
    id: 9,
    name: "Buzo Gris",
    color: "gris",
    stock: 10,
    precio: 2000,
    imagen:
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/030/513/products/whatsapp-image-2021-06-05-at-13-24-581-4b728d2290700597d416229104909444-640-0.jpeg",
  },

  {
    id: 10,
    name: "Buzo Negro",
    color: "negro",
    stock: 10,
    precio: 2000,
    imagen:
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/029/842/products/cr-negro-millennium-falcon1-a9c21888b35407d57f16254979432091-640-0.png",
  },
];

const figura = [
  {
    id: 1,
    personaje: "chewbacca",
    tipo: "legendario",
    stock: 10,
    precio: 1500,
  },

  {
    id: 2,
    personaje: "darthmaul",
    tipo: "sith",
    stock: 10,
    precio: 1500,
  },

  {
    id: 3,
    personaje: "darthvader",
    tipo: "sith",
    stock: 10,
    precio: 1800,
  },
  {
    id: 4,
    personaje: "leia",
    tipo: "legendario",
    stock: 10,
    precio: 1500,
  },
  {
    id: 5,
    personaje: "luke",
    tipo: "jedi",
    stock: 10,
    precio: 1800,
  },
  {
    id: 6,
    personaje: "obiwan",
    tipo: "jedi",
    stock: 10,
    precio: 1800,
  },
  {
    id: 7,
    personaje: "yoda",
    tipo: "jedi",
    stock: 10,
    precio: 1800,
  },
];

const sable = [
  {
    id: 1,
    personaje: "darthmaul",
    tipo: "sith",
    stock: 10,
    precio: 500,
  },

  {
    id: 2,
    personaje: "darthvader",
    tipo: "sith",
    stock: 10,
    precio: 500,
  },
  {
    id: 3,
    personaje: "kyloren",
    tipo: "sith",
    stock: 10,
    precio: 500,
  },
  {
    id: 4,
    personaje: "macewindu",
    tipo: "jedi",
    stock: 10,
    precio: 500,
  },
  {
    id: 5,
    personaje: "obiwan",
    tipo: "jedi",
    stock: 10,
    precio: 500,
  },
  {
    id: 6,
    personaje: "yoda",
    tipo: "jedi",
    stock: 10,
    precio: 500,
  },
];

const naves = [
  {
    id: 1,
    name: "cazatie",
    precio: 1000,
    stock: 10,
  },
  {
    id: 2,
    name: "darthVaderTie",
    precio: 1500,
    stock: 10,
  },
  {
    id: 3,
    name: "halcon",
    precio: 1500,
    stock: 10,
  },
  {
    id: 4,
    name: "xwing",
    precio: 1500,
    stock: 10,
  },
];

const peliculas = [
  {
    id: 1,
    name: "Episodio I: La Amenaza Fantasma",
    precio: 500,
    stock: 5,
    imagen: "https://i.pinimg.com/originals/4c/20/97/4c2097d9d58382a829645e39f348bf38.jpg",
  },
  {
    id: 2,
    name: "Episodio II: El Ataque de los Clones",
    precio: 500,
    stock: 5,
    imagen: "https://basededatos.atrae.org/media/works/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
  },
  {
    id: 3,
    name: "Episodio III: La Venganza de los Sith",
    precio: 500,
    stock: 5,
    imagen: "https://www.fabulantes.com/wp-content/uploads/2015/12/star-wars-iii.jpg",
  },
  {
    id: 4,
    name: "Episodio IV: Una Nueva Esperanza",
    precio: 500,
    stock: 5,
    imagen: "https://sm.ign.com/ign_es/movie/s/star-wars-/star-wars-episodio-iv_y2kx.jpg",
  },
  {
    id: 5,
    name: "Episodio V: El Imperio Contrataca",
    precio: 500,
    stock: 5,
    imagen:
      "https://www.planetadelibros.com/usuaris/libros/fotos/201/m_libros/portada_star-wars-episodio-v-el-imperio-contraataca_archie-goodwin_202007201222.jpg",
  },
  {
    id: 6,
    name: "Episodio VI: El Retorno del Jedi",
    precio: 500,
    stock: 5,
    imagen: "http://pm1.narvii.com/6676/8564b5eab56766487f74442913c5c727c572f270_00.jpg",
  },
  {
    id: 7,
    name: "Episodio VII: El Despertar de la Fuerza",
    precio: 500,
    stock: 5,
    imagen: "https://viniloblog.com/wp-content/uploads/2019/12/Episodio-VII-1.jpg",
  },
  {
    id: 8,
    name: "Episodio VIII: Los Ultimos Jedi",
    precio: 500,
    stock: 5,
    imagen: "https://m.media-amazon.com/images/I/81xtAp7e77L._SL1373_.jpg",
  },
  {
    id: 9,
    name: "Episodio IX: El Ascenso de Skywalker",
    precio: 500,
    stock: 5,
    imagen:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rise-of-skywalker-poster-d23-1566678674.jpg?resize=480:*",
  },
  {
    id: 10,
    name: "Rogue One",
    precio: 500,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_985629-MLA32411122026_102019-O.jpg",
  },
  {
    id: 11,
    name: "Han Solo",
    precio: 500,
    stock: 5,
    imagen: "https://lumiere-a.akamaihd.net/v1/images/image_be9d7cfb.jpeg?region=0,0,540,810",
  },
];

const traerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3500);
});

export { ropa };
export { figura };
export { sable };
export { naves };
export { peliculas };
export { traerProductos };
