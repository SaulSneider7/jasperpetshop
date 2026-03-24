export interface ProductVariant {
  size: string;
  price: string;
  oldPrice?: string;
  discountPercentage?: number;
  image?: string;
  dimensions?: string;
  weight?: string;
  description?: string[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  category: string;
  image: string;
  description: string[];
  variants?: ProductVariant[];
  discountPercentage?: number;
  important?: string[];
  characteristics?: string[];
  productionTime?: string;
  deliveryInfo?: string;
  shippingInfo?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sofa Jasper",
    price: "S/ 340",
    category: "Sofás",
    image: "./jasper_L.jpeg",
    description: [
      "Terciopelo italiano de alta resistencia con base de madera sólida.",
    ],
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluyen dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/jasper_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Shit Tzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/jasper_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Bulldog Ingles, Bull Terrier, American Bully, Border Collie y similares."
        ]
      },
      { 
        size: "XXL", 
        price: "S/ 460", 
        image: "/jasper_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: [
          "Ideal para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
        ]
      }
    ],
  },
  {
    id: 2,
    name: "Sofa Cala",
    price: "S/ 340",
    category: "Sofás",
    image: "/cala_L.jpeg",
    description: [
      "Espuma viscoelástica que se adapta a la forma de tu mascota."
    ],
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo, con detalle capitoneado acolchado.",
      "Brazos (laterales) del sofá son anchos y ligeramente curvos, diseñados para brindar comodidad al apoyar la cabeza o cola, reflejando elegancia.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluyen dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340",
        image: "/cala_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390",
        image: "/cala_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Bulldog Ingles, Bull Terrier, American Bully, Border Collie y similares."
        ]
      },
      { 
        size: "XXL", 
        price: "S/ 460",
        image: "/cala_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: [
          "Ideal para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Sofa Nalha",
    price: "S/ 340",
    category: "Sofás",
    image: "/nalha_L.jpeg",
    description: [
      "Diseño ergonómico para proteger las articulaciones de razas pequeñas."
    ],
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluyen dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/nalha_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Soporta 40kg",
        description: [
          "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390",
        image: "/nalha_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Soporta 70kg",
        description: [
          "Ideal para Bulldog Ingles, Bull Terrier, American Bully, Border Collie y similares."
        ]
      },
      { 
        size: "XXL", 
        price: "S/ 460", 
        image: "/nalha_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Soporta 100kg",
        description: [
          "Ideal para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
        ]
      }
    ],
  },
  {
    id: 4,
    name: "Sofa Valentina",
    price: "S/ 340",
    category: "Sofás",
    image: "/valentina_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento con cierre, apto para lavar a mano o lavadora.",
      "Respaldar firme y cómodo",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines laterales con pega pega (cinta adhesiva velcrom para que no se caigan, pero se pueden despegar para lavar).",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir unácil acceso.",
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/valentina_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/valentina_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Bulldog Ingles, Bull Terrier, American Bully, Border Collie y similares."
        ]
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/valentina_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: [
          "Ideal para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
        ]
      }
    ],
  },
  {
    id: 5,
    name: "Sofa Brandon",
    price: "S/ 340",
    category: "Sofás",
    image: "/brandon_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo, con una entrada que facilita el ingreso de la mascota.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluye dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/brandon_L.jpeg",
        dimensions: "75cm Diametro / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/brandon_XL.jpeg",
        dimensions: "95cm Diametro / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Bulldog Ingles, Bull Terrier, American Bully, Border Collie y similares."
        ]
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/brandon_XXL.jpeg",
        dimensions: "1.10cm Diametro / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: [
          "Ideal para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
        ]
      }
    ],
  },
  {
    id: 6,
    name: "Sofa Mike",
    price: "S/ 340",
    category: "Sofás",
    image: "/mike_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Asiento relleno de fibra hipoalergénica (Napa), funda lavable (mano o lavadora,) sin descoser. El color es de su elección.",
      "Respaldar firme y cómodo, con una entrada que facilita el ingreso de la mascota.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluye dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/mike_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/mike_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Bulldog Ingles, Bull Terrier, American Bully, Border Collie y similares."
        ]
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/mike_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: [
          "Ideal para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
        ]
      }
    ],
  },
  {
    id: 7,
    name: "Sofa Mildan Premiun",
    price: "S/ 380",
    category: "Sofás",
    image: "/mildan_premium_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir color de tela terciopelo.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Funda del asiento con cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo, con detalle capitoneado en los laterales internos.",
      "Detalle en el borde del sofá en forma de U con estoperoles.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluye dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
    ],
    productionTime: "Son 2-4 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Se envía a provincias del Perú por agencia. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 380", 
        image: "/mildan_premium_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Snaucer, Poodle, Beagle, Jack Rusell."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/mildan_premium_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 60kg",
        description: [
          "Ideal para Pitbull, Boxer, Husky, Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/mildan_premium_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 80kg",
        description: [
          "Ideal para Rottweiler, Labrador, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 8,
    name: "Sofa Ruffo",
    price: "S/ 340",
    category: "Sofás",
    image: "/ruffo_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir el material (Iker terciopelo o ultra cuero marroquin) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado con tela hipoalergénica (varios colores disponibles)",
      "Asiento incorporado.",
      "Limpieza del sofá facil y rapida, con paño húmedo de preferencia microfibra y gotas de shampoo.",
      "Respaldar firme y cómodo.",
      "Brazos (laterales) del sofá son anchos, diseñados para brindar comodidad al apoyar la cabeza o colita, reflejando elegancia.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluye dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
    ],
    productionTime: "Son 2-3 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Se envía por agencia a provincias del Perú. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/ruffo_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg",
        description: [
          "Ideal para Bulldog Frances, Poodle, Beagle, Jack Rusell."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/ruffo_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 50kg",
        description: [
          "Ideal para Pitbull, Boxer, Husky, Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/ruffo_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Rottweiler, Labrador, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 9,
    name: "Cama Buffyto",
    price: "S/ 380",
    category: "Camas",
    image: "/cama_buffyto_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir el color de tela terciopelo, modelo de cabecera y escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Box tarima y Cabecera tapizado con tela hipoalergénica (Modelo a elegir)",
      "Colchón relleno de espuma de alta densidad y resistencia de 5cm de grosor.",
      "Patas de acero cromado brillante con antideslizante.",
      "Una almohada hipoalergénica.",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Se puede añadir los accesorios como sábana, protector o manta. (Revisar en el ítem de Accesorios)"
    ],
    productionTime: "Son 2-4 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 250", 
        image: "/cama_buffyto_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg",
        description: [
          "Ideal para Snaucer, Poodle, Beagle, Jack Rusell."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 290", 
        image: "/cama_buffyto_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 50kg",
        description: [
          "Ideal para Pitbull, Boxer, Husky, Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 370",
        image: "/cama_buffyto_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Rottweiler, Labrador, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 10,
    name: "Cama Capitone",
    price: "S/ 380",
    category: "Camas",
    image: "/cama_capitone_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir el color de tela terciopelo y escribirlo en el detalle de la compra.",
      "ADELANTO DEL 20% DEL TOTAL DEL VALOR DEL PRODUCTO."
    ],
    characteristics: [
      "Box tarima y Cabecera capitoneado  tapizado con tela hipoalergénica y perlas decorativas.",
      "Colchón relleno de espuma de alta densidad y resistencia de 10cm de grosor.",
      "Patas de acero cromado brillante con antideslizante.",
      "Una almohada hipoalergénica.",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Se puede añadir los accesorios como sábana, protector o manta.",
      "(Revisar en el ítem de Accesorios)",
    ],
    productionTime: "Son 2-4 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 380", 
        image: "/cama_capitone_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Snaucer, Poodle, Beagle, Jack Rusell."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 430", 
        image: "/cama_capitone_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 60kg",
        description: [
          "Ideal para Pitbull, Boxer, Husky, Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 490",
        image: "/cama_capitone_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 80kg",
        description: [
          "Ideal para Rottweiler, Labrador, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 11,
    name: "Cama Nalhaguau",
    price: "S/ 200",
    category: "Camas",
    image: "/cama_nalhaguau_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir el color de tela terciopelo y escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Box tarima de madera tapizado con tela hipoalergénica.",
      "Colchón relleno de fibra hipoalergenica. (Color a elegir)",
      "Detalle en la entrada del Box tarima (Opcional).",
      "Patas de acero cromado brillante con antideslizante.",
      "Una almohada hipoalergénica",
      "Al estar elevados del piso, aíslan del frío y del calor",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Se puede adicionar los accesorios como sábana, protector o manta.",
      "(Revisar en el ítem de Accesorios)",
    ],
    productionTime: "Son 1-2 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 200", 
        image: "/cama_nalhaguau_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg",
        description: [
          "Ideal para Gatos, Poodle, Beagle, Jack Rusell."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 260", 
        image: "/cama_nalhaguau_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 50kg",
        description: [
          "Ideal para Pitbull, Boxer, Husky, Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 320",
        image: "/cama_nalhaguau_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Rottweiler, Labrador, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 12,
    name: "Cama Zaragoza",
    price: "S/ 300",
    category: "Camas",
    image: "/cama_zaragoza_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir el color de tela terciopelo, modelo de cabecera y escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Box tarima y Cabecera tapizado con tela hipoalergénica (Modelo a elegir)",
      "Colchón relleno de espuma de alta densidad y resistencia de 10cm de grosor.",
      "Patas de acero cromado brillante con antideslizante.",
      "Una almohada hipoalergénica",
      "Al estar elevados del piso, aíslan del frío y del calor",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Se puede adicionar los accesorios como sábana, protector o manta.",
      "(Revisar en el ítem de Accesorios)",
    ],
    productionTime: "Son 2-4 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 300", 
        image: "/cama_zaragoza_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: [
          "Ideal para Bulldog Frances, Beagle, Jack Rusell."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 360", 
        image: "/cama_zaragoza_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 60kg",
        description: [
          "Ideal para Pitbull, Boxer, Husky, Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/cama_zaragoza_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 80kg",
        description: [
          "Ideal para Rottweiler, Labrador, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 13,
    name: "Cama Jasperguau",
    price: "S/ 160",
    category: "Camas",
    image: "/cama_jasperguau_L.jpeg",
    description: [
      "Detalles en dorado y telas de lujo para el descanso más exigente."
    ],
    important: [
      "Elegir el color de tela terciopelo y escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Box tarima de madera tapizado con tela hipoalergénica",
      "Colchón relleno de espuma de alta densidad y resistencia de 5cm de grosor.",
      "Detalle en la entrada del Box tarima (Opcional)",
      "Patas de acero cromado brillante con antideslizante.",
      "Una almohada hipoalergénica",
      "Al estar elevados del piso, aíslan del frío y del calor",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Se puede adicionar los accesorios como sábana, protector o manta.",
      "(Revisar en el ítem de Accesorios)",
    ],
    productionTime: "Son 1-2 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 160", 
        image: "/cama_jasperguau_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg",
        description: [
          "Ideal para Snaucer, Poodle, Beagle, Jack Rusell."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 210", 
        image: "/cama_jasperguau_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 50kg",
        description: [
          "Ideal para Pitbull, Boxer, Husky, Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 270",
        image: "/cama_jasperguau_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Rottweiler, Labrador, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 14,
    name: "Escalera 3 pasos",
    price: "S/ 170",
    category: "Escaleras",
    image: "/3pasos_modelo1.jpeg",
    description: [
      "Nuestras escaleras para mascotas están diseñadas para brindar ayuda al subir y/o bajar de camas o sillones sin tener que saltar, lo que ayuda a proteger su columna, articulaciones y cadera. Esto es especialmente importante para mascotas pequeñas, de edad avanzada o con problemas articulares.",
      "Además de brindar comodidad, una escalera reduce el riesgo de lesiones, golpes o desgaste en la espalda, favoreciendo una mejor calidad de vida y mayor seguridad en el hogar. Es una solución práctica que combina cuidado, prevención y comodidad para nuestras mascotas."
    ],
    characteristics: [
      "Tapiz con cierre: Lavable a mano o lavadora.",
      "Tela Tapiz: Terciopelo, suave al tacto.",
      "Relleno: Espuma Zebra Paraiso",
      "Funda intercambiable",
      "Color: Elegir entre 20 colores"
    ],
    productionTime: "2 - 3 días",
    deliveryInfo: "",
    shippingInfo: "",
    variants: [
      {
        size: "Modelo 1",
        price: "S/ 170",
        image: "/3pasos_modelo1.jpeg",
        dimensions: "38cm alto x 33cm ancho x 50cm fondo",
        weight: "",
        description: [],
      },
      {
        size: "Modelo 2",
        price: "S/ 210",
        image: "/3pasos_modelo2.jpeg",
        dimensions: "38cm alto x 50cm ancho x 50cm fondo",
        weight: "",
        description: [],
      }
    ]
  },
  {
    id: 15,
    name: "Escalera 4 pasos",
    price: "S/ 230",
    category: "Escaleras",
    image: "/4pasos_modelo1.jpeg",
    description: [
      "Nuestras escaleras para mascotas están diseñadas para brindar ayuda al subir y/o bajar de camas o sillones sin tener que saltar, lo que ayuda a proteger su columna, articulaciones y cadera. Esto es especialmente importante para mascotas pequeñas, de edad avanzada o con problemas articulares.",
      "Además de brindar comodidad, una escalera reduce el riesgo de lesiones, golpes o desgaste en la espalda, favoreciendo una mejor calidad de vida y mayor seguridad en el hogar. Es una solución práctica que combina cuidado, prevención y comodidad para nuestras mascotas."
    ],
    characteristics: [
      "Tapiz con cierre: Lavable a mano o lavadora.",
      "Tela Tapiz: Terciopelo, suave al tacto.",
      "Relleno: Espuma Zebra Paraiso",
      "Funda intercambiable",
      "Color: Elegir entre 20 colores"
    ],
    productionTime: "2 - 3 días",
    deliveryInfo: "",
    shippingInfo: "",
    variants: [
      {
        size: "Modelo 1",
        price: "S/ 230",
        image: "/4pasos_modelo1.jpeg",
        dimensions: "50cm alto x 33cm ancho x 62cm fondo",
        weight: "",
        description: [],
      },
      {
        size: "Modelo 2",
        price: "S/ 260",
        image: "/4pasos_modelo2.jpeg",
        dimensions: "50cm alto x 50cm ancho x 62cm fondo",
        weight: "",
        description: [],
      }
    ]
  },
  {
    id: 16,
    name: "Set de Mantas Silk",
    price: "S/ 160",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    description: [
      "Mantas ultra suaves de seda sintética hipoalergénica."
    ],
    important: [
      "Lavar con agua fría",
      "No usar secadora"
    ],
    characteristics: [
      "Tacto seda",
      "Hipoalergénico",
      "Pack de 2 unidades",
      "Colores neutros"
    ],
    productionTime: "2 días hábiles",
    deliveryInfo: "Delivery Gratis en Lima y Callao",
    shippingInfo: "Solo se cubre costo de Embalaje por Temporada",
    discountPercentage: 25
  },
];
