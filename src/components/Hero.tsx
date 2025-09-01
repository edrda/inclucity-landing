import React from "react"
import { Icon } from '@iconify/react'

const Hero: React.FC = () => {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section
      id="hero"
      className="bg-secondary text-light pt-32 pb-20 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-extrabold leading-tight">
            IncluCity: <span className="font-medium">Descubra locais <span className="italic">acessíveis</span>. Construa cidades mais <span className="italic">inclusivas</span>.</span>
          </h1>
          <p className="mt-6 text-lg text-light max-w-lg mx-auto md:mx-0">
            Com a colaboração de todos, podemos tornar o mundo mais acessível.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleSmoothScroll('contact')}
              className="px-6 py-3 bg-primary text-light font-semibold rounded-full shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
              aria-label="Comece a contribuir para cidades mais inclusivas"
            >
              Comece a contribuir
            </button>
            <button
              onClick={() => handleSmoothScroll('advantages')}
              className="px-6 py-3 border border-light text-light font-semibold rounded-full hover:bg-light hover:text-secondary transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
              aria-label="Conheça mais sobre a IncluCity"
            >
              <Icon 
                icon="si:left-down-duotone" 
                className="w-5 h-5 mr-2" 
                aria-hidden="true"
              />
              Conheça mais
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-end mt-8 md:mt-0 relative z-10">
          <img
            src="/images/app.png"
            alt="Aplicativo móvel IncluCity mostrando mapa acessível com recursos de inclusão"
            width={600}
            height={500}
            className="hero-img w-full max-w-lg h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero