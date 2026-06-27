import { useState } from "react"
import { useNavigate } from "react-router-dom"

function PostProductPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "T-shirts",
    image: "",
    seller: "",
    quartier: "",
    whatsapp: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const existing = JSON.parse(localStorage.getItem("products")) || []
    const newProduct = {
      ...form,
      id: "p" + Date.now(),
      price: parseInt(form.price),
      postedAt: new Date().toLocaleDateString("fr-FR")
    }
    localStorage.setItem("products", JSON.stringify([...existing, newProduct]))
    navigate("/")
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-10">

      {/* Bouton retour */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition mb-8 font-medium"
      >
        ← Retour
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-10 bg-[#F97316] rounded-full"></div>
        <div>
          <h1
            className="text-3xl font-black text-[#111827]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Poster un article
          </h1>
          <p className="text-[#6B7280] text-sm mt-0.5">
            Visible immédiatement sur GoodCloth
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Nom */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#111827]">
            Nom du produit
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ex: T-shirt Oversize Noir"
            required
            className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition"
          />
        </div>

        {/* Prix + Catégorie côte à côte */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-bold text-[#111827]">
              Prix (FCFA)
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Ex: 15000"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-bold text-[#111827]">
              Catégorie
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white transition"
            >
              <option>T-shirts</option>
              <option>Pantalons</option>
              <option>Hoodies</option>
              <option>Robes</option>
              <option>Sneakers</option>
              <option>Accessoires</option>
            </select>
          </div>
        </div>

        {/* Import image */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#111827]">
            Photo du produit
          </label>
          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-2xl px-4 py-8 cursor-pointer hover:border-[#F97316] hover:bg-orange-50 transition"
          >
            {form.image ? (
              <img
                src={form.image}
                alt="preview"
                className="w-full h-48 object-cover rounded-xl"
              />
            ) : (
              <>
                <span className="text-4xl">📸</span>
                <p className="text-[#6B7280] text-sm text-center">
                  Clique pour importer une photo <br />
                  <span className="text-xs text-gray-400">JPG, PNG, WEBP — max 5MB</span>
                </p>
              </>
            )}
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0]
              if (!file) return
              const reader = new FileReader()
              reader.onloadend = () => {
                setForm({ ...form, image: reader.result })
              }
              reader.readAsDataURL(file)
            }}
          />
          {form.image && (
            <button
              type="button"
              onClick={() => setForm({ ...form, image: "" })}
              className="text-xs text-[#6B7280] hover:text-red-500 transition text-center"
            >
              ✕ Changer la photo
            </button>
          )}
        </div>

        {/* Nom boutique + Quartier côte à côte */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-bold text-[#111827]">
              Nom de ta boutique
            </label>
            <input
              type="text"
              name="seller"
              value={form.seller}
              onChange={handleChange}
              placeholder="Ex: Mama Grâce"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-bold text-[#111827]">
              Quartier
            </label>
            <input
              type="text"
              name="quartier"
              value={form.quartier}
              onChange={handleChange}
              placeholder="Ex: Mokolo"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition"
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#111827]">
            Numéro WhatsApp
          </label>
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#F97316] transition">
            <span className="bg-gray-50 px-4 py-3 text-sm text-[#6B7280] border-r border-gray-200">
              🇨🇲 +237
            </span>
            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="691234567"
              required
              className="flex-1 px-4 py-3 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Bouton publier */}
        <button
          type="submit"
          className="w-full bg-[#F97316] text-white py-4 rounded-full font-black text-base hover:bg-orange-500 transition shadow-lg shadow-orange-200 mt-2"
        >
          Publier mon article 🚀
        </button>

      </form>
    </div>
  )
}

export default PostProductPage