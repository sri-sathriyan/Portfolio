import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ThemeProvider } from './context/ThemeProvider';
import { LenisProvider } from './context/LenisProvider';
import { Architecture } from './components/sections/Architecture';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <div className="bg-light dark:bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-500">
          <Header />
          <main>
            <Hero />
            <Skills />
            <Projects />
            <Architecture />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </div>
      </LenisProvider>
    </ThemeProvider>
  );
}

export default App;