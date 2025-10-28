import React, { useMemo, useCallback } from 'react';
import { Button } from '../ui/Button';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// FIX: Add type import for `ISourceOptions` to correctly type particle options.
import type { Container, ISourceOptions } from "@tsparticles/engine";
import useLenis from '../../hooks/useLenis';

export const Hero: React.FC = () => {
  const [init, setInit] = React.useState(false);
  const lenis = useLenis();

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded");
  }, []);
  
  const particleOptions: ISourceOptions = useMemo(() => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#4f46e5',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: false,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),[]);

    const handleContactClick = () => {
        if (lenis) {
            lenis.scrollTo('#contact', { duration: 1.5 });
        } else {
            // Fallback for native smooth scrolling
            const targetElement = document.querySelector('#contact');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">
      {init && <Particles id="tsparticles" options={particleOptions} particlesLoaded={particlesLoaded} />}
      <div className="absolute inset-0 bg-dark/70" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center z-10">
        <div className="text-center md:text-left order-2 md:order-1">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Sri Sathriyan
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Aspiring Cloud & DevOps Engineer with hands-on experience in cloud platforms, CI/CD automation, containerization, and infrastructure as code, seeking to apply skills in building scalable and automated solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button size="lg" variant="primary" onClick={handleContactClick}>
                <FaEnvelope className="mr-2" /> Contact Me
              </Button>
              <a href="https://ik.imagekit.io/hhjqvloz3/Resume_Sathriyan.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <FaDownload className="mr-2" /> My Resume
                </Button>
              </a>
            </div>
          </Fade>
        </div>
        <div className="relative h-72 w-72 md:h-96 md:w-96 flex items-center justify-center mx-auto md:mx-0 order-1 md:order-2">
            <Fade direction="up" triggerOnce delay={200}>
                <div className="relative w-full h-full p-2 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary-dark rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
                    <img
                        src="https://ik.imagekit.io/hhjqvloz3/Sathriyan.jpg"
                        alt="Profile Picture"
                        className="relative w-full h-full object-cover rounded-full shadow-2xl border-2 border-gray-700 transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </Fade>
        </div>
      </div>
    </section>
  );
};