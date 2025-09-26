import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e analytics em tempo real.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      featured: true,
      image: '/placeholder.svg',
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e integração com calendários.',
      tech: ['TypeScript', 'Express', 'MongoDB', 'Socket.io'],
      featured: true,
      image: '/placeholder.svg',
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Dashboard responsivo para visualização de dados com gráficos interativos e relatórios customizáveis.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      featured: false,
      image: '/placeholder.svg',
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'Aplicativo bancário mobile com autenticação biométrica e transações seguras.',
      tech: ['React Native', 'Node.js', 'JWT', 'Blockchain'],
      featured: true,
      image: '/placeholder.svg',
      demo: '#',
      github: '#'
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

  return (
    <section id="projects" className="py-20 bg-surface-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais significativos, 
              cada um demonstrando diferentes aspectos das minhas habilidades técnicas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`neon-border bg-gradient-card hover-glow transition-smooth ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  {project.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-neon-purple fill-current" />
                      <span className="text-xs font-semibold text-neon-purple uppercase tracking-wider">
                        Em Destaque
                      </span>
                    </div>
                  )}

                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-secondary rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                    <div className="text-4xl text-secondary-foreground opacity-50">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-surface-darker text-neon-cyan rounded-full border border-neon-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-lg text-primary-foreground font-semibold text-sm transition-smooth hover:shadow-neon"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-foreground font-semibold text-sm transition-smooth hover:bg-muted/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/rafaelfonseca"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-foreground font-semibold hover-glow transition-smooth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              Ver Todos os Projetos no GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;