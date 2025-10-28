import React, { createContext, useEffect, useMemo } from 'react';
import Lenis from '@studio-freight/lenis';

export const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenis = useMemo(() => new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
  }), []);

  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [lenis]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};