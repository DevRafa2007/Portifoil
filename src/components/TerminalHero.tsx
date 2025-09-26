import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TerminalHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  
  const lines = [
    '$ whoami',
    'rafael-fonseca',
    '$ cat ./profile.txt',
    'Full-Stack Developer',
    'Especializado em React, Node.js, TypeScript',
    '$ echo "Missão: Transformar ideias em código"',
    'Missão: Transformar ideias em código',
    '$ status --current',
    'Online e pronto para novos desafios',
    '$ _'
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const line = lines[currentLine];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayText(prev => {
            const linesArray = prev.split('\n');
            linesArray[currentLine] = line.slice(0, charIndex);
            return linesArray.join('\n');
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
          }, 800);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-hero">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="neon-border p-8 max-w-4xl mx-auto mb-8"
        >
          <div className="bg-surface-darker rounded-lg p-6 font-mono text-left">
            <div className="flex items-center gap-2 mb-4 text-neon-cyan">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm">rafael@portfolio:~$</span>
            </div>
            
            <pre className="text-foreground text-sm leading-relaxed whitespace-pre-wrap">
              {displayText}
              <span className="terminal-cursor text-neon-purple">|</span>
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Rafael Fonseca
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Olá, sou Rafael Fonseca. <br />
            <span className="text-neon-cyan">Codifico ideias</span> e{' '}
            <span className="text-neon-purple">construo experiências digitais completas.</span>
          </p>

          <motion.button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full text-primary-foreground font-semibold hover-glow transition-smooth"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Portfólio
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalHero;