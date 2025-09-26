import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-darker border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Rafael Fonseca
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Transformando ideias em experiências digitais extraordinárias, 
              uma linha de código por vez.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-neon-purple fill-current animate-pulse" />
            <span>e</span>
            <Code className="w-4 h-4 text-neon-cyan" />
            <span>por Rafael Fonseca</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-xs text-muted-foreground"
          >
            <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
            <motion.a
              href="https://github.com/rafaelfonseca/portfolio"
              className="inline-flex items-center gap-1 mt-2 text-neon-cyan hover:text-neon-purple transition-smooth"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-3 h-3" />
              Ver código deste portfólio
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;