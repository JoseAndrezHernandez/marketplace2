"use client"

import { useState } from "react"
import { ChevronDown, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/products"

interface FilterBarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  priceRange: [number, number]
  onPriceChange: (range: [number, number]) => void
}

export function FilterBar({ selectedCategory, onCategoryChange, priceRange, onPriceChange }: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false)

  const priceRanges = [
    { label: "Todos los precios", value: [0, 200] as [number, number] },
    { label: "Menos de $30", value: [0, 30] as [number, number] },
    { label: "$30 - $60", value: [30, 60] as [number, number] },
    { label: "$60 - $100", value: [60, 100] as [number, number] },
    { label: "Más de $100", value: [100, 200] as [number, number] },
  ]

  return (
    <div className="space-y-3">
      {/* Quick Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filtros
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </Button>

        {(selectedCategory !== "all" || priceRange[0] !== 0 || priceRange[1] !== 200) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onCategoryChange("all")
              onPriceChange([0, 200])
            }}
            className="text-red-600 hover:text-red-700"
          >
            <X className="h-4 w-4 mr-1" />
            Limpiar
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Rango de Precio</h3>
            <div className="grid grid-cols-2 gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => onPriceChange(range.value)}
                  className={`p-2 text-sm rounded-md border transition-colors ${
                    priceRange[0] === range.value[0] && priceRange[1] === range.value[1]
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
