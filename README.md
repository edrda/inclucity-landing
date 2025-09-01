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
- [Apollo Client](https://www.apollographql.com/docs/react/) – consumo de API GraphQL  
- [Hygraph](https://hygraph.com/) – CMS headless usado para gerenciar dados da seção **“Cidades Inclusivas”**

---

## 📂 Estrutura do projeto

```
inclucity-landing/
├─ src/
│ ├─ components/ # Componentes reutilizáveis (Hero, Plans, Footer, Cities, etc.)
│ ├─ pages/ # Página principal (index.tsx)
│ ├─ styles/ # Estilos globais (Tailwind)
│ └─ ...
├─ static/
| ├─ images/ #Imagens e Icones estáticos do projeto
├─ gatsby-config.js # Configurações do Gatsby
├─ gatsby-browser.js # Configuração ApolloProvider + estilos globais
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

# Criar um arquivo .env com suas credenciais do Hygraph
```
GATSBY_GQL_ENDPOINT=https://api-eu-west-2.hygraph.com/v2/xxxxxx/master
GATSBY_GQL_TOKEN=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NTY3NDI2MjYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21leWI4NTMwMDV0ZjA3djNjNGlzNW41dy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiMTU5ZjEzODMtNGVmMC00ZjhiLWE4ZDEtOWE4YTVjNWI4NjdkIiwianRpIjoiY21mMWI3OXpsMDV0aDA3bWxmcGx6NjMyZiJ9.wfiwwxzjW2cIa8fk_SbjG8KOmOsWwidHCaW8KLA5ngsBUVWZCjmZ_xLazfNPl4x5_Ill3xeUJfOoJn6H-zSJdBTodh53cgswUTBBBipxfyTQyg-xXnuc3HLA_jVvpfSXyC96ZQtRVBR03ncIdxz7I3B1qfc0q9EFGX-H3LDp-ODw3_oG1X3eXT_sjfRiseiPEN1dW4B8XZPBFxQ1Q7Gznd1jEQA-UEgas6FyPZ-NxoIq92lMAF-g3Y0OK8S8b4DhEzp9SO_0SG0AS2hAS8Q3rPIbtWidqqoBYSVx2wOzov_JlehcnlXErjMarbA-Iba0_MRPNORsSlcvrZDCxXiMKQ_hMaQlw4EguG251LniEct2I_tbYJM7e2v8yNmtFJnBey1Srh1vKz_kdCnZW9Z07wQNDA5WC5RZXVDx99UjHSQxz_u1WCExUT64eHGwFEfR9g1xiQTU2xOWDQTWqzpNpSC_SGmeuXTPSLa0Bx9ijvxniE5PuANp-_Lmcz7fD6Zte1ZlnfCFYijBioLbtEeCoUxhyvjycVl2T3tRPOSl4BnnwP4pgKLxbKwXpe8DRUN3OKXEnazNpELCrLwUq97rXyA_TVb3wbzr05Z6haranHXGuRAPCJAwXDnEdDJ2rOducm90dvf_FSDYfWkfOriDSFbvNOOQNeagYm1I6MXY43M
```

# Rodar em ambiente de desenvolvimento
npm run develop

# O servidor estará disponível em:
http://localhost:8000


---

##🌟 Funcionalidades da landing page

### Hero Section: apresentação do app IncluCity

### Vantagens: Sobre e destaques do app

### Planos: planos fictícios (Free, Premium e Empresas)

### Cidades Inclusivas: integração com Hygraph via Apollo Client. Busca dinâmica por cidades e exibição de ranking fictício com imagens e score de acessibilidade.

### Formulário de Contato: com campos validados e integração Formspree, além de mensagens de feedback (sucesso, erro, envio) e limpeza dos campos após envio bem-sucedido

### Footer: slogan, direitos autorais e links sociais.

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
