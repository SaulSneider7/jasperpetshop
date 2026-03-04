export interface ProductVariant {
  size: string;
  price: string;
  oldPrice?: string;
  discountPercentage?: number;
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
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sofa Royal Velvet",
    price: "S/ 899",
    category: "Sofás",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    description: "Terciopelo italiano de alta resistencia con base de madera sólida.",
    variants: [
      { size: "S", price: "S/ 899", discountPercentage: 15 },
      { size: "M", price: "S/ 1,099", discountPercentage: 15 },
      { size: "L", price: "S/ 1,299", discountPercentage: 15 }
    ],
    discountPercentage: 15
  },
  {
    id: 2,
    name: "Cama Nube Memory",
    price: "S/ 650",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    description: "Espuma viscoelástica que se adapta a la forma de tu mascota.",
    variants: [
      { size: "Small", price: "S/ 650" },
      { size: "Medium", price: "S/ 750" },
      { size: "Large", price: "S/ 850" }
    ]
  },
  {
    id: 3,
    name: "Escalera Minimal",
    price: "S/ 420",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    description: "Diseño ergonómico para proteger las articulaciones de razas pequeñas.",
    variants: [
      { size: "2 Pasos", price: "S/ 420", discountPercentage: 10 },
      { size: "3 Pasos", price: "S/ 520", discountPercentage: 10 }
    ],
    discountPercentage: 10
  },
  {
    id: 4,
    name: "Cama Imperial Gold",
    price: "S/ 1,100",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
    description: "Detalles en dorado y telas de lujo para el descanso más exigente.",
    variants: [
      { size: "Standard", price: "S/ 1,100", discountPercentage: 20 },
      { size: "King", price: "S/ 1,400", discountPercentage: 20 }
    ],
    discountPercentage: 20
  },
  {
    id: 5,
    name: "Sofá Moderno Gris",
    price: "S/ 750",
    category: "Sofás",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
    description: "Elegancia minimalista que combina con cualquier sala.",
    discountPercentage: 5
  },
  {
    id: 6,
    name: "Cama Ortopédica Pro",
    price: "S/ 550",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=800",
    description: "Soporte extra para mascotas mayores o con problemas de movilidad.",
    discountPercentage: 12
  },
  {
    id: 7,
    name: "Set de Mantas Silk",
    price: "S/ 160",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    description: "Mantas ultra suaves de seda sintética hipoalergénica.",
    discountPercentage: 25
  },
  {
    id: 8,
    name: "Cama Redonda Zen",
    price: "S/ 460",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    description: "Forma circular que brinda sensación de seguridad y calma."
  }
];
