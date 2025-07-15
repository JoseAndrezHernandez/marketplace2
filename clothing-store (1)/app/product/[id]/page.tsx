"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const product = getProductById(params.id as string)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Producto no encontrado</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b z-40">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="p-2 -ml-2">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-semibold">Detalle del Producto</h1>
          <button className="p-2 -mr-2">
            <Heart className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main>
        <div className="aspect-square relative">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>

        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-2xl font-bold text-gray-900 flex-1">{product.name}</h1>
              <div className="flex items-center gap-1 ml-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">4.5</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 capitalize mt-1">{product.category}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Tallas</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Colores</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                    selectedColor === color
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="sticky bottom-0 bg-white pt-4 border-t">
            <Button className="w-full h-12 text-lg font-semibold">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Añadir al Carrito
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
