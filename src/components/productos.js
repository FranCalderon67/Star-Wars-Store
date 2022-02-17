const ropa = [
  {
    id: 1,
    name: "Remera Blanca",
    color: "blanco",
    stock: 10,
    precio: 1000,
    type: "remera",
    imagen: "https://ideasmvd.com.uy/wp-content/uploads/2020/12/star-wars-remera-blanca-ideas-mvd.jpg",
  },

  {
    id: 2,
    name: "Remera Gris",
    color: "gris",
    stock: 10,
    precio: 1000,
    type: "remera",
    imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/342/641/products/star-wars01-gris-melange1-116516acf69e71d87816235626139862-1024-1024.png",
  },

  {
    id: 3,
    name: "Remera Negra",
    color: "negro",
    stock: 10,
    precio: 1000,
    type: "remera",
    imagen: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/19786/3720000000231.jpg",
  },
  {
    id: 4,
    name: "Remera Han Solo",
    color: "hanSolo",
    stock: 10,
    precio: 1200,
    type: "remera",
    imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/064/882/products/remera_certified_estampados_mockup111-d50eb0a855384adf6915943214374931-640-0.jpg",
  },
  {
    id: 5,
    name: "Remera BB8",
    color: "bb8",
    stock: 10,
    precio: 1200,
    type: "remera",
    imagen: "https://http2.mlstatic.com/D_964357-MLA48467103044_122021-O.jpg",
  },
  {
    id: 6,
    name: "Remera R2D2",
    color: "r2d2",
    stock: 10,
    precio: 1500,
    type: "remera",
    imagen: "https://mimilandtiendafriki.com.ar/wp-content/uploads/2021/02/adrogue-star-wars-mimi-land-adrogue-babyjoda.jpg",
  },
  {
    id: 7,
    name: "Remera Stormtrooper",
    color: "stormtrooper",
    stock: 10,
    precio: 1500,
    type: "remera",
    imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/star-2-1cc90b2909ca2378a815572586666975-1024-1024.jpg",
  },

  {
    id: 8,
    name: "Buzo Blanco",
    color: "blanco",
    stock: 10,
    precio: 2000,
    type: "buzo",
    imagen: "https://http2.mlstatic.com/D_975726-MLA46468011063_062021-O.jpg",
  },

  {
    id: 9,
    name: "Buzo Gris",
    color: "gris",
    stock: 10,
    precio: 2000,
    type: "buzo",
    imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/030/513/products/whatsapp-image-2021-06-05-at-13-24-581-4b728d2290700597d416229104909444-640-0.jpeg",
  },

  {
    id: 10,
    name: "Buzo Negro",
    color: "negro",
    stock: 10,
    precio: 2000,
    type: "buzo",
    imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/029/842/products/cr-negro-millennium-falcon1-a9c21888b35407d57f16254979432091-640-0.png",
  },
];

const figura = [
  {
    id: 1,
    name: "Chewbacca",
    type: "legendario",
    stock: 10,
    precio: 1500,
    imagen: "https://freakworldcanarias.com/2937-large_default/figura-chewbacca-star-wars-.jpg",
  },

  {
    id: 2,
    name: "Darth Maul",
    type: "sith",
    stock: 10,
    precio: 1500,
    imagen: "https://www.hasbro.com/common/productimages/es_MX/301C5F9269814B66A2AF59DE95AC6603/16B6E73ED77E42219692B666A0492507.jpg",
  },

  {
    id: 3,
    name: "Darth Vader",
    type: "sith",
    stock: 10,
    precio: 1800,
    imagen: "https://static.fnac-static.com/multimedia/Images/ES/NR/13/26/15/1386003/1540-1/tsp20170828132243/Figura-Star-Wars-Episodio-IV-Darth-Vader-19-5cm.jpg",
  },
  {
    id: 4,
    name: "Leia",
    type: "legendario",
    stock: 10,
    precio: 1500,
    imagen: "https://www.crazyproders.com/4708-thickbox_default/sideshow-star-wars-princesse-leia-premium-format.jpg",
  },
  {
    id: 5,
    name: "Luke Skywalker",
    type: "jedi",
    stock: 10,
    precio: 1800,
    imagen: "https://collectoys.es/10032-large_default/figura-luke-skywalker-return-of-the-jedi-artfx-kotobukiya.jpg",
  },
  {
    id: 6,
    name: "Obi-Wan Kenobi",
    type: "jedi",
    stock: 10,
    precio: 1800,
    imagen:
      "https://figurascoleccionables.es/wp-content/uploads/2020/10/Figura-de-Obi-Wan-Kenobi-Episodio-IV-de-Star-Wars-de-Sideshow-Figuras-de-acci%C3%B3n-y-mu%C3%B1ecos-de-Obi-Wan-Kenobi-de-Star-Wars-177x300.jpg",
  },
  {
    id: 7,
    name: "Yoda",
    type: "jedi",
    stock: 10,
    precio: 1800,
    imagen: "https://images-eu.ssl-images-amazon.com/images/I/416SY70vDfL._SS300_.jpg",
  },
];

const sable = [
  {
    id: 1,
    name: "Sable de Darth Maul",
    tipo: "sith",
    stock: 10,
    precio: 500,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXs2aZTc1vLSNXr54KdJ_S9Jj5yTQ9Nymh_aLG6v5nZa1YTDnnbcTThp6x42K-bYqccZA&usqp=CAU",
  },

  {
    id: 2,
    name: "Sable de Darth Vader",
    tipo: "sith",
    stock: 10,
    precio: 500,
    imagen: "https://m.media-amazon.com/images/I/61cBFzr9imL._AC_SX425_.jpg",
  },
  {
    id: 3,
    name: "Sable de Kylo Ren",
    tipo: "sith",
    stock: 10,
    precio: 500,
    imagen: "https://simaro.co/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/t/Star-Wars-Kylo-Ren-Electrnica-Rojo-Sable-de-luz-de-Juguete-para-nios-de-6-y-Hasta-.jpeg",
  },
  {
    id: 4,
    name: "Sable de Mace Windu",
    tipo: "jedi",
    stock: 10,
    precio: 500,
    imagen: "https://www.aceroymagia.com/Images/articulo/sable-de-luz-mace-windu-starwars/01-sable-de-luz-mace-windu-starwars.jpg",
  },
  {
    id: 5,
    name: "Sable de Obi-Wan Kenobi",
    tipo: "jedi",
    stock: 10,
    precio: 500,
    imagen: "https://m.media-amazon.com/images/I/71FfhinHHcL._AC_SX425_.jpg",
  },
  {
    id: 6,
    name: "Sable de Yoda",
    tipo: "jedi",
    stock: 10,
    precio: 500,
    imagen: "https://m.media-amazon.com/images/I/51atZw6asqL._AC_SL1000_.jpg",
  },
];

const naves = [
  {
    id: 1,
    name: "Caza Tie",
    precio: 1000,
    stock: 10,
    imagen: "https://m.media-amazon.com/images/I/815QWW4mzbL._AC_UL320_.jpg",
  },
  {
    id: 2,
    name: "Caza Tie de Darth Vader",
    precio: 1500,
    stock: 10,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtOGtpCYVH_6FBnIznRjmb8GkQN8xrKf4ew&usqp=CAU",
  },
  {
    id: 3,
    name: "Halcon Milenario",
    precio: 1500,
    stock: 10,
    imagen: "https://maxitec.vteximg.com.br/arquivos/ids/164212-1000-1000/maxitec-fascinations-halcon-milenario-icx201-1.jpg?v=637688892044100000",
  },
  {
    id: 4,
    name: "X-Wing",
    precio: 1500,
    stock: 10,
    imagen: "https://i.pinimg.com/originals/91/bc/27/91bc275b5b5b914d149e88b292d588b9.jpg",
  },
];

const peliculas = [
  {
    id: 1,
    name: "Episodio I: La Amenaza Fantasma",
    precio: 500,
    stock: 5,
    imagen: "https://i.pinimg.com/originals/4c/20/97/4c2097d9d58382a829645e39f348bf38.jpg",
    descripcion:
      "La trama describe la historia del maestro jedi Qui-Gon Jinn y de su aprendiz Obi-Wan Kenobi, que escoltan y protegen a la Reina Amidala desde su planeta Naboo hasta Coruscant con la esperanza de encontrar una salida pacífica a un conflicto comercial interplanetario a gran escala.",
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
    imagen: "https://www.planetadelibros.com/usuaris/libros/fotos/201/m_libros/portada_star-wars-episodio-v-el-imperio-contraataca_archie-goodwin_202007201222.jpg",
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
    imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rise-of-skywalker-poster-d23-1566678674.jpg?resize=480:*",
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

const traerRopa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(ropa);
  }, 3500);
});
const traerFigura = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(figura);
  }, 3500);
});
const traerSable = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(sable);
  }, 3500);
});
const traerNave = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(naves);
  }, 3500);
});
const traerPeliculas = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(peliculas);
  }, 3500);
});

export { peliculas };

export { traerRopa };
export { traerFigura };
export { traerSable };
export { traerNave };
export { traerPeliculas };
