
import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'Gerenciamento de Banco de Dados', proficiency: 75 },
  { name: 'Desenvolvimento Front End', proficiency: 90 },
  { name: 'Desenvolvimento Back End', proficiency: 60 },
  { name: 'Gerenciamento de Projetos', proficiency: 80 },
];

const technologies = [
  'Python ( Desenvolvendo )', 'Kotlin ( Desenvolvendo )', 'Java', 'SQL',
  'Git', 'Figma', 'HTML', 'CSS', 'Bootstrap'
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = skillsRef.current?.querySelectorAll('.skill-progress');
            progressBars?.forEach((bar) => {
              if (bar instanceof HTMLElement) {
                const width = bar.dataset.progress || '0';
                bar.style.width = `${width}%`;
                bar.style.transition = 'width 1.5s ease-in-out';
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={skillsRef} className="reveal-animation">
            <h3 className="text-xl font-medium mb-6">Habilidades Profissionais </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-progress={skill.proficiency}
                      style={{ width: '0%' }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-animation">
            <h3 className="text-xl font-medium mb-6">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
