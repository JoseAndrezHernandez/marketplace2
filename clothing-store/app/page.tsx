"use client"

import { useState, useMemo } from "react"
import { products } from "@/lib/products"
import { ProductGrid } from "@/components/product-grid"
import { FilterBar } from "@/components/filter-bar"
import { FloatingCart } from "@/components/floating-cart"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])
  const [cartItems, setCartItems] = useState<any[]>([])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      return categoryMatch && priceMatch
    })
  }, [selectedCategory, priceRange])

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 bg-white shadow-sm border-b z-40">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Fashion Marketplace</h1>
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
        </div>
      </header>

      <main className="pb-6">
        <div className="px-4 py-4">
          <p className="text-gray-600 mb-4">{filteredProducts.length} productos encontrados</p>
        </div>
        <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
      </main>

      <FloatingCart items={cartItems} onUpdateCart={setCartItems} />
    </div>
  )
}
