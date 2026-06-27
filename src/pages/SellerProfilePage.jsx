import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ProductGrid from "../components/ProductGrid"

function SellerProfilePage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [seller, setSeller] = useState(null)
  const [sellerProducts, setSellerProducts] = useState([])

  useEffect(() => {
    // Récupère les vendeurs
    const sellers = JSON.parse(localStorage.getItem("sellers")) || []
    const found = sellers.find((s) => s.id === id)
    setSeller(found)

    // Récupère les produits de ce vendeur
    const allProducts = JSON.parse(localStorage.getItem("products")) || []
    const filtered = allProducts.filter((p) => p.sellerId === id)
    setSellerProducts(filtered)
  }, [id])

  const handleWhatsApp = () => {
    const message = `Bonjour ${seller.name}, j'ai vu votre boutique sur GoodCloth !`
    const url = `https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  // Si vendeur pas encore chargé
  if (!seller) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <p className="text-5xl">🔍</p>
        <p className="text-[#6B7280] font-medium">Vendeur introuvable</p>
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
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Bouton retour */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition mb-8 font-medium"
      >
        ← Retour
      </button>

      {/* Header profil vendeur */}
      <div className="bg-[#111827] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 mb-10">

        {/* Photo */}
        <div className="relative">
          <img
            src={seller.photo}
            alt={seller.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-[#F97316]"
          />
          <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></span>
        </div>

        {/* Infos */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-white text-3xl font-black mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {seller.name}
          </h1>
          <p className="text-gray-400 text-sm mb-4">📍 {seller.quartier}</p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8">
            <div className="text-center">
              <p className="text-white font-black text-2xl">{sellerProducts.length}</p>
              <p className="text-gray-400 text-xs">Produits</p>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <p className="text-white font-black text-2xl">{seller.rating} ⭐</p>
              <p className="text-gray-400 text-xs">Note</p>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <p className="text-white font-black text-2xl">{seller.totalProducts}</p>
              <p className="text-gray-400 text-xs">Ventes</p>
            </div>
          </div>
        </div>

        {/* Bouton WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition whitespace-nowrap"
        >
          Contacter via WhatsApp
        </button>

      </div>

      {/* Produits du vendeur */}
      <h2 className="text-2xl font-black text-[#111827] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Produits de {seller.name}
      </h2>

      {sellerProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">📦</p>
          <p className="text-[#6B7280]">Ce vendeur n'a pas encore posté de produits</p>
        </div>
      ) : (
        <ProductGrid products={sellerProducts} />
      )}

    </div>
  )
}

export default SellerProfilePage