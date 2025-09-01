import React, { useState } from "react"
import { useQuery, gql } from "@apollo/client";

const GET_CITIES = gql`
  query GetCities($search: String) {
    cities(
      where: { name_contains: $search }
      orderBy: score_DESC
      first: 10
    ) {
      id
      name
      country
      score
      slug
      imageUrl {
        url
      }
    }
  }
`

const Cities: React.FC = () => {
  const [search, setSearch] = useState("")
  const { data, loading, error } = useQuery(GET_CITIES, {
    variables: { search },
  })

  if (error) {
    console.error("Erro na query:", error)
  }

  return (
    <section id="cities" className="py-20 bg-light text-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Cidades Inclusivas
          </h2>
          <p className="mt-2 text-gray-600">
            Descubra o ranking de cidades mais acessíveis do mundo.
          </p>
        </div>

        {/* Input de busca */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Buscar cidade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Resultado */}
        {loading && <p className="text-center">Carregando...</p>}
        {error && <p className="text-center text-red-500">Erro ao carregar.</p>}

        <div className="flex flex-wrap gap-6 justify-center">
          {data?.cities?.map((city: any) => (
            <div
              key={city.id}
              className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[calc(50%-12px)] md:w-[calc(33%-16px)] lg:w-[calc(25%-18px)]"
            >
              {city.imageUrl?.url && (
                <img
                  src={city.imageUrl.url}
                  alt={city.name}
                  className="rounded-lg mb-4 h-40 w-full object-cover"
                />
              )}
              <h3 className="text-xl font-bold text-primary">{city.name}</h3>
              <p className="text-sm text-gray-600">{city.country}</p>
              <p className="mt-2 font-semibold text-secondary">
                Score de Inclusão: {city.score ?? "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cities
