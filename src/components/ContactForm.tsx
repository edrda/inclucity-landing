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
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    setIsSubmitting(true)

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
        setFormData({ name: "", email: "", whatsapp: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section id="contact" className="bg-teal-500 text-light py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center lg:flex-row gap-12">
        {/* Texto + Imagem */}
        <div className="flex-1 text-center items-start max-w-lg lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Entre em contato e faça a diferença
          </h2>
          <p className="mt-4 text-lg text-light/90 max-w-md mx-auto lg:mx-0">
            Com a colaboração de todos, podemos tornar o mundo mais acessível.
          </p>

          <div className="mt-20 flex justify-center lg:justify-start">
            <img
              src="/images/app-contact.png"
              alt="Aplicativo móvel IncluCity mostrando interface de contato com mapa acessível e formulário"
              width={393}
              height={382}
              className="rounded-3xl border-4 border-primary shadow-lg w-72 md:w-96 h-auto"
              loading="lazy"  
            />
          </div>
        </div>

        {/* Formulário */}
        <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
          <form
            onSubmit={handleSubmit}
            className=" bg-white text-dark rounded-2xl p-8 shadow-md space-y-4"
            noValidate
          >
            <fieldset className="flex flex-col gap-4">
              <legend className="sr-only">Formulário de contato IncluCity</legend>
              
              {/* Nome */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1">
                  Seu nome
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full border border-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="seu-email@exemplo.com"
                  className="w-full border border-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-1">
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-primary mb-1">
                  Telefone/WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="(11) 99999-9999"
                  pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
                  className="w-full border border-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              {/* Select Assunto */}
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-1">
                  Assunto do contato
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full border border-primary rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors appearance-none"
                >
                  <option value="">Selecione o assunto</option>
                  <option value="pessoas">Planos para pessoas</option>
                  <option value="empresas">Planos para empresas</option>
                  <option value="suporte">Suporte técnico</option>
                  <option value="ouvidoria">Ouvidoria e sugestões</option>
                  <option value="parceria">Proposta de parceria</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  aria-required="true"
                  placeholder="Digite sua mensagem aqui..."
                  className="w-full border border-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                ></textarea>
              </div>

              {/* Botão */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-light font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isSubmitting ? "Enviando mensagem..." : "Enviar formulário de contato"}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-light mr-2"></span>
                    Enviando...
                  </span>
                ) : (
                  "Enviar mensagem"
                )}
              </button>
            </fieldset>

            {/* Feedback */}
            <div aria-live="polite" className="min-h-[2rem]">
              {status === "success" && (
                <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 text-sm font-medium">
                  ✅ Mensagem enviada com sucesso! Retornaremos em breve.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm font-medium">
                  ❌ Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente por e-mail.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
