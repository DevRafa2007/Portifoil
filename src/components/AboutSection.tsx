import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Rocket, Coffee } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Frontend', icon: Code2, tech: 'React, TypeScript, Next.js' },
    { name: 'Backend', icon: Database, tech: 'Node.js, PostgreSQL, MongoDB' },
    { name: 'DevOps', icon: Rocket, tech: 'Docker, AWS, CI/CD' },
    { name: 'Outros', icon: Coffee, tech: 'Git, Figma, Metodologias Ágeis' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-cyan mb-4">
                Desenvolvedor Full-Stack Apaixonado por Tecnologia
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de <span className="text-neon-purple font-semibold">5 anos</span> de experiência, 
                especializo-me em criar soluções digitais completas que combinam design elegante com 
                performance excepcional.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha abordagem foca em <span className="text-neon-cyan">clareza no código</span>, 
                <span className="text-neon-purple"> otimização de performance</span> e 
                <span className="text-neon-cyan"> acessibilidade universal</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando não estou codificando, você me encontra explorando novas tecnologias, 
                lendo ficção científica ou preparando o café perfeito ☕
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="neon-border p-6 bg-gradient-card"
            >
              <h4 className="text-xl font-semibold text-neon-purple mb-6 text-center">
                Stack Principal
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="glass p-4 rounded-lg hover-glow transition-smooth"
                    whileHover={{ scale: 1.02 }}
                  >
                    <skill.icon className="w-8 h-8 text-neon-cyan mb-3" />
                    <h5 className="font-semibold text-foreground mb-2">{skill.name}</h5>
                    <p className="text-sm text-muted-foreground">{skill.tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center glass p-8 rounded-lg"
          >
            <h4 className="text-xl font-semibold text-neon-cyan mb-4">
              Meus Valores Como Desenvolvedor
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h5 className="font-semibold text-foreground mb-2">Código Limpo</h5>
                <p className="text-sm text-muted-foreground">
                  Escrevo código legível, maintível e bem documentado
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-blue">
                  <Rocket className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h5 className="font-semibold text-foreground mb-2">Performance</h5>
                <p className="text-sm text-muted-foreground">
                  Otimização constante para a melhor experiência do usuário
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <Database className="w-8 h-8 text-primary-foreground" />
                </div>
                <h5 className="font-semibold text-foreground mb-2">Acessibilidade</h5>
                <p className="text-sm text-muted-foreground">
                  Tecnologia inclusiva para todos os usuários
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;