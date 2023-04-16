// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:0,
      title: "Auriculares inalámbricos",
      price: 20000,
      image: "https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/9/8/981-000748.jpg",
      description:"Auriculares gamer rgb para poder escuchar musica y jugar y envolverte en un ecenario donde los sonidos se reproducen como en la vida real"
    },
    {
      id:1,
      title: "Teclado Redragon",
      price: 6000,
      image: "https://http2.mlstatic.com/D_NQ_NP_800673-MLA50495569943_062022-O.jpg",
      description:"Teclado rgb mecanicos gamer para subir un nivel mas alto en tus partidas competitivas"
    },
    {
      id:2,
      title: "Ps5",
      price: 350000,
      image: "https://images.fravega.com/f300/e24171063a6f9d21eb89c7d9eae6bc5a.jpg.webp",
      description:"Consola ps5 la nueva generacion de consolas para pasar un rato, jugar con tus amigos y competir en juegos desafiantes"
    },
    {
      id:3,
      title: "Nintendo Switch",
      price: 130000,
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01",
      description:"Consola Nintendo portatil para que puedas jugar en cualquier sitio"
    },
    {
      id:4,
      title: "Mouse gamer Logitech",
      price: 10000,
      image: "https://www.qloud.ar/SITES/ryr/fotos/21598-1.jpg",
      description:"Mouse gamer ultra presizo para juegos de shoter donde la presicion es fundamental para las partidas, con luces rgb"
    },
    {
      id:5,
      title: "Figurita octocat",
      price: 750000,
      image: "https://clickarequito.com.ar/wp-content/uploads/2021/05/MARVO-CH106-ROJA-Y-NEGRA.jpg",
      description:`Sistema de elevación de gas de 100 mm
      Brazos con base de nailon de 320 mm
      Materiales: PU, PVC
      Ancho respaldo: 57 cm
      Altura del reposabrazos: 33 cm
      Ancho del asiento: 53 cm
      Altura del respaldo: 85 cm
      Profundidad del asiento: 50 cm
      Asiento regulable en altura: 44 – 54 cm
      Altura de la silla: 125-135 cm
      Carga máxima: 150 kilogramos
      `
    },
    {
      id:6,
      title: "Microfono rgb Hyperx",
      price: 30000,
      image: "https://www.venex.com.ar/products_images/1560875247_hxproductmicquadcast1zmlg.jpg",
      description:`Microfono gamer con audio stereo especial para documuentar tus partidas en vivo o para
      hacer karaoke teniendo la mejor salida de sonido
      `
    },
    {
      id:7,
      title: "Dualshock ps5",
      price: 20000,
      image: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$native$",
      description:`El mejor dualshock sensitive creado por sony al usarlo sentiras las sensivilidades
      como si estuvieras insertado en el entorno del juego
      `
    },
    {
      id:8,
      title: "Resident Evil",
      price: 30000,
      image: "https://dixgamer.com/wp-content/uploads/2023/02/resident-evil-4-remake.jpg",
      description:`Revive unas de la sagas de resident evil mas brutales, con mejores graficos y mejores
      jugabilidades, embarcate con leon y salva a ashley de los infectados
      `
    },
    {
      id:9,
      title: "volante logitech",
      price: 120000,
      image: "https://www.xt-pc.com.ar/img/productos/Pics_Prod/GAM090.jpg",
      description:`Volante de logitech para juegos de vehiculos o simulaciones envolviendote en un mundo casi real como si
      estuvieras manejando un  veichulo
      `
    },
    {
      id:10,
      title: "Juego de God Of War ragnarok",
      price: 20000,
      image: "https://media.vandal.net/m/90451/god-of-war-ragnarok-20221131016774_1.jpg",
      description:`Revive la saga God of War,ayudando al dios de la guerra con su hijo derrotar a odin 
      una de las mejores sagas para jugar y disfrutar
      `
    },
    {
      id:11,
      title: "Monitor 144hz",
      price: 12000,
      image: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-27---gigabyte-g27fsa-ips-144hz-hdmi-dp-0.jpg",
      description:`El mejor monitor gamer para jugar 144 fotogramas por segundo, para que subás un nivel mas alto en el competitivo,
       con mejora calidad de imagen ultra hd con un tamaño de 32 pulgadas
      `
    },
  ])
}
