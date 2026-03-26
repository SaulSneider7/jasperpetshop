export interface ProductVariant {
  size: string;
  price: string;
  oldPrice?: string;
  discountPercentage?: number;
  image?: string;
  dimensions?: string;
  weight?: string;
  thickness?: string;
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
    productionTime: "Son 3 días hábiles.",
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
    productionTime: "Son 3 días hábiles.",
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
    productionTime: "Son 3 días hábiles.",
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
    productionTime: "Son 3 días hábiles.",
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
    productionTime: "Son 3 días hábiles.",
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
    productionTime: "Son 3 días hábiles.",
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
    productionTime: "Son 2-4 días hábiles.",
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
    name: "Sofa Canela",
    price: "S/ 340",
    category: "Sofás",
    image: "/canela_L.jpeg",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES"
    ],
    important: [
      "Elegir el color de la tela Iker hipoalergénica",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica.",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo.",
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
        image: "/canela_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg",
        description: [
          "Ideal para Poodle, Beagle, Jack Rusell, Pug."
        ]
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/canela_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 50kg",
        description: [
          "Ideal para Pitbull, Boxer, American Bully Bulldog Ingles."
        ]
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/canela_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: [
          "Ideal para Pastor Aleman, Rottweiler, Golden Retriever."
        ]
      }
    ],
  },
  {
    id: 10,
    name: "Sofa Bonnie",
    price: "S/ 280",
    category: "Sofás",
    image: "/sofa_bonnie.jpeg",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES"
    ],
    important: [
      "Elegir el color de la tela Iker hipoalergénica",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica (varios colores disponibles)",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluye dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna, cuidar sus huesos y permitir un fácil acceso.",
    ],
    productionTime: "Son 2-3 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "S", 
        price: "S/ 280", 
        image: "/sofa_bonnie.jpeg",
        dimensions: "55cm ancho x 40cm largo / 8cm patas cromadas",
        weight: "Hasta 15kg"
      },
      { 
        size: "M", 
        price: "S/ 320", 
        image: "/sofa_bonnie.jpeg",
        dimensions: "65cm ancho x 50cm largo / 8cm patas cromadas",
        weight: "Hasta 25kg",
      },
      {
        size: "L",
        price: "S/ 340",
        image: "/sofa_bonnie.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg"
      }
    ],
  },
  {
    id: 11,
    name: "Sofa Duquesa",
    price: "S/ 280",
    category: "Sofás",
    image: "/sofa_duquesa.png",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES"
    ],
    important: [
      "Elegir el color de la tela Iker hipoalergénica",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica (varios colores disponibles)",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluye dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna, cuidar sus huesos y permitir un fácil acceso.",
    ],
    productionTime: "Son 2-3 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "S", 
        price: "S/ 280", 
        image: "/sofa_duquesa.png",
        dimensions: "55cm ancho x 40cm largo / 8cm patas cromadas",
        weight: "Hasta 15kg"
      },
      { 
        size: "M", 
        price: "S/ 320", 
        image: "/sofa_duquesa.png",
        dimensions: "65cm ancho x 50cm largo / 8cm patas cromadas",
        weight: "Hasta 25kg",
      },
      {
        size: "L",
        price: "S/ 340",
        image: "/sofa_duquesa.png",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg"
      }
    ],
  },
  {
    id: 12,
    name: "Sofa Michito",
    price: "S/ 280",
    category: "Sofás",
    image: "/sofa_michito.jpeg",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES"
    ],
    important: [
      "Elegir el color de la tela Iker hipoalergénica",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica (varios colores disponibles)",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluye dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna, cuidar sus huesos y permitir un fácil acceso.",
    ],
    productionTime: "Son 2-3 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "S", 
        price: "S/ 280", 
        image: "/sofa_michito.jpeg",
        dimensions: "55cm ancho x 40cm largo / 8cm patas cromadas",
        weight: "Hasta 15kg"
      },
      { 
        size: "M", 
        price: "S/ 320", 
        image: "/sofa_michito.jpeg",
        dimensions: "65cm ancho x 50cm largo / 8cm patas cromadas",
        weight: "Hasta 25kg",
      },
      {
        size: "L",
        price: "S/ 340",
        image: "/sofa_michito.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 30kg"
      }
    ],
  },
  {
    id: 13,
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
    id: 14,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
    name: "Colchones para mascotas",
    price: "S/ 100",
    category: "Colchones",
    image: "/colchon_10CM.jpeg",
    description: [
      "Colchon para mascotas."
    ],
    important: [
      "Elegir el grosor del colchón y especificar en el detalle de la compra."
    ],
    characteristics: [
      "Colchón relleno de espuma de alta densidad y resistencia del grosor de su elección.",
      "Tapizado con tela tricot y cerrado con ribete.",
      "Una almohada hipoalergénica",
      "Se puede añadir los accesorios como sábana, protector o manta. (Revisar en el ítem de Accesorios)",
    ],
    productionTime: "Son 1-2 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: `L - Grosor 4"`, 
        price: "S/ 100", 
        image: "/colchon_10CM.jpeg",
        dimensions: `75cm ancho x 60cm largo`,
        weight: ``,
        thickness: `4" (10cm)`,
        description: [
          ""
        ]
      },
      { 
        size: `L - Grosor 6"`, 
        price: "S/ 130",
        image: "/colchon_15CM.jpeg",
        dimensions: "75cm ancho x 60cm largo",
        thickness: `6" (15cm)`,
        description: [
          ""
        ]
      },
      {
        size: `L - Grosor 8"`,
        price: "S/ 160",
        image: "/colchon_20CM.jpeg",
        dimensions: "75cm ancho x 60cm largo",
        thickness: `8" (20cm)`,
        description: [
          ""
        ]
      },
      {
        size: `XL - Grosor 4"`,
        price: "S/ 150",
        image: "/colchon_10CM.jpeg",
        dimensions: "95cm ancho x 80cm largo",
        thickness: `4" (10cm)`,
        description: [
          ""
        ]
      },
      {
        size: `XL - Grosor 6"`,
        price: "S/ 180",
        image: "/colchon_15CM.jpeg",
        dimensions: "95cm ancho x 80cm largo",
        thickness: `6" (15cm)`,
        description: [
          ""
        ]
      },
      {
        size: `XL - Grosor 8"`,
        price: "S/ 200",
        image: "/colchon_20CM.jpeg",
        dimensions: "95cm ancho x 80cm largo",
        thickness: `8" (20cm)`,
        description: [
          ""
        ]
      },
      {
        size: `XXL - Grosor 4"`,
        price: "S/ 170",
        image: "/colchon_10CM.jpeg",
        dimensions: "1.10cm ancho x 90cm largo",
        thickness: `4" (10cm)`,
        description: [
          ""
        ]
      },
      {
        size: `XXL - Grosor 6"`,
        price: "S/ 200",
        image: "/colchon_15CM.jpeg",
        dimensions: "1.10cm ancho x 90cm largo",
        thickness: `6" (15cm)`,
        description: [
          ""
        ]
      },
      {
        size: `XXL - Grosor 8"`,
        price: "S/ 220",
        image: "/colchon_20CM.jpeg",
        dimensions: "1.10cm ancho x 90cm largo",
        thickness: `8" (20cm)`,
        description: [
          ""
        ]
      }
    ],
  },
  {
    id: 18,
    name: "Colchones Pocket",
    price: "S/ 200",
    category: "Colchones",
    image: "/colchones_pocket_chico.jpeg",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES"
    ],
    
    characteristics: [
      "Colchón relleno de resortes pocket (encapsulados) y espuma de alta densidad y resistencia del grosor de su elección.",
      "Ortopédico, recomendable para mascotas adultas, con problemas articulares y/o musculares.",
      "Tapizado con tela tejido punto hipoalergénico y cerrado con ribete.",
      "Incluye una almohada hipoalergénica",
      "Se puede añadir los accesorios como sábana, protector o manta. (Revisar en el ítem de Accesorios)",
    ],
    productionTime: "Son 2-3 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: `CHICO`, 
        price: "S/ 200", 
        image: "/colchones_pocket_chico.jpeg",
        dimensions: `75cm ancho x 70cm largo`,
        weight: ``,
        thickness: ``,
      },
      { 
        size: `MEDIANO`, 
        price: "S/ 280",
        image: "/colchones_pocket_mediano.jpeg",
        dimensions: "1.20cm ancho x 70cm largo",
      },
      {
        size: `GRANDE`,
        price: "S/ 360",
        image: "/colchones_pocket_grande.jpeg",
        dimensions: "1.20cm ancho x 1.30cm largo",
      }
    ],
  },
  {
    id: 19,
    name: "Colchoneta para mascotas",
    price: "S/ 150",
    category: "Colchonetas",
    image: "/colchoneta_L.jpeg",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES"
    ],
    important: [
      "Elegir el color de tela y especificar en el detalle de la compra.",
    ],
    characteristics: [
      "Colchoneta con relleno de fibra hipoalergénica (Napa).",
      "Doble forro, el primero con tafeta cerrada y la segunda con tela iker terciopelo con cierre.",
      "Una almohada hipoalergénica",
      "Se puede añadir los accesorios como sábana, protector o manta. (Revisar en el ítem de Accesorios)",
    ],
    productionTime: "Son 1-2 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      { 
        size: `CHICO`, 
        price: "S/ 150", 
        image: "/colchoneta_L.jpeg",
        dimensions: `75cm ancho x 70cm largo`,
        weight: ``,
        thickness: ``,
      },
      { 
        size: `MEDIANO`, 
        price: "S/ 220",
        image: "/colchoneta_XL.jpeg",
        dimensions: "1.20cm ancho x 70cm largo",
      },
      {
        size: `GRANDE`,
        price: "S/ 290",
        image: "/colchoneta_XXL.jpeg",
        dimensions: "1.20cm ancho x 1.30cm largo",
      }
    ],
  },
  {
    id: 20,
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
    id: 21,
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
    id: 22,
    name: "Bebedero Portatil",
    price: "S/ 20",
    category: "Accesorios",
    image: "/bebedero_portatil.jpeg",
    description: [
      "El Bebedero Portátil para perros es ideal para  tu perro o gato.  Al caminar al aire libre, hacer senderismo y viajar, proporciona agua fresca rápidamente a tus mascotas sedientas. La botella de agua de viaje perfecta para mascotas con solo un botón para abrir/bloquear agua, funciona con una mano. Incluye una mini correa que se puede colocar en la cartera, mochila o correa.",
      "<span class='font-bold'>Colores: </span>",
      "- Celeste",
      "- Rosado",
      "- Blanco",
      "(Consultar disponibilidad del color)."
    ],
    characteristics: [
      "Práctico y vistoso dispensador para perros, elaborado con material resistente de excelente calidad.",
      "Contiene un dispensador con traba, para regular la salida y evitar filtraciones del líquido.",
      "Posee una mini correa para llevarlo más cómodamente.",
      "Fácil de transportar y de limpiar."
    ]
  },
  {
    id: 23,
    name: "Cepillo Vaporizador",
    price: "S/ 16",
    category: "Accesorios",
    image: "/cepillo_vaporizador.jpeg",
    description: [
      "El Cepillo Vaporizador esta diseñado para facilitar el cuidado e higiene de los perros y gatos, mediante la eliminación de suciedad, polvo, y posibles parásitos externos del pelaje de forma rápida y eficiente. Este dispositivo combina las funciones de un cepillo y un vaporizador para ofrecer una solución completa de cuidado para las mascotas.",
      "<span class='font-bold'>Beneficios: </span>",
      "- El vapor ayuda a aflojar y eliminar la suciedad, polvo y residuos del pelaje de la mascota de manera rápida y eficiente.",
      "- El vapor también puede ayudar a eliminar posibles parásitos externos, como pulgas y garrapatas, proporcionando una solución de higiene adicional para las mascotas.",
      "- Al ser portátil, el cepillo vaporizador se puede utilizar en casa o mientras se viaja, lo que permite un cuidado conveniente en cualquier momento y lugar.",
      "<span class='font-bold'>Modo de uso: </span>",
      "- Carga el cepillo con su respectivo cable USB, una vez cargado, desenchufar y usar. ",
      "- Retirar el tapón que se encuentra en la parte trasera del producto, para poder rellenarlo con agua. (Idealmente rellenarlo sin rebasar)",
      "- Para que rocíe el vapor se debe presionar el botón que se encuentra en la parte trasera del cepillo y listo.",
      "<span class='font-bold'>Colores: </span>",
      "- Rosado",
      "- Blanco",
      "- Naranja",
      "(Consultar disponibilidad del color)."
    ],
    characteristics: [
      "Este Cepillo vaporizador para mascotas resuelve eficazmente problemas como enredos y nudos del pelaje, limpia la pelusa flotante y relaja a tu mascota.",
      "Suave para la piel de las mascotas, porque posee cerdas suaves con extremos redondeados, lo que garantiza que la piel de su mascota no se dañe durante el proceso de aseo. ",
      "Elaborado de material ABS resistente, este cepillo vaporizador para mascotas es resistente y no se daña fácilmente. Se puede utilizar durante mucho tiempo para mantener el pelaje de su mascota suave y brillante.",
      "Fácil de transportar y de limpiar."
    ]
  },
  {
    id: 24,
    name: "Cortauñas LED para gatos y perros",
    price: "S/ 28",
    category: "Accesorios",
    image: "/cortauñas_led.jpeg",
    description: [
      "Este cortauñas para mascotas es indispensable en tu hogar, esta equipado con luz LED en la parte superior, generando un corte de uña iluminada o linea de sangre visible, lo que permite recortar fácilmente evitando daños en los vasos sanguíneos, sin preocuparse de que su mascota se lastime si se mueve con facilidad.",
      "El cortaúñas para perros/gatos está fabricado con ABS de alta calidad y cuchillas afiladas de acero inoxidable, lo que proporciona una experiencia de aseo precisa y rápida. Este cortador de uñas de aseo incorpora 3 baterías.",
      "<span class='font-bold'>Colores: </span>",
      "- Rosado",
      "- Blanco",
      "(Consultar disponibilidad del color)."
    ],
    characteristics: [
      "Diseñado con un exclusivo protector anti-salpicaduras que recoge los recortes de uñas en un recipiente desmontable para proteger sus ojos y evitar que los residuos se dispersen.",
      "Cuenta con un bloqueo de seguridad que evita cortes accidentales, brindando mayor protección para usted y su mascota. Se puede bloquear cuando no esté en uso, su tamaño compacto y peso ligero lo hacen fácil de transportar.",
      "Mango ergonómico, El mango proporciona un agarre seguro y cómodo, brindándole un mejor control para un corte preciso durante las sesiones de aseo.",
    ]
  },
  {
    id: 25,
    name: "Protectores",
    price: "S/ 60",
    category: "Accesorios",
    image: "/protector_L.jpeg",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES",
    ],
    important: [
      "Indicar el grosor del colchón, el color del protector y especificar en el detalle de la compra."
    ],
    characteristics: [
      "Protector de colchón con cierre.",
      "Material:  tela iker terciopelo.",
      "Lavable a mano o lavadora.",
      "Suave al tacto."
    ],
    productionTime: "Son de 1-2 dias hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      {
        size: `L - grosor 4"`,
        price: "S/ 60",
        image: "/protector_L.jpeg",
        dimensions: `75cm ancho x 60cm largo`,
        thickness: `4" (10cm)`,
      },
      {
        size: `L - grosor 6"`,
        price: "S/ 70",
        image: "/protector_L.jpeg",
        dimensions: `75cm ancho x 60cm largo`,
        thickness: `6" (15cm)`,
      },
      {
        size: `L - grosor 8"`,
        price: "S/ 80",
        image: "/protector_L.jpeg",
        dimensions: `75cm ancho x 60cm largo`,
        thickness: `8" (20cm)`,
      },
      {
        size: `XL - grosor 4"`,
        price: "S/ 80",
        image: "/protector_XL.jpeg",
        dimensions: `95cm ancho x 80cm largo`,
        thickness: `4" (10cm)`,
      },
      {
        size: `XL - grosor 6"`,
        price: "S/ 90",
        image: "/protector_XL.jpeg",
        dimensions: `95cm ancho x 80cm largo`,
        thickness: `6" (15cm)`,
      },
      {
        size: `XL - grosor 8"`,
        price: "S/ 95",
        image: "/protector_XL.jpeg",
        dimensions: `95cm ancho x 80cm largo`,
        thickness: `8" (20cm)`,
      },
      {
        size: `XXL - grosor 4"`,
        price: "S/ 95",
        image: "/protector_XXL.jpeg",
        dimensions: `1.10cm ancho x 90cm largo`,
        thickness: `4" (10cm)`,
      },
      {
        size: `XXL - grosor 6"`,
        price: "S/ 105",
        image: "/protector_XXL.jpeg",
        dimensions: `1.10cm ancho x 90cm largo`,
        thickness: `6" (15cm)`,
      },
      {
        size: `XXL - grosor 8"`,
        price: "S/ 110",
        image: "/protector_XXL.jpeg",
        dimensions: `1.10cm ancho x 90cm largo`,
        thickness: `8" (20cm)`,
      },
    ]
  },
  {
    id: 26,
    name: "Sábanas",
    price: "S/ 40",
    category: "Accesorios",
    image: "/sabanas_1.jpeg",
    description: [
      "FABRICAMOS MEDIDAS ESPECIALES",
      "<span class='font-bold'>Incluye:</span>",
      "- Una sábana con elástico y una funda de almohada."
    ],
    important: [
      "Elegir el grosor, el color y especificar en el detalle de la compra."
    ],
    characteristics: [
      "La Tela Popelina es fina, ligera y con algo de brillo.",
    ],
    productionTime: "Son 1-2 días hábiles.",
    deliveryInfo: "Una vez terminado, se distribuye con Delivery Gratis en Lima y Callao. (Revisando la cobertura)",
    shippingInfo: "Se envía a las provincias del Perú por agencia. (Solo se cubre el costo del embalaje por Temporada)",
    variants: [
      {
        size: `L - grosor 4"`,
        price: "S/ 40",
        image: "/sabanas_1.jpeg",
        dimensions: `75cm ancho x 60cm largo`,
        thickness: `4" (10cm)`,
      },
      {
        size: `L - grosor 6"`,
        price: "S/ 50",
        image: "/sabanas_1.jpeg",
        dimensions: `75cm ancho x 60cm largo`,
        thickness: `6" (15cm)`,
      },
      {
        size: `L - grosor 8"`,
        price: "S/ 50",
        image: "/sabanas_1.jpeg",
        dimensions: `75cm ancho x 60cm largo`,
        thickness: `8" (20cm)`,
      },
      {
        size: `XL - grosor 4"`,
        price: "S/ 50",
        image: "/sabanas_2.jpeg",
        dimensions: `95cm ancho x 80cm largo`,
        thickness: `4" (10cm)`,
      },
      {
        size: `XL - grosor 6"`,
        price: "S/ 60",
        image: "/sabanas_2.jpeg",
        dimensions: `95cm ancho x 80cm largo`,
        thickness: `6" (15cm)`,
      },
      {
        size: `XL - grosor 8"`,
        price: "S/ 60",
        image: "/sabanas_2.jpeg",
        dimensions: `95cm ancho x 80cm largo`,
        thickness: `8" (20cm)`,
      },
      {
        size: `XXL - grosor 4"`,
        price: "S/ 60",
        image: "/sabanas_1.jpeg",
        dimensions: `1.10cm ancho x 90cm largo`,
        thickness: `4" (10cm)`,
      },
      {
        size: `XXL - grosor 6"`,
        price: "S/ 70",
        image: "/sabanas_1.jpeg",
        dimensions: `1.10cm ancho x 90cm largo`,
        thickness: `6" (15cm)`,
      },
      {
        size: `XXL - grosor 8"`,
        price: "S/ 70",
        image: "/sabanas_1.jpeg",
        dimensions: `1.10cm ancho x 90cm largo`,
        thickness: `8" (20cm)`,
      },
    ]
  },
  {
    id: 27,
    name: "Bolsa Biodegradables para Perros",
    price: "S/ 18",
    category: "Juguetes",
    image: "/bolsa_biodegradable.jpeg",
    description: [
      "Dispensador de bolsas para aseo de tu mascota, ideal para mantener el ambiente limpio y es fácil de transportar en mochila, bolso o correa.",
      "<span class='font-bold'>Colores:</span>",
      "- Rojo",
      "- Celeste",
      "- Plomo",
      "- Verde",
      "(Consultar disponibilidad del color)"
    ],
    characteristics: [
      "Bolsas 100% biodegradables, resistentes e higiénicas.",
      "Incluye 5 rollos (15 bolsas c/u)",
      "Reduce tu huella ecológica mientras cuidas a tu mascota.",
      "Ideal para paseos diarios, viajes o uso en parques.",
      "Material resistente que evita fugas y malos olores.",
      "Protege a tu mascota y al planeta.",
      "Dispensador gratis."
    ],
  },
  {
    id: 28,
    name: "Kit Dental para Mascotas",
    price: "S/ 20",
    category: "Juguetes",
    image: "/kit_dental.jpeg",
    description: [
      "El cuidado dental de tu mascota es importante, la formula que contiene no hace espuma, no es necesario enjuagar. Ayudar a mantener limpio los diente y mal aliento.",
      "<span class='font-bold'>Colores:</span>",
      "- Rosado",
      "- Celeste",
      "- Plomo",
      "- Verde",
      "(Consultar disponibilidad del color)"
    ],
    characteristics: [
      "Proporciona todo lo necesario para mejorar y mantener la salud bucal de su mascota, simplemente deslícelo sobre el dedo y lave los dientes de su engreído.",
      "La higiene bucal se puede realizar 1 vez por semana o de manera inter-diaria. (Esto dependerá de la necesidad de la mascotas.)",
      "Apto para todas las razas sin importar el tamaño.",
      "Incluye 4 tipos de cepillos.",
      "Ayuda a prevenir la acumulación de sarro.",
      "Mantiene fresco el aliento de tu perro."
    ],
  },
  {
    id: 29,
    name: "Soga con pelota para perros",
    price: "S/ 16",
    category: "Juguetes",
    image: "/soga_con_pelota.jpeg",
    description: [
      "La soga con pelota ayuda a la mascota a tener mayor actividad física y facilita la interacción, sobre todo con cachorros o edad adolescente. Ayuda a tenerlos entretenidos, liberan estrés, se ejercitan y divierten al mismo tiempo.",
      "<span class='font-bold'>Colores:</span>",
      "- Celeste con verde",
      "- Verde con amarillo",
      "(Consultar disponibilidad del color)"
    ],
    characteristics: [
      "Fabricado en hilo de algodón con anudado tipo soga y pelota en su extremo.",
      "Este juguete es ideal para disfrutar con tu mascota de una sesión de juego.",
      "Ejercita la mandíbula y fortalece las encías.",
      "Mide 30 centímetros",
      "Textura agradable para tu mascota.",
      "Estimulas sus instintos naturales de cacería."
    ],
  },
];
