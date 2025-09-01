import React from "react"
import { Icon } from "@iconify/react"

const advantages = [
  {
    title: "Mapa Interativo",
    description: "Mapa com locais públicos e privados, onde qualquer usuário pode adicionar informações.",
    icon: "solar:streets-map-point-outline",
    ariaLabel: "Ícone de mapa interativo"
  },
  {
    title: "Encontre seu Caminho",
    description: "Filtros por tipo de estabelecimento (escolas, restaurantes, universidades…).",
    icon: "material-symbols:search-rounded",
    ariaLabel: "Ícone de busca"
  },
  {
    title: "Informação na Mão",
    description: "Detalhes como rampas de acesso, banheiros adaptados, elevadores e sinalização.",
    icon: "material-symbols:accessible-rounded",
    ariaLabel: "Ícone de acessibilidade"
  },
  {
    title: "Conecte-se",
    description: "Crie uma comunidade de usuários que compartilham fotos e dicas.",
    icon: "fluent:people-community-32-regular",
    ariaLabel: "Ícone de comunidade"
  }
]

const Advantages: React.FC = () => {
  return (
    <section 
      id="advantages" 
      className="py-20 bg-light text-dark"
      aria-labelledby="advantages-heading"
    >
      <div className="flex flex-col items-center max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="advantages-heading" className="text-3xl md:text-4xl font-extrabold text-primary">
            Seja a Mudança
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Descubra como nossa plataforma torna as cidades mais acessíveis para todos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {advantages.map((item, index) => (
            <article
              key={index}
              className="bg-secondary bg-opacity-10 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 min-h-[280px]"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-4">
                <Icon
                  icon={item.icon}
                  className="text-primary text-3xl"
                  aria-label={item.ariaLabel}
                  role="img"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages