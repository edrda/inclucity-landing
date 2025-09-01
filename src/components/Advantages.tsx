import React from "react"
import { Icon } from "@iconify/react"

const advantages = [
  {
    title: "Mapa Interativo",
    description:
      "Mapa com locais públicos e privados, onde qualquer usuário pode adicionar informações.",
    icon: "solar:streets-map-point-outline",
  },
  {
    title: "Encontre seu Caminho",
    description:
      "Filtros por tipo de estabelecimento (escolas, restaurantes, universidades…).",
    icon: "material-symbols:search-rounded",
  },
  {
    title: "Informação na Mão",
    description:
      "Detalhes como rampas de acesso, banheiros adaptados, elevadores e sinalização.",
    icon: "material-symbols:accessible-rounded",
  },
  {
    title: "Conecte-se",
    description:
      "Crie uma comunidade de usuários que compartilham fotos e dicas.",
    icon: "fluent:people-community-32-regular",
  },
]

const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-20 bg-light text-dark">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Seja a Mudança
          </h2>
        </div>

        <div className="flex flex-col max-w-5x1 md:flex-row md:flex-wrap gap-10 justify-center items-stretch">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] adv-card max-w-sm bg-secondary bg-opacity-10 rounded-xl shadow-md p-6 flex flex-col items-center place-content-around text-center hover:shadow-xl transition"
            >
               <style> 
                {` 
                    .adv-card { 
                      min-height: 250px; 
                    } 
                `} 
            </style>
              <Icon
                icon={item.icon}
                className="text-primary text-5xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
