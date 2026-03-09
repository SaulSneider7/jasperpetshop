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
    name: "Sofa Brandon",
    price: "S/ 340",
    category: "Sofás",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    description: "Terciopelo italiano de alta resistencia con base de madera sólida.",
    variants: [
      { size: "L", price: "S/ 340" },
      { size: "XL", price: "S/ 390" },
      { size: "XXL", price: "S/ 460" }
    ],
  },
  {
    id: 2,
    name: "Sofa Cala",
    price: "S/ 340",
    category: "Sofás",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    description: "Espuma viscoelástica que se adapta a la forma de tu mascota.",
    variants: [
      { size: "L", price: "S/ 340" },
      { size: "XL", price: "S/ 390" },
      { size: "XXL", price: "S/ 460" }
    ]
  },
  {
    id: 3,
    name: "Sofa Copito",
    price: "S/ 340",
    category: "Sofás",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    description: "Diseño ergonómico para proteger las articulaciones de razas pequeñas.",
    variants: [
      { size: "L", price: "S/ 340" },
      { size: "XL", price: "S/ 390" },
      { size: "XXL", price: "S/ 460" }
    ]
  },
  {
    id: 4,
    name: "Sofa Jasper",
    price: "S/ 340",
    category: "Sofás",
    image: "/sofa_jasper.jpeg",
    description: "Detalles en dorado y telas de lujo para el descanso más exigente.",
    variants: [
      { size: "L", price: "S/ 340"},
      { size: "XL", price: "S/ 390"},
      { size: "XXL", price: "S/ 460"}
    ]
  },
  {
    id: 5,
    name: "Sofa Nalha",
    price: "S/ 340",
    category: "Sofás",
    image: "sofa_nalha.jpeg",
    description: "Elegancia minimalista que combina con cualquier sala.",
    variants: [
      { size: "L", price: "S/ 340"},
      { size: "XL", price: "S/ 390"},
      { size: "XXL", price: "S/ 460"}
    ]
  },
  {
    id: 6,
    name: "Sofa Valentina",
    price: "S/ 340",
    category: "Sofás",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=800",
    description: "Soporte extra para mascotas mayores o con problemas de movilidad.",
    variants: [
      { size: "L", price: "S/ 340"},
      { size: "XL", price: "S/ 390"},
      { size: "XXL", price: "S/ 460"}
    ]
  }
];
