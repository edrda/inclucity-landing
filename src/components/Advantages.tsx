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
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Seja a Mudança
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
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
