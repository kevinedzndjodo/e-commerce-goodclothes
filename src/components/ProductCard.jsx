import { useNavigate } from "react-router-dom"

function ProductCard({ product }) {
  const navigate = useNavigate()

  const handleWhatsApp = () => {
    const message = `Bonjour, je suis intéressé(e) par votre article : ${product.name} à ${product.price.toLocaleString()} FCFA`
    const url = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Badge catégorie */}
        <span className="absolute top-3 left-3 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Infos */}
      <div className="p-4 flex flex-col gap-2">

        {/* Nom */}
        <h3
          className="font-bold text-[#111827] text-base leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {product.name}
        </h3>

        {/* Prix */}
        <p className="text-[#F97316] font-black text-xl">
          {product.price.toLocaleString()} FCFA
        </p>

        {/* Vendeur */}
        <p className="text-[#6B7280] text-xs">
          🏪 {product.seller} • {product.quartier}
        </p>

        {/* Séparateur */}
        <div className="w-full h-px bg-gray-100 my-1"></div>

        {/* Bouton WhatsApp */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleWhatsApp()
          }}
          className="w-full border-2 border-[#111827] text-[#111827] py-2 rounded-full text-sm font-bold hover:bg-[#F97316] hover:border-[#F97316] hover:text-white transition duration-300"
        >
          Contacter via WhatsApp 💬
        </button>

      </div>
    </div>
  )
}

export default ProductCard