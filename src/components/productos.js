const productos = [
  {
    categoria: "legendario",
    id: 1,
    name: "Chewbacca",

    stock: 10,
    precio: 1500,
    imagen: "https://freakworldcanarias.com/2937-large_default/figura-chewbacca-star-wars-.jpg",
    descripcion:
      "Esta figura altamente articulada es parte de la última colección de figuras de Star Wars. Se ve como Chewbacca hasta el último detalle, incluyendo su cara peluda y ballesta. Es como si acabara de salir del conjunto de una de sus escenas más esenciales mientras celebró la última victoria de la Alianza Rebelde. Necesitarás un estante más grande para tu figura Chewbacca y el resto de la serie Black.",
  },

  {
    categoria: "sith",
    id: 2,
    name: "Darth Maul",

    stock: 10,
    precio: 1500,
    imagen: "https://www.hasbro.com/common/productimages/es_MX/301C5F9269814B66A2AF59DE95AC6603/16B6E73ED77E42219692B666A0492507.jpg",
    descripcion:
      "El misterioso sith mide 18.0 in de alto y tiene siete puntos de articulación por lo que siempre está listo para atacar Darth Maul viene con su sable de luz de doble hoja Colecciona todas las figuras de acción clásicas de Star Wars gigantes ¡Que la fuerza esté contigo! ",
  },

  {
    categoria: "sith",
    id: 3,
    name: "Darth Vader",

    stock: 10,
    precio: 1800,
    imagen: "https://static.fnac-static.com/multimedia/Images/ES/NR/13/26/15/1386003/1540-1/tsp20170828132243/Figura-Star-Wars-Episodio-IV-Darth-Vader-19-5cm.jpg",
    descripcion:
      "DARTH VADER: Después de la destrucción de la Estrella de la Muerte, Darth Vader se obsesionó con encontrar a Luke Skywalker, finalmente localizando la base rebelde en el planeta de hielo remoto Hoth. Articulación y detalles de alta calidad: los fans y coleccionistas de Star Wars pueden mostrar esta figura altamente articulada (4 extremidades totalmente articuladas), con decoración premium, en su figura de acción y colección de vehículos",
  },
  {
    categoria: "legendario",
    id: 4,
    name: "Leia",

    stock: 10,
    precio: 1500,
    imagen: "https://www.crazyproders.com/4708-thickbox_default/sideshow-star-wars-princesse-leia-premium-format.jpg",
    descripcion:
      "Organa Princesa Leia: la princesa Leia Organa fue uno de los mejores líderes de la Alianza Rebelde, sin miedo en el campo de batalla y dedicada a acabar con la tiranía del Imperio. Accesorios inspirados en personajes de película: esta figura de acción de Star Wars The Black Series viene con 2 accesorios desmontables inspirados en el entretenimiento que son grandes adiciones a cualquier colección de Star Wars",
  },
  {
    categoria: "jedi",
    id: 5,
    name: "Luke Skywalker",

    stock: 10,
    precio: 1800,
    imagen: "https://collectoys.es/10032-large_default/figura-luke-skywalker-return-of-the-jedi-artfx-kotobukiya.jpg",
    descripcion:
      "Luke Skywalker es un poderoso caballero Jedi que utiliza la Fuerza contra el mal Imperio. Figura de acción posable: cada figura de acción de Star Wars de 9.5 pulgadas cuenta con 4 puntos de articulación – cabeza, brazos y cintura – para que los niños y niñas y más grandes puedan posar sus figuras para cualquier aventura que imaginen",
  },
  {
    categoria: "jedi",
    id: 6,
    name: "Obi-Wan Kenobi",

    stock: 10,
    precio: 1800,
    imagen: "https://collectoys.es/8707-large_default/figura-obi-wan-kenobi-artfx-star-wars-kotobukiya.jpghttps://m.media-amazon.com/images/I/61DqTM75frS._AC_SL1500_.jpg",
    descripcion:
      "Obi-Wan se ve obligado a luchar contra su amigo Anakin Skywalker en un devastador duelo de sable láser después de que Anakin se vuelva al lado oscuro. Esta figura de acción de Star Wars The Black Series viene con un accesorio desmontable inspirado en el entretenimiento que es una gran adición a cualquier colección de Star Wars",
  },

  {
    categoria: "jedi",
    id: 7,
    name: "Yoda",

    stock: 10,
    precio: 1800,
    imagen: "https://images-eu.ssl-images-amazon.com/images/I/416SY70vDfL._SS300_.jpg",
    descripcion:
      "Figura de Yoda a escala de 6 pulgadas con diseño inspirado en la película: Yoda era un legendario maestro Jedi y más fuerte que la mayoría en su conexión con la fuerza. Imagina el pequeño pero potente maestro Jedi entrenando Luke Skywalker con esta figura de Yoda de 6 pulgadas, inspirada en la película Star Wars: el imperio contraataca, parte de la franquicia de la película Star Wars que incluye Star Wars: el último Jedi y solo: una historia de Star Wars. La galaxia de Star Wars incluye personajes queridos y temidos como Luke Skywalker, Han solo, Princesa Leia organa, Chewbacca y Darth Vader, así como Stormtroopers, Droids, y mucho más.",
  },
  {
    categoria: "sith",
    id: 8,
    name: "Sable de Darth Maul",

    stock: 10,
    precio: 500,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXs2aZTc1vLSNXr54KdJ_S9Jj5yTQ9Nymh_aLG6v5nZa1YTDnnbcTThp6x42K-bYqccZA&usqp=CAU",
    descripcion:
      "El sable de luz electrónico Forge Darth Maul se compone de siete partes: dos cuchillas, dos tapas, dos cubiertas y un núcleo, lo que permite a los niños montar su sable de luz para duelos imaginarios.Encendedor personalizable: las piezas son compatibles en toda la línea de forja de sable de luz para que los niños puedan mezclar y combinar. La compra de un solo sable de luz adicional Forge desbloquea 45 combinaciones totales",
  },

  {
    categoria: "sith",
    id: 9,
    name: "Sable de Darth Vader",

    stock: 10,
    precio: 500,
    imagen: "https://m.media-amazon.com/images/I/61cBFzr9imL._AC_SX425_.jpg",
    descripcion:
      "Sable de luz electrónico Darth Vader iluminado. Cuenta con luces, sonidos y frases del Señor Seth, Darth Vader. Entrena en los caminos de la fuerza: pulsa el botón para escuchar frases de Darth Vader y comienza a entrenar el sable de luz en el camino hacia el lado oscuro",
  },
  {
    categoria: "sith",
    id: 10,
    name: "Sable de Kylo Ren",

    stock: 10,
    precio: 500,
    imagen: "https://simaro.co/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/t/Star-Wars-Kylo-Ren-Electrnica-Rojo-Sable-de-luz-de-Juguete-para-nios-de-6-y-Hasta-.jpeg",
    descripcion:
      "Luces avanzadas con efectos de sonido: 80 LED y efectos de sonido inspirados en la película sonora hacen de este el sable láser Force FX más realista hasta la fecha. La empuñadura de metal real cuenta con diseño y decoración basados en el icónico sable láser de Kylo Ren presentado en Star Wars: The Force Awakens, Star Wars: el último Jedi y Star Wars: el ascenso de Skywalker",
  },

  {
    categoria: "jedi",
    id: 11,
    name: "Sable de Mace Windu",

    stock: 10,
    precio: 500,
    imagen: "https://www.aceroymagia.com/Images/articulo/sable-de-luz-mace-windu-starwars/01-sable-de-luz-mace-windu-starwars.jpg",
    descripcion:
      "Crea el suyo: el juguete de sable láser Forge Mace Windu está compuesto de cuatro partes: la hoja, la tapa, la cubierta y el núcleo, lo que permite a los niños montar su sable de luz para duelos imaginarios. Encendedor personalizable: las piezas son compatibles en toda la línea de forja de sable de luz para que los niños puedan mezclar y combinar. La compra de un solo sable de luz adicional desbloquea 16 combinaciones totales",
  },
  {
    categoria: "jedi",
    id: 12,
    name: "Sable de Obi-Wan Kenobi",

    stock: 10,
    precio: 500,
    imagen: "https://m.media-amazon.com/images/I/71FfhinHHcL._AC_SX425_.jpg",
    descripcion:
      "Crea suyos: el juguete de sable láser Forge Obi-Wan Kenobi está compuesto por cuatro partes: la cuchilla, la tapa, la cubierta y el núcleo, lo que permite a los niños montar su sable de luz para duelos imaginarios. Lámpara personalizable: las piezas son compatibles en toda la línea de espada de luz Forge para que los niños puedan mezclar y combinar. La compra de un solo sable láser adicional desbloquea 16 combinaciones totales.",
  },
  {
    categoria: "jedi",
    id: 13,
    name: "Sable de Yoda",

    stock: 10,
    precio: 500,
    imagen: "https://m.media-amazon.com/images/I/51atZw6asqL._AC_SL1000_.jpg",
    descripcion:
      "El sable láser tiene un sonido Blaster y flash en choque, soporta el duelo. Mango suave y hoja extraíble: el mango está hecho de aleación de aluminio. El material de la hoja es de policarbonato de alta calidad. La hoja necesita una longitud total de unos 37.4 in después del montaje.Sonido de película FX: cuando el sable está apagado, pulsa durante mucho tiempo para cambiar las fuentes de sonido. El sable tiene una fuente de sonido más silencioso. Soporta duelo pesado.",
  },
  {
    categoria: "remera",
    id: 14,
    name: "Remera Blanca",
    color: "blanco",
    stock: 10,
    precio: 1000,

    imagen: "https://ideasmvd.com.uy/wp-content/uploads/2020/12/star-wars-remera-blanca-ideas-mvd.jpg",
    descripcion: "50 % poliéster , 50 % algodón. Lavable a máquina",
  },

  {
    categoria: "remera",
    id: 15,
    name: "Remera Gris",
    color: "gris",
    stock: 10,
    precio: 1000,

    imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/342/641/products/star-wars01-gris-melange1-116516acf69e71d87816235626139862-1024-1024.png",
    descripcion: "50 % poliéster , 50 % algodón. Lavable a máquina",
  },

  {
    categoria: "remera",
    id: 16,
    name: "Remera Negra",
    color: "negro",
    stock: 10,
    precio: 1000,

    imagen: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/19786/3720000000231.jpg",
    descripcion: "50 % poliéster , 50 % algodón. Lavable a máquina",
  },
  {
    categoria: "remera",
    id: 17,
    name: "Remera Han Solo",
    color: "hanSolo",
    stock: 10,
    precio: 1200,

    imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/064/882/products/remera_certified_estampados_mockup111-d50eb0a855384adf6915943214374931-640-0.jpg",
    descripcion: "50 % poliéster , 50 % algodón. Lavable a máquina",
  },
  {
    categoria: "remera",
    id: 18,
    name: "Remera BB8",
    color: "bb8",
    stock: 10,
    precio: 1200,

    imagen: "https://http2.mlstatic.com/D_964357-MLA48467103044_122021-O.jpg",
    descripcion: "50 % poliéster , 50 % algodón. Lavable a máquina",
  },
  {
    categoria: "remera",
    id: 19,
    name: "Remera R2D2",
    color: "r2d2",
    stock: 10,
    precio: 1500,

    imagen: "https://mimilandtiendafriki.com.ar/wp-content/uploads/2021/02/adrogue-star-wars-mimi-land-adrogue-babyjoda.jpg",
    descripcion: "50 % poliéster , 50 % algodón. Lavable a máquina",
  },
  {
    categoria: "remera",
    id: 20,
    name: "Remera Stormtrooper",
    color: "stormtrooper",
    stock: 10,
    precio: 1500,

    imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/star-2-1cc90b2909ca2378a815572586666975-1024-1024.jpg",
    descripcion: "50 % poliéster , 50 % algodón. Lavable a máquina",
  },

  {
    categoria: "buzo",
    id: 21,
    name: "Buzo Blanco",
    color: "blanco",
    stock: 10,
    precio: 2000,

    imagen: "https://http2.mlstatic.com/D_975726-MLA46468011063_062021-O.jpg",
    descripcion:
      "60 % Algodón, 40 % Poliéster. Esta sudadera clásica con capucha para uso diario cuenta con mangas largas, un bolsillo canguro, un dobladillo y puños acanalados anchos para bloquear el calor",
  },

  {
    categoria: "buzo",
    id: 22,
    name: "Buzo Gris",
    color: "gris",
    stock: 10,
    precio: 2000,

    imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/030/513/products/whatsapp-image-2021-06-05-at-13-24-581-4b728d2290700597d416229104909444-640-0.jpeg",
    descripcion: "60 % Algodón, 40 % Poliéster. Lavar a máquina",
  },

  {
    categoria: "buzo",
    id: 23,
    name: "Buzo Negro",
    color: "negro",
    stock: 10,
    precio: 2000,

    imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/029/842/products/cr-negro-millennium-falcon1-a9c21888b35407d57f16254979432091-640-0.png",
    descripcion: "60 % Algodón, 40 % Poliéster. Lavar a máquina",
  },
  {
    categoria: "nave",
    id: 24,
    name: "Caza Tie",
    precio: 1000,
    stock: 10,
    imagen: "https://m.media-amazon.com/images/I/815QWW4mzbL._AC_UL320_.jpg",
    descripcion: "Cañones de asiento de expulsión que abren la escotilla.Las alas se despegan y se ajustan de nuevo en su lugar",
  },
  {
    categoria: "nave",
    id: 25,
    name: "Caza Tie de Darth Vader",
    precio: 1500,
    stock: 10,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtOGtpCYVH_6FBnIznRjmb8GkQN8xrKf4ew&usqp=CAU",
    descripcion:
      "Darth Vader pilotó a su distintivo luchador experimental TIE por encima de la primera Estrella de la Muerte, en una misión para defender la estación espacial y lanzar a los cazas estelares rebeldes en fragmentos brillantes. Los niños pueden fingir ir volar a los rebeldes con un lanzador de proyectiles que se puede fijar al vehículo en múltiples puntos o montar en el accesorio de trípode incluido",
  },
  {
    categoria: "nave",
    id: 26,
    name: "Halcon Milenario",
    precio: 1500,
    stock: 10,
    imagen: "https://maxitec.vteximg.com.br/arquivos/ids/164212-1000-1000/maxitec-fascinations-halcon-milenario-icx201-1.jpg?v=637688892044100000",
    descripcion:
      "Con 19 pulgadas de largo, este modelo destaca como el último kit de modelo Millennium Falcon. El juego incluye una base de exhibición dedicada y figuras sentadas de Han, Luke Chewbacca, Obi-wan, C-3P0, Princesa Leia.Runner x 37, pegatinas, manual de instrucciones",
  },
  {
    categoria: "nave",
    id: 27,
    name: "X-Wing",
    precio: 1500,
    stock: 10,
    imagen: "https://i.pinimg.com/originals/91/bc/27/91bc275b5b5b914d149e88b292d588b9.jpg",
    descripcion: "Un versátil luchador estelar de la Alianza Rebelde que equilibra la velocidad con la potencia de fuego, el X-wing puede enfrentarse a cualquier cosa que el Imperio le arroje.",
  },
  {
    categoria: "pelicula",
    id: 28,
    name: "Episodio I: La Amenaza Fantasma",
    precio: 500,
    stock: 5,
    imagen: "https://i.pinimg.com/originals/4c/20/97/4c2097d9d58382a829645e39f348bf38.jpg",
    descripcion:
      "La trama describe la historia del maestro jedi Qui-Gon Jinn y de su aprendiz Obi-Wan Kenobi, que escoltan y protegen a la Reina Amidala desde su planeta Naboo hasta Coruscant con la esperanza de encontrar una salida pacífica a un conflicto comercial interplanetario a gran escala.",
  },
  {
    categoria: "pelicula",
    id: 29,
    name: "Episodio II: El Ataque de los Clones",
    precio: 500,
    stock: 5,
    imagen: "https://basededatos.atrae.org/media/works/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
    descripcion:
      "Una década despúes de los eventos de La Amenaza Fantasma, la República esta en crisis. Un movimiento separatista (secretamente dirigido por el Conde Dooku, un antiguo Maestro Jedi) amenaza la paz. ... Después de estos acontecimientos el Alto Consejo Jedi le pide a Obi-Wan que encuentre al asesino misterioso.",
  },
  {
    categoria: "pelicula",
    id: 30,
    name: "Episodio III: La Venganza de los Sith",
    precio: 500,
    stock: 5,
    imagen: "https://www.fabulantes.com/wp-content/uploads/2015/12/star-wars-iii.jpg",
    descripcion:
      "La República se desmorona bajo los ataques del despiadado Conde Dooku, señor de los Sith. Hay héroes en ambos bandos. El mal está por doquier. En una maniobra audaz, el diabólico líder droide, general Grievous, ha entrado a la capital de la República y secuestrado al canciller Palpatine, líder del Senado Galáctico.",
  },
  {
    categoria: "pelicula",
    id: 31,
    name: "Episodio IV: Una Nueva Esperanza",
    precio: 500,
    stock: 5,
    imagen: "https://sm.ign.com/ign_es/movie/s/star-wars-/star-wars-episodio-iv_y2kx.jpg",
    descripcion:
      "Perseguida por los siniestros agentes del Imperio, la Princesa Leia vuela hacia su patria, a bordo de su nave espacial, llevando consigo los planos robados, que pueden salvar a su pueblo y devolver la libertad a la galaxia… Son tiempos de guerra civil.",
  },
  {
    categoria: "pelicula",
    id: 32,
    name: "Episodio V: El Imperio Contrataca",
    precio: 500,
    stock: 5,
    imagen: "https://www.planetadelibros.com/usuaris/libros/fotos/201/m_libros/portada_star-wars-episodio-v-el-imperio-contraataca_archie-goodwin_202007201222.jpg",
    descripcion:
      "La película se refiere a las continuas luchas de la Alianza Rebelde contra el Imperio Galáctico. Durante la película, Han Solo, Chewbacca y la Princesa Leia Organa están siendo perseguidos a través del espacio por Darth Vader y sus fuerzas de elite.",
  },
  {
    categoria: "pelicula",
    id: 33,
    name: "Episodio VI: El Retorno del Jedi",
    precio: 500,
    stock: 5,
    imagen: "http://pm1.narvii.com/6676/8564b5eab56766487f74442913c5c727c572f270_00.jpg",
    descripcion:
      "Luke Skywalker ha regresado a Tatooine, su planeta de origen, para intentar rescatar a su amigo Han Solo de las garras del malvado Jabba, el Hutt. Pero Luke ignora que el IMPERIO GALÁCTICO ha comenzado en secreto la construcción de una nueva estación espacial armada, más poderosa que la temida Estrella de la Muerte.",
  },
  {
    categoria: "pelicula",
    id: 34,
    name: "Episodio VII: El Despertar de la Fuerza",
    precio: 500,
    stock: 5,
    imagen: "https://viniloblog.com/wp-content/uploads/2019/12/Episodio-VII-1.jpg",
    descripcion:
      "Luke Skywalker ha desaparecido. En su ausencia, la siniestra PRIMERA ORDEN ha surgido de las cenizas del Imperio y no descansará hasta que Skywalker, el último Jedi, haya sido destruido. ... Desesperadamente busca a su hermano Luke con el fin de obtener su ayuda para restaurar la paz y la justicia en la galaxia.",
  },
  {
    categoria: "pelicula",
    id: 35,
    name: "Episodio VIII: Los Ultimos Jedi",
    precio: 500,
    stock: 5,
    imagen: "https://m.media-amazon.com/images/I/81xtAp7e77L._SL1373_.jpg",
    descripcion:
      "Al llegar al mundo acuático de Ahch-To con el wookiee Chewbacca y el droide astromecánico R2-D2 a bordo del Halcón Milenario, la sensible a la Fuerza Rey se encuentra con el Maestro Jedi Luke Skywalker. Ella le entrega el legendario sable de luz Skywalker, pero él lo arroja sobre su hombro y se aleja.",
  },
  {
    categoria: "pelicula",
    id: 36,
    name: "Episodio IX: El Ascenso de Skywalker",
    precio: 500,
    stock: 5,
    imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rise-of-skywalker-poster-d23-1566678674.jpg?resize=480:*",
    descripcion:
      "LA GENERAL LEIA ORGANA envía agentes secretos a obtener información, mientras que REY, la última esperanza de los Jedi, entrena para luchar en contra de la diabólica PRIMERA ORDEN. Mientras tanto, el Líder Supremo KYLO REN busca furiosamente al Emperador fantasma, dispuesto a destruir cualquier amenaza a su poder....",
  },
  {
    categoria: "pelicula",
    id: 37,
    name: "Rogue One",
    precio: 500,
    stock: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_985629-MLA32411122026_102019-O.jpg",
    descripcion:
      "Rogue One: Una historia de Star Wars es una película apasionante por el esmero en retratar la ambigüedad moral de sus personajes, la rebelión y la esperanza, a la que sus protagonistas se aferran para cambiar el rumbo de su historia. Muy recomendable ver todos esos diseños y procesos para poner en pie el relato.",
  },
  {
    categoria: "pelicula",
    id: 38,
    name: "Han Solo",
    precio: 500,
    stock: 5,
    imagen: "https://lumiere-a.akamaihd.net/v1/images/image_be9d7cfb.jpeg?region=0,0,540,810",
    descripcion:
      "Han Solo: una historia de Star Wars es una película centrada en el personaje de Han Solo a bordo del Halcón Milenario. A través de una serie de aventuras en un submundo criminal oscuro y peligroso, Han Solo se hace amigo de su futuro copiloto Chewbacca y conoce al conocido jugador Lando Calrissian.",
  },
];

const traerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 3500);
});

export { traerProductos };

export { productos };
