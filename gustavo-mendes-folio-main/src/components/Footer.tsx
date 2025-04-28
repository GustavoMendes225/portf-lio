
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-navy text-beige py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-heading font-bold">
              Gustavo <span className="text-aqua">Mendes</span>
            </a>
            <p className="mt-2 text-beige/70">
              Especialista em Sistemas de Informação
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-aqua/20 rounded-full hover:bg-aqua hover:text-navy transition-colors mb-4"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-beige/70">
              &copy; {new Date().getFullYear()} Gustavo Mendes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
