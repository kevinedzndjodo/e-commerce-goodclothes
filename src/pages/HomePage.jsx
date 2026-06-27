import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SellerCard from "../components/SellerCard";

const allSellers = [
  {
    id: "s001",
    name: "Emmanuel T.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    quartier: "Mokolo",
    whatsapp: "237691234567",
    totalProducts: 12,
    rating: 4.8,
  },
  {
    id: "s002",
    name: "Mama Grâce",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200",
    quartier: "Biyem-Assi",
    whatsapp: "237699876543",
    totalProducts: 8,
    rating: 4.6,
  },
  {
    id: "s003",
    name: "Clarisse Mode",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    quartier: "Melen",
    whatsapp: "237655443322",
    totalProducts: 20,
    rating: 4.9,
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setAllProducts(stored);
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "Tous" || product.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
      {/* Hero Banner */}
      <div className="relative bg-[#111827] rounded-3xl mb-10 overflow-hidden min-h-[420px] flex items-center p4">
        {/* Image fond */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200"
            alt="GoodCloth Hero"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent"></div>
        </div>

        {/* Cercles décoratifs */}
        <div className="absolute top-[-40px] right-[-40px] w-72 h-72 bg-[#F97316] opacity-10 rounded-full"></div>
        <div className="absolute bottom-[-60px] right-[200px] w-96 h-96 bg-[#F97316] opacity-5 rounded-full"></div>

        {/* Contenu */}
        <div className="relative z-10 px-10 py-14 flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* Texte gauche */}
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              🔥 Nouvelle Collection 2026
            </span>
            <h1
              className="text-white text-5xl md:text-6xl font-black leading-tight mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Affirme ton <br />
              style à <span className="text-[#F97316]">Yaoundé.</span>
            </h1>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              Les meilleurs vendeurs de Mokolo, maintenant en ligne.
              <br />
              Mode, style, livraison rapide dans tout Yaoundé.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate("/")}
                className="bg-[#F97316] text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-500 transition shadow-lg shadow-orange-500/30"
              >
                Découvrir 👟
              </button>
              <button
                onClick={() => navigate("/post")}
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:border-[#F97316] hover:text-[#F97316] transition"
              >
                Vendre mes articles
              </button>
            </div>
          </div>

          {/* Stats flottantes */}
          <div className="flex flex-col gap-4 min-w-[160px]">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-white font-black text-3xl">500+</p>
              <p className="text-gray-400 text-xs mt-1">Produits en ligne</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-[#F97316] font-black text-3xl">200+</p>
              <p className="text-gray-400 text-xs mt-1">Vendeurs actifs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-white font-black text-3xl">4.9 ⭐</p>
              <p className="text-gray-400 text-xs mt-1">Note moyenne</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section recherche + filtres */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-6 mb-10">
        {/* Titre section */}
        <p className="text-center text-[#6B7280] text-sm font-medium mb-4">
          🛍️ Que recherches-tu aujourd'hui ?
        </p>

        {/* Recherche */}
        <div className="mb-5">
          <SearchBar onSearch={setSearch} />
        </div>

        {/* Filtres catégories */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Produits */}
      {/* Header section produits */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* Trait orange */}
          <div className="w-1 h-8 bg-[#F97316] rounded-full"></div>
          <div>
            <h2
              className="text-2xl font-black text-[#111827]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {activeCategory === "Tous"
                ? "Tendances du moment"
                : activeCategory}
            </h2>
            <p className="text-[#6B7280] text-xs mt-0.5">
              {filteredProducts.length} article
              {filteredProducts.length > 1 ? "s" : ""} disponible
              {filteredProducts.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Filtre tri */}
        <select className="text-sm border border-gray-200 rounded-full px-4 py-2 text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white">
          <option>Plus récents</option>
          <option>Prix croissant</option>
          <option>Prix décroissant</option>
        </select>
      </div>
      <ProductGrid products={filteredProducts} />

      {/* Header section vendeurs */}
      <div className="flex items-center gap-3 mt-16 mb-6">
        <div className="w-1 h-8 bg-[#F97316] rounded-full"></div>
        <div>
          <h2
            className="text-2xl font-black text-[#111827]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Nos Vendeurs
          </h2>
          <p className="text-[#6B7280] text-xs mt-0.5">
            Les boutiques les mieux notées de Yaoundé ⭐
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allSellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
