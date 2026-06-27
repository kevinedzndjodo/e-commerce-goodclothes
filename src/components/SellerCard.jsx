import { useNavigate } from "react-router-dom"

function SellerCard({ seller }) {
  const navigate = useNavigate()

  const handleWhatsApp = () => {
    const message = `Bonjour ${seller.name}, j'ai vu votre boutique sur GoodCloth !`
    const url = `https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div
      onClick={() => navigate(`/seller/${seller.id}`)}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Photo */}
      <div className="relative mb-4">
        <img
          src={seller.photo}
          alt={seller.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-[#F97316]"
        />
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
      </div>

      {/* Nom */}
      <h3
        className="font-black text-[#111827] text-lg"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {seller.name}
      </h3>

      {/* Quartier */}
      <p className="text-[#6B7280] text-sm mt-1 mb-4">
        📍 {seller.quartier}
      </p>

      {/* Stats */}
      <div className="flex gap-6 mb-5 w-full justify-center border-y border-gray-100 py-4">
        <div className="flex flex-col items-center">
          <span className="font-black text-[#111827] text-xl">{seller.totalProducts}</span>
          <span className="text-[#6B7280] text-xs mt-0.5">Produits</span>
        </div>
        <div className="w-px bg-gray-200"></div>
        <div className="flex flex-col items-center">
          <span className="font-black text-[#F97316] text-xl">{seller.rating}</span>
          <span className="text-[#6B7280] text-xs mt-0.5">Note ⭐</span>
        </div>
      </div>

      {/* Bouton */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleWhatsApp()
        }}
        className="w-full border-2 border-[#111827] text-[#111827] py-2.5 rounded-full text-sm font-bold hover:bg-[#F97316] hover:border-[#F97316] hover:text-white transition duration-300"
      >
        Contacter 💬
      </button>
    </div>
  )
}

export default SellerCard