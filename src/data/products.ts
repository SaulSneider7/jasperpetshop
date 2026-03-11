export interface ProductVariant {
  size: string;
  price: string;
  oldPrice?: string;
  discountPercentage?: number;
  image?: string;
  dimensions?: string;
  weight?: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  category: string;
  image: string;
  description: string;
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
    image: "./sofa_jasper.jpeg",
    description: "Terciopelo italiano de alta resistencia con base de madera sólida.",
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluyen dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Si te gusta más de un color, ¡puedes sumar fundas extras! Míralas en la sección FUNDAS."
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se reparte con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/jasper_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: "Ideal para Shit Tzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/jasper_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: "Ideal para Buldog Ingles, Bull Terrier, American Bully, Border Colli y similares."
      },
      { 
        size: "XXL", 
        price: "S/ 469", 
        image: "/jasper_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: "Idela para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
      }
    ],
  },
  {
    id: 2,
    name: "Sofa Cala",
    price: "S/ 340",
    category: "Sofás",
    image: "/cala_L.jpeg",
    description: "Espuma viscoelástica que se adapta a la forma de tu mascota.",
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo, con detalle capitoneado acolchado.",
      "Brazos (laterales) del sofá son anchos y ligeramente curvos, diseñados para brindar comodidad al apoyar la cabeza o cola, reflejando elegancia.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluyen dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Si te gusta más de un color, ¡puedes sumar fundas extras! Míralas en la sección FUNDAS."
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se reparte con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340",
        image: "/cala_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."

      },
      { 
        size: "XL", 
        price: "S/ 390",
        image: "/cala_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: "Ideal para Buldog Ingles, Bull Terrier, American Bully, Border Colli y similares."
      },
      { 
        size: "XXL", 
        price: "S/ 460",
        image: "/cala_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: "Idela para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
      }
    ]
  },
  {
    id: 3,
    name: "Sofa Nalha",
    price: "S/ 340",
    category: "Sofás",
    image: "/nalha_L.jpeg",
    description: "Diseño ergonómico para proteger las articulaciones de razas pequeñas.",
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica (varios colores disponibles)",
      "Funda desmontable del asiento, incluye cierre para poder lavar el forro a mano o lavadora.",
      "Respaldar firme y cómodo.",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines decorativos (incluyen dos unidades)",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir un fácil acceso.",
      "Si te gusta más de un color, ¡puedes sumar fundas extras! Míralas en la sección FUNDAS."
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se reparte con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/nalha_L.jpeg",
        dimensions: "40cm alto x 40cm ancho",
        weight: "Soporta 10kg",
        description: "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
      },
      { 
        size: "XL", 
        price: "S/ 390",
        image: "/nalha_XL.jpeg",
        dimensions: "60cm alto x 40cm ancho",
        weight: "Soporta 15kg",
        description: "Ideal para Buldog Ingles, Bull Terrier, American Bully, Border Colli y similares."
      },
      { 
        size: "XXL", 
        price: "S/ 460", 
        image: "/nalha_XXL.jpeg",
        dimensions: "80cm alto x 40cm ancho",
        weight: "Soporta 20kg",
        description: "Ideal para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares"
      }
    ],
  },
  {
    id: 4,
    name: "Sofa Valentina",
    price: "S/ 340",
    category: "Sofás",
    image: "/valentina_L.jpeg",
    description: "Detalles en dorado y telas de lujo para el descanso más exigente.",
    important: [
      "Elegir material (Iker , Lisboa  o Vittoria) y el color de tela.",
      "Escribirlo en el detalle de la compra."
    ],
    characteristics: [
      "Tapizado en tela hipoalergénica (varios colores disponibles)",
      "Fundas desmontables del colchón y de los almohadones laterales, aptas para lavar a mano o lavadora.",
      "Respaldar firme y cómodo",
      "Patas de acero cromado brillante con antideslizante.",
      "Cojines laterales con pega pega (cinta adhesiva velcrom para que no se caigan, pero se pueden quitar para lavar).",
      "Al estar elevados del piso, aíslan del frío y del calor.",
      "La altura es ideal para no dañar su columna y permitir unácil acceso.",
      "Si te gusta más de un color, ¡puedes sumar fundas extras! Míralas en la sección FUNDAS."
    ],
    productionTime: "Son 3 días hábiles aproximadamente.",
    deliveryInfo: "Una vez terminado, se reparte con Delivery Gratis en Lima y Callao.",
    shippingInfo: "Y se envía por agencia a provincias del Perú. (Solo se cubre costo de Embalaje por Temporada)",
    variants: [
      { 
        size: "L", 
        price: "S/ 340", 
        image: "/valentina_L.jpeg",
        dimensions: "75cm ancho x 60cm largo / 8cm patas cromadas",
        weight: "Hasta 40kg",
        description: "Ideal para Shitzu, Snaucer, Poodle, Cocker, Pomerian, Maltes y similares."
      },
      { 
        size: "XL", 
        price: "S/ 390", 
        image: "/valentina_XL.jpeg",
        dimensions: "95cm ancho x 80cm largo / 8cm patas cromadas",
        weight: "Hasta 70kg",
        description: "Ideal para Buldog Ingles, Bull Terrier, American Bully, Border Colli y similares."
      },
      {
        size: "XXL",
        price: "S/ 460",
        image: "/valentina_XXL.jpeg",
        dimensions: "1.10cm ancho x 90cm largo / 8cm patas cromadas",
        weight: "Hasta 100kg",
        description: "Idela para Labrador, Golden Retriever, Dalmata, Weimaraner, Seter, Husky y similares."
      }
    ],
  },
  {
    id: 5,
    name: "Sofá Moderno Gris",
    price: "S/ 750",
    category: "Sofás",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
    description: "Elegancia minimalista que combina con cualquier sala.",
    important: [
      "Telas resistentes a manchas",
      "Patas de metal con protectores de piso"
    ],
    characteristics: [
      "Diseño contemporáneo",
      "Fácil limpieza",
      "Estructura de acero",
      "Cojines fijos"
    ],
    productionTime: "7 días hábiles",
    deliveryInfo: "Delivery Gratis en Lima y Callao",
    shippingInfo: "Solo se cubre costo de Embalaje por Temporada",
    discountPercentage: 5
  },
  {
    id: 6,
    name: "Cama Ortopédica Pro",
    price: "S/ 550",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=800",
    description: "Soporte extra para mascotas mayores o con problemas de movilidad.",
    important: [
      "Recomendado por veterinarios",
      "Altura baja para fácil acceso"
    ],
    characteristics: [
      "Núcleo ortopédico",
      "Bordes elevados para apoyo cervical",
      "Funda impermeable",
      "Antideslizante"
    ],
    productionTime: "5 días hábiles",
    deliveryInfo: "Delivery Gratis en Lima y Callao",
    shippingInfo: "Solo se cubre costo de Embalaje por Temporada",
    discountPercentage: 12
  },
  {
    id: 7,
    name: "Set de Mantas Silk",
    price: "S/ 160",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    description: "Mantas ultra suaves de seda sintética hipoalergénica.",
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
  {
    id: 8,
    name: "Cama Redonda Zen",
    price: "S/ 460",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1591584539339-84e17e894611?auto=format&fit=crop&q=80&w=800",
    description: "Forma circular que brinda sensación de seguridad y calma.",
    important: [
      "Ideal para mascotas que duermen acurrucadas",
      "Bordes ultra acolchados"
    ],
    characteristics: [
      "Efecto calmante",
      "Pelo sintético de alta calidad",
      "Lavable por completo",
      "Base térmica"
    ],
    productionTime: "4 días hábiles",
    deliveryInfo: "Delivery Gratis en Lima y Callao",
    shippingInfo: "Solo se cubre costo de Embalaje por Temporada"
  }
];
