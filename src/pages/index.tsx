import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Advantages from "../components/Advantages"
import Plans from "../components/Plans"
import Cities from "../components/Cities"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-light text-dark">
      <Header />
      <Hero />
      <Advantages />
      <Plans />
      <Cities />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>IncluCity – Por cidades mais inclusivas</title>
    <meta
      name="description"
      content="IncluCity é um app que conecta pessoas a locais acessíveis. Descubra, avalie e compartilhe informações sobre a acessibilidade da sua cidade."
    />
  </>
)
