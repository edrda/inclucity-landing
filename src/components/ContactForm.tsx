import React, { useState } from "react"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handlePhoneMask = (value: string) => {
    value = value.replace(/\D/g, "")
    if (value.length > 11) value = value.slice(0, 11)
    if (value.length <= 10) {
      return value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
    } else {
      return value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "whatsapp" ? handlePhoneMask(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/meoleewe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", whatsapp: "", subject: "", message: "" }) // limpa campos
      } else {
        setStatus("error")
      }
// oxlint-disable-next-line no-unused-vars
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-teal-500 text-light py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texto + Imagem */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Entre em contato e faça a diferença
          </h2>
          <p className="mt-4 text-lg text-light/90 max-w-md mx-auto lg:mx-0">
            Com a colaboração de todos, podemos tornar o mundo mais acessível.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <img
              src="/images/app-contact.png"
              alt="Aplicativo IncluCity com mapa acessível"
              className="rounded-3xl border-4 border-primary shadow-lg w-72 md:w-96"
            />
          </div>
        </div>

        {/* Formulário */}
        <div className="flex-1 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-dark rounded-2xl p-8 shadow-md space-y-4"
          >
            {/* Nome */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">
                Seu nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-primary rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu-email@email.com"
                className="w-full border border-primary rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">
                Telefone (Whatsapp)
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="(xx) xxxxx-xxxx"
                className="w-full border border-primary rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Select Assunto */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">
                Assunto
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-primary rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione o assunto</option>
                <option value="pessoas">Planos para pessoas</option>
                <option value="empresas">Planos para empresas</option>
                <option value="suporte">Suporte</option>
                <option value="ouvidoria">Ouvidoria</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-primary rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full bg-primary text-light font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Enviar
            </button>

            {/* Feedback */}
            {status === "success" && (
              <p className="text-green-600 font-medium mt-2">
                ✅ Mensagem enviada com sucesso!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium mt-2">
                ❌ Ocorreu um erro. Tente novamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
