# 🌍 IncluCity

IncluCity é uma landing page fictícia criada como desafio técnico para o processo seletivo da **Hubs**.  
O objetivo é apresentar a ideia de um aplicativo voltado para mapear a **acessibilidade de cidades e estabelecimentos**, permitindo que usuários colaborem e compartilhem informações sobre rampas, banheiros adaptados, sinalização e muito mais.

A proposta é mostrar criatividade, boas práticas de desenvolvimento front-end, performance, SEO e integração com APIs GraphQL.

---

## 🚀 Tecnologias utilizadas
- [Gatsby](https://www.gatsbyjs.com/) (v5) – framework baseado em React com foco em performance e SEO  
- [React](https://react.dev/) (v18) – biblioteca para construção de interfaces  
- [TailwindCSS](https://tailwindcss.com/) – estilização responsiva e produtiva  
- [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) – processamento de CSS  
- [Formspree](https://formspree.io/) – integração para envio do formulário de contato  
- [GraphQL API pública](https://github.com/trevorblades/countries) – consumida para exibir a seção extra **“Cidades Inclusivas”** (ranking demonstrativo)  

---

## 📂 Estrutura do projeto
```
inclucity-landing/
├─ src/
│ ├─ components/ # Componentes reutilizáveis (Hero, Plans, Footer, etc.)
│ ├─ pages/ # Página principal (index.tsx)
│ ├─ styles/ # Estilos globais (Tailwind)
│ └─ ...
├─ gatsby-config.js # Configurações do Gatsby
├─ postcss.config.js # Configuração do PostCSS
├─ tailwind.config.js # Configuração do Tailwind
└─ package.json
```


---

## 🛠️ Como rodar o projeto localmente

### Pré-requisitos
- Node.js (v18 ou superior recomendado)  
- npm ou yarn  

### Passos
```bash
# Clonar o repositório
git clone https://github.com/edrda/inclucity-landing.git

# Entrar na pasta
cd inclucity-landing

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run develop

# O servidor estará disponível em:
http://localhost:8000

---

##🌟 Funcionalidades da landing page

### Hero Section: apresentação do app IncluCity

### Vantagens: Sobre e destaques do app

### Planos: planos fictícios (Free, Premium e Empresas)

### Cidades Inclusivas: integração com GraphQL para listar cidades e exibir ranking fictício (em desenvolvimento)

### Formulário de Contato: com campos validados e integração Formspree

### Footer: slogan e links sociais

---

## 📈 Boas práticas aplicadas

### SEO: uso de tags semânticas, títulos, meta descriptions

### Performance: imagens otimizadas, build do Gatsby

### Acessibilidade: contraste de cores, labels nos formulários, navegação por teclado

### Responsividade: layout adaptado para desktop e mobile

---

## 🖼️ Protótipo

O design da landing page foi criado previamente em Figma (versões desktop e mobile).


## 📜 Licença

Este projeto é de uso demonstrativo.

---

## 💡 IncluCity – Por cidades mais inclusivas.
