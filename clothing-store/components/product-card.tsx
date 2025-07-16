"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white">
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 capitalize">{product.category}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/product/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full text-sm bg-transparent">
              Ver Detalles
            </Button>
          </Link>
          <Button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart?.(product)
            }}
            className="px-3"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
