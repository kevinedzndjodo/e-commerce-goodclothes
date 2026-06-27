import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("products")) || []
    const found = allProducts.find((p) => p.id === id)
    setProduct(found)
  }, [id])

  const handleWhatsApp = () => {
    const message = `Bonjour, je suis intéressé(e) par votre article : ${product.name} à ${product.price.toLocaleString()} FCFA`
    const url = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <p className="text-5xl">🔍</p>
        <p className="text-[#6B7280] font-medium">Produit introuvable</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#F97316] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-500 transition"
        >
          Retour à l'accueil
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* Bouton retour */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition mb-8 font-medium"
      >
        ← Retour
      </button>

      {/* Contenu */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Image */}
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Infos */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Badge */}
          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-bold px-4 py-1 rounded-full w-fit border border-[#F97316]/20">
            {product.category}
          </span>

          {/* Nom */}
          <h1
            className="text-3xl font-black text-[#111827] leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {product.name}
          </h1>

          {/* Prix */}
          <p className="text-[#F97316] font-black text-4xl">
            {product.price.toLocaleString()} FCFA
          </p>

          {/* Séparateur */}
          <div className="w-full h-px bg-gray-100"></div>

          {/* Vendeur */}
          <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
            <div className="w-10 h-10 bg-[#111827] rounded-full flex items-center justify-center text-white font-black text-sm">
              {product.seller.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-[#111827] text-sm">{product.seller}</p>
              <p className="text-[#6B7280] text-xs">📍 {product.quartier}</p>
            </div>
          </div>

          {/* Date */}
          <p className="text-[#6B7280] text-xs">
            🕐 Publié le {product.postedAt}
          </p>

          {/* Boutons */}
          <div className="flex flex-col gap-3 mt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#F97316] text-white py-4 rounded-full font-black text-base hover:bg-orange-500 transition shadow-lg shadow-orange-200"
            >
              Commander via WhatsApp 🛍️
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full border-2 border-gray-200 text-[#6B7280] py-4 rounded-full font-bold text-base hover:border-[#F97316] hover:text-[#F97316] transition"
            >
              Voir d'autres articles
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage