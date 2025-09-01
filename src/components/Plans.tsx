import React from "react";
import { Icon } from "@iconify/react";

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-primary text-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Planos</h2>
          <p className="max-w-3xl mx-auto text-light/90 text-lg leading-relaxed">
            Oferecemos planos gratuitos e premium para usuários que querem
            aproveitar nosso app, além de um plano exclusivo para empresas que
            querem se destacar e tornar a cidade um lugar mais{" "}
            <em className="not-italic font-semibold">inclusivo</em>.
          </p>
        </div>

        {/* Flex Container */}
        <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
          {/* Para Pessoas */}
          <div className="users-box flex-1 lg:flex-[2] border border-light rounded-2xl p-6">
            <style> 
                {` 
                    .users-box { 
                    max-width: 700px; 
                    height: 494px; 
                    } 
                    @media (max-width: 768px) {
                        .users-box {
                            min-width: 360px;
                        }
                    } 
                `} 
            </style>
            <div className="flex items-center gap-2 mb-6">
              <Icon icon="fluent:person-20-regular" className="text-2xl" />
              <h3 className="text-xl font-light">Para pessoas</h3>
            </div>

            {/* Cards Pessoas */}
            <div className="flex flex-col md:flex-row gap-6">

              {/* Plano Livre */}
              <div className="plan-card bg-teal-500 rounded-xl p-6 flex flex-col text-center flex-1">
                <style> {` .plan-card { max-width: 312px; height: 398px; } `} </style>
                <h4 className="text-2xl font-semibold mb-2">LIVRE</h4>
                <p className="text-5xl font-extrabold mb-2">$0</p>
                <p className="text-sm mb-6">POR MÊS</p>
                <div className="bg-white border mt-3 mb-10"></div>
                <div className="flex flex-col items-center">
                  <ul className="text-left text-sm mb-6 space-y-2">
                    <li>• Acesso ao mapa</li>
                    <li>• Informações básicas</li>
                  </ul>
                </div>

                <button className="mt-auto bg-light text-primary font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
                  ASSINAR
                </button>
              </div>

              {/* Plano Premium */}
              <div className="plan-card bg-teal-500 rounded-xl p-6 flex flex-col text-center flex-1">
                <h4 className="text-2xl font-semibold mb-2">PREMIUM</h4>
                <p className="text-5xl font-extrabold mb-2">$19</p>
                <p className="text-sm mb-6">POR MÊS</p>
                <div className="bg-white border mt-3 mb-10"></div>
                <div className="flex flex-col items-center">
                  <ul className="text-left text-sm mb-6 space-y-2">
                    <li>• Relatórios de acessibilidade</li>
                    <li>• Estatísticas</li>
                    <li>• Notificações personalizadas</li>
                  </ul>
                </div>

                <button className="mt-auto bg-light text-primary font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
                  ASSINAR
                </button>
              </div>
            </div>
          </div>

          {/* Para Empresas */}
          <div className="company-box flex-1 border border-light rounded-2xl p-6 flex flex-col">
            <style> {` .company-box { max-width: 360px; height: 494px; } `} </style>
            <div className="flex items-center gap-2 mb-6">
              <Icon icon="hugeicons:building-03" className="text-2xl" />
              <h3 className="text-xl font-light">Para empresas</h3>
            </div>

            <div className="plan-card bg-white text-dark rounded-xl p-6 flex flex-col text-center mx-auto">
              <h4 className="text-2xl font-semibold mb-2 text-primary">EMPRESAS</h4>
              <p className="text-5xl font-extrabold mb-2 text-primary">$59</p>
              <p className="text-sm mb-6 text-gray-600">POR MÊS</p>
              <div className="border-primary border mt-3 mb-10"></div>
              <div className="flex flex-col items-center">
                <ul className="text-left text-sm mb-6 space-y-2 text-gray-700">
                  <li>
                    • Estabelecimentos podem registrar/validar informações
                  </li>
                  <li>• Selo “Espaço Acessível”</li>
                </ul>
              </div>

              <button className="mt-auto bg-teal-500 text-light font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
                ASSINAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
