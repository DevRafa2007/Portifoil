import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 80 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Jest', level: 85 }
      ]
    }
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-20 bg-surface-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aqui está uma visão detalhada das tecnologias que domino e utilizo 
              para criar soluções digitais inovadoras.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="neon-border p-6 bg-gradient-card"
              >
                <h3 className="text-xl font-semibold text-neon-cyan mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-surface-darker rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full shadow-neon"
                          variants={skillVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center glass p-8 rounded-lg"
          >
            <h4 className="text-xl font-semibold text-neon-purple mb-4">
              Sempre Aprendendo
            </h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A tecnologia está em constante evolução, e eu me mantenho atualizado 
              explorando novas ferramentas, participando de comunidades e 
              contribuindo para projetos open source.
            </p>
            
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              {['Vue.js', 'Python', 'Kubernetes', 'Blockchain'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-mono bg-surface-darker text-neon-blue rounded-full border border-neon-blue/20"
                >
                  {tech} - Em estudo
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;