import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-[#111827] text-white px-6 py-4">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            GOOD
          </span>
          <span className="text-2xl font-black text-[#F97316]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            CLOTH
          </span>
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-[#F97316] transition">Accueil</Link>
          <Link to="/explorer" className="hover:text-[#F97316] transition">Explorer</Link>
          <Link to="/post" className="bg-[#F97316] text-white px-5 py-2 rounded-full font-bold hover:bg-orange-500 transition">
            + Vendre
          </Link>
        </div>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-sm font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#F97316]">Accueil</Link>
          <Link to="/explorer" onClick={() => setMenuOpen(false)} className="hover:text-[#F97316]">Explorer</Link>
          <Link to="/post" onClick={() => setMenuOpen(false)} className="bg-[#F97316] text-white px-4 py-2 rounded-full font-bold text-center">
            + Vendre
          </Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar