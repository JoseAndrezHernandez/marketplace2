export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  sizes: string[]
  colors: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Camiseta Básica Blanca",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Camiseta básica de algodón 100% en color blanco. Perfecta para el día a día, cómoda y versátil. Corte regular que se adapta a cualquier ocasión.",
    category: "camisetas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"],
  },
  {
    id: "2",
    name: "Jeans Slim Fit",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Jeans de corte slim fit en denim de alta calidad. Diseño moderno y cómodo que estiliza la figura. Perfecto para looks casuales y semi-formales.",
    category: "pantalones",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Azul", "Negro", "Gris"],
  },
  {
    id: "3",
    name: "Sudadera con Capucha",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Sudadera con capucha en algodón suave. Ideal para días frescos, con bolsillo frontal tipo canguro y cordones ajustables.",
    category: "sudaderas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gris", "Negro", "Azul marino"],
  },
  {
    id: "4",
    name: "Vestido Floral",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Vestido midi con estampado floral. Perfecto para ocasiones especiales o salidas casuales. Tela ligera y cómoda con corte favorecedor.",
    category: "vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral azul", "Floral rosa", "Floral verde"],
  },
  {
    id: "5",
    name: "Chaqueta Denim",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Chaqueta clásica de denim con corte moderno. Un básico atemporal que combina con cualquier outfit. Bolsillos funcionales y botones metálicos.",
    category: "chaquetas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul claro", "Azul oscuro", "Negro"],
  },
  {
    id: "6",
    name: "Falda Plisada",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Falda plisada de longitud midi. Elegante y versátil, perfecta para looks formales y casuales. Tela de alta calidad con caída perfecta.",
    category: "faldas",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Azul marino", "Beige"],
  },
]

export const categories = [
  { id: "camisetas", name: "Camisetas", icon: "👕" },
  { id: "pantalones", name: "Pantalones", icon: "👖" },
  { id: "vestidos", name: "Vestidos", icon: "👗" },
  { id: "sudaderas", name: "Sudaderas", icon: "🧥" },
  { id: "chaquetas", name: "Chaquetas", icon: "🧥" },
  { id: "faldas", name: "Faldas", icon: "👗" },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
