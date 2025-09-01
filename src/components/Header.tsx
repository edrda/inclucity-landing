import React from "react"
import { Link } from "gatsby"

const Header: React.FC = () => {
  return (
    <header className="w-full bg-secondary shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img
              src="/images/white-logo.svg" 
              alt="Logo IncluCity"
              className="max-w-[150px] w-full"
            />
          </Link>
        </div>

        {/* Navigation and CTA */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="#advantages" className="text-light hover:underline transition font-medium">
            Sobre
          </Link>
          <Link to="#plans" className="text-light hover:underline transition font-medium">
            Planos
          </Link>
          <Link to="#cities" className="text-light hover:underline transition font-medium">
            Cidades Inclusivas
          </Link>
          <Link
            to="#contact"
            className="px-6 py-2 bg-primary text-light font-semibold rounded-full hover:opacity-90 transition"
          >
            Comece a Contribuir
          </Link>
        </nav>

        {/* Mobile Menu (hamburger placeholder) */}
        <button className="md:hidden text-light focus:outline-none">
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header