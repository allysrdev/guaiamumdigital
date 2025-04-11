'use client'
import { createContext, useContext, useRef, RefObject, ReactNode } from 'react';

type SectionRefs = Record<string, RefObject<HTMLElement>>;

type ScrollContextType = {
  registerRef: (id: string, ref: RefObject<HTMLElement>) => void;
  scrollTo: (id: string) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const refs = useRef<SectionRefs>({});

  const registerRef = (id: string, ref: RefObject<HTMLElement>) => {
    refs.current[id] = ref;
  };

  const scrollTo = (id: string) => {
    const ref = refs.current[id];
    if (ref?.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ registerRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};