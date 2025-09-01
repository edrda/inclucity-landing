import React, { useState } from "react"
import { Link } from "gatsby"
import { Icon } from '@iconify/react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault()
    closeMenu()
    
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="w-full bg-secondary shadow-sm fixed top-0 left-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          <Link to="/" onClick={closeMenu} aria-label="Página inicial IncluCity">
            <img
              src="/images/white-logo.svg" 
              alt="Logo IncluCity - Por cidades mais inclusivas"
              width={150}
              height={40}
              className="max-w-[150px] w-full h-auto"
              loading="eager"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 items-center" aria-label="Navegação principal">
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
          <a 
            href="#advantages"
            onClick={(e) => handleSmoothScroll(e, 'advantages')}
            className="menu-item relative text-light font-semibold transition font-medium cursor-pointer"
            aria-label="Saiba mais sobre a IncluCity"
          >
            Sobre
          </a>
          <a 
            href="#plans"
            onClick={(e) => handleSmoothScroll(e, 'plans')}
            className="menu-item relative text-light font-semibold transition font-medium cursor-pointer"
            aria-label="Conheça nossos planos"
          >
            Planos
          </a>
          <a 
            href="#cities"
            onClick={(e) => handleSmoothScroll(e, 'cities')}
            className="menu-item relative text-light font-semibold transition font-medium cursor-pointer"
            aria-label="Explore cidades inclusivas"
          >
            Cidades Inclusivas
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="px-6 py-2 bg-primary text-light font-semibold rounded-full hover:opacity-90 transition cursor-pointer"
            aria-label="Comece a contribuir conosco"
          >
            Comece a Contribuir
          </a>
        </nav>

        <button 
          className="md:hidden text-light focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <Icon 
            icon="material-symbols:menu" 
            width="43" 
            height="43" 
            aria-hidden="true"
          />
        </button>

        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            
            <div 
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-80 bg-secondary shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu mobile"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={closeMenu}
                    className="text-light p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    aria-label="Fechar menu"
                  >
                    <Icon 
                      icon="material-symbols:close" 
                      width="32" 
                      height="32" 
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6" aria-label="Navegação mobile">
                  <a 
                    href="#advantages"
                    onClick={(e) => handleSmoothScroll(e, 'advantages')}
                    className="text-light font-semibold text-lg hover:text-white transition-colors cursor-pointer py-2"
                    aria-label="Saiba mais sobre a IncluCity"
                  >
                    Sobre
                  </a>
                  <a 
                    href="#plans"
                    onClick={(e) => handleSmoothScroll(e, 'plans')}
                    className="text-light font-semibold text-lg hover:text-white transition-colors cursor-pointer py-2"
                    aria-label="Conheça nossos planos"
                  >
                    Planos
                  </a>
                  <a 
                    href="#cities"
                    onClick={(e) => handleSmoothScroll(e, 'cities')}
                    className="text-light font-semibold text-lg hover:text-white transition-colors cursor-pointer py-2"
                    aria-label="Explore cidades inclusivas"
                  >
                    Cidades Inclusivas
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                    className="px-6 py-3 bg-primary text-light font-semibold rounded-full hover:opacity-90 transition text-center mt-4 cursor-pointer"
                    aria-label="Comece a contribuir conosco"
                  >
                    Comece a Contribuir
                  </a>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header