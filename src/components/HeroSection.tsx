
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <p className="text-accent font-medium mb-2">Olá, eu sou</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Gustavo Mendes
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-6">
              Especialista em Sistemas de Informação
            </h2>
            <p className="text-foreground/70 max-w-lg mb-8">
              Apaixonado por desenvolver soluções inovadoras através da tecnologia.
              Especializado em design, desenvolvimento e implementação de sistemas de informação.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Entre em Contato
              </a>
              <a 
                href="#about" 
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-accent transition-colors"
              >
                Saiba Mais 
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-accent via-purple-500 to-blue-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl bg-background">
                <img 
                  src="/lovable-uploads/477bf522-c515-42f3-961e-a03916dbae48.png" 
                  alt="Gustavo Mendes trabalhando em sua mesa"
                  className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
