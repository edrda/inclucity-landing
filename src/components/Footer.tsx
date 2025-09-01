import React from "react"
import { Link } from "gatsby"

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Esquerda: texto e links */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm">
            IncluCity © {new Date().getFullYear()} – Por cidades mais inclusivas.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub |
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn |
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>

        {/* Direita: logo */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/white-logo.svg"
            alt="Logo IncluCity"
            className="w-36 md:w-40"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
