import ProductCard from "./ProductCard"

function ProductGrid({ products }) {
  // Si aucun produit trouvé
if (products.length === 0) {
  return (
    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
      <p className="text-5xl mb-4">👗</p>
      <p className="text-[#111827] font-black text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Aucun article pour l'instant
      </p>
      <p className="text-[#6B7280] text-sm mb-6">
        Sois le premier à poster un article sur GoodCloth !
      </p>
    </div>
  )
}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid