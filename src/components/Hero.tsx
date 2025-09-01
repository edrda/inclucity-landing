import React from "react"
import { Link } from "gatsby"
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-secondary text-light pt-32 pb-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            IncluCity: Descubra locais acessíveis. Construa cidades mais inclusivas.
          </h1>
          <p className="mt-6 text-lg text-light max-w-lg mx-auto md:mx-0">
            Com a colaboração de todos, podemos tornar o mundo mais acessível.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="#contact"
              className="px-6 py-3 bg-primary text-light font-semibold rounded-full shadow-md hover:opacity-90 transition"
            >
              Comece a contribuir
            </Link>
            <Link
              to="#advantages"
              className="px-6 py-3 border border-light text-light font-semibold rounded-full hover:bg-light hover:text-secondary transition flex items-center justify-center"
            >
              <Icon 
                icon="si:left-down-duotone" 
                className="w-5 h-5 mr-2" 
              />
              Conheça mais
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-end mt-8 md:mt-0 relative z-10">
          <img
            src="/images/app.png"
            alt="Ilustração de celular com o app IncluCity"
            className="hero-img w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero