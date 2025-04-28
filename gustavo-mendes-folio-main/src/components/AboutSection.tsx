
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-foreground/80 mb-6">
            Sou um estudante dedicado de Sistemas de Informação, apaixonado por tecnologia.
            Atualmente estou no 5º Semestre na FIAP - Faculdade de Informática e Administração Paulista, e estou desenvolvendo minha habilidades 
            </p>
            <p className="text-foreground/80 mb-6">
            Ao longo da minha jornada acadêmica e profissional, estou desenvolvendo uma base sólida em habilidades técnicas e análise de negócios, o que me permite preencher a lacuna entre as capacidades tecnológicas e as necessidades organizacionais.
            </p>
            <p className="text-foreground/80">
            Estou constantemente aprendendo e expandindo meu conhecimento em tecnologias e metodologias emergentes para permanecer na vanguarda do cenário tecnológico em rápida evolução.
            </p>
          </div>
          
          <div>
            <div className="space-y-8">
              <div className="p-6 bg-background rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-accent/10 text-accent rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-medium">Educação</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Bacharelado em Sistemas de Informação</p>
                    <p className="text-foreground/70">FIAP, 2023 - 2026/2027</p>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-background rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-accent/10 text-accent rounded-lg">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-xl font-medium">Experiências</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">FIAP - Robocup</p>
                    <p className="text-foreground/70">Faculdade, 2023</p>
                  </li>
                  <li>
                    <p className="font-medium">Kraft Heinz</p>
                    <p className="text-foreground/70">Faculdade, 2023</p>
                  </li>
                  <li>
                    <p className="font-medium">Natura</p>
                    <p className="text-foreground/70">Faculdade, 2024</p>
                  </li>
                  <li>
                    <p className="font-medium">ManageEngine</p>
                    <p className="text-foreground/70">Faculdade, 2025</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
