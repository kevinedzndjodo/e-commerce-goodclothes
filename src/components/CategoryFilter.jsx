const categories = [
  { label: "Tous", icon: "✨" },
  { label: "T-shirts", icon: "👕" },
  { label: "Pantalons", icon: "👖" },
  { label: "Hoodies", icon: "🧥" },
  { label: "Robes", icon: "👗" },
  { label: "Sneakers", icon: "👟" },
  { label: "Accessoires", icon: "👜" },
]

function CategoryFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.label}
          onClick={() => onSelectCategory(cat.label)}
          className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition duration-300
            ${activeCategory === cat.label
              ? "bg-[#F97316] text-white shadow-md shadow-orange-200"
              : "bg-gray-100 text-[#111827] hover:bg-orange-50 hover:text-[#F97316]"
            }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter