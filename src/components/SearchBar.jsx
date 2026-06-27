function SearchBar({ onSearch }) {
  return (
    <div className="relative w-full max-w-xl mx-auto">

      {/* Icône loupe */}

      {/* Input */}
      <input
        type="text"
        placeholder="Rechercher un article, une marque..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-[#111827] text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition"
      />

    </div>
  )
}

export default SearchBar