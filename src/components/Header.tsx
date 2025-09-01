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
          <style> 
            {` 
              .menu-item { 
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 150ms; 
              } 
              .menu-item:hover {
                color: #fff;
              }
              .menu-item:hover::after {
                  transform-origin: 0% 50%;
                  content: "";
                  transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
              }
              .menu-item:after {
                position: absolute;
                top: calc(100% + 0.20rem);
                left: 0px;
                height: 1px;
                width: 100%;
                transform-origin: 100% 50%;
                transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(0) scaleY(1);
                background-color: rgb(255 255 255 / 1);
                transition-property: transform;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                content: "";
                transition-duration: 300ms;
              }
            `} 
          </style>
          <Link to="#advantages" className="menu-item relative text-light font-semibold transition font-medium">
            Sobre
          </Link>
          <Link to="#plans" className="menu-item relative text-light font-semibold transition font-medium">
            Planos
          </Link>
          <Link to="#cities" className="menu-item relative text-light font-semibold transition font-medium">
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