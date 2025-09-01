import React, { useState, useEffect } from "react"
import { useQuery, gql } from "@apollo/client"
import { Icon } from "@iconify/react"

const GET_CITIES = gql`
  query GetCities($search: String, $first: Int, $skip: Int) {
    cities(
      where: { name_contains: $search }
      orderBy: score_DESC
      first: $first
      skip: $skip
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
    citiesConnection(where: { name_contains: $search }) {
      aggregate {
        count
      }
    }
  }
`

const CITIES_PER_PAGE = 6

// wrapper para evitar SSR
const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])
  if (!isClient) return <p className="text-center">Carregando...</p>
  return <>{children}</>
}

const Cities: React.FC = () => {
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

        {/* só roda o conteúdo Apollo no client */}
        <ClientOnly>
          <CitiesContent />
        </ClientOnly>
      </div>
    </section>
  )
}

const CitiesContent: React.FC = () => {
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading, error } = useQuery(GET_CITIES, {
    variables: {
      search,
      first: CITIES_PER_PAGE,
      skip: (currentPage - 1) * CITIES_PER_PAGE,
    },
  })

  const totalCities = data?.citiesConnection?.aggregate?.count || 0
  const totalPages = Math.ceil(totalCities / CITIES_PER_PAGE)
  const currentCities = data?.cities || []

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (loading) return <p className="text-center">Carregando cidades...</p>
  if (error) return <p className="text-center text-red-500">Erro ao carregar cidades.</p>

  return (
    <>
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Buscar cidade..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {!loading && !error && currentCities.length === 0 && (
        <div className="text-center">
          <p className="text-lg text-gray-600">Nenhuma cidade encontrada.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {currentCities.map((city: any) => (
          <div
            key={city.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {city.imageUrl?.url && (
              <img
                src={city.imageUrl.url}
                alt={city.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{city.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{city.country}</p>
              <p className="font-semibold text-secondary">
                Score de Inclusão: {city.score ?? "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-md disabled:opacity-50 hover:bg-primary-dark transition-colors"
          >
            <Icon icon="si:chevron-left-fill" className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-10 h-10 rounded-md ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-md disabled:opacity-50 hover:bg-primary-dark transition-colors"
          >
            <Icon icon="si:chevron-right-fill" className="w-5 h-5" />
          </button>
        </div>
      )}

      {totalCities > 0 && (
        <div className="text-center mt-4 text-gray-600">
          Mostrando {(currentPage - 1) * CITIES_PER_PAGE + 1} -{" "}
          {Math.min(currentPage * CITIES_PER_PAGE, totalCities)} de {totalCities} cidades
        </div>
      )}
    </>
  )
}

export default Cities
