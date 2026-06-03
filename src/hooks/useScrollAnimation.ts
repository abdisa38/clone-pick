import { useInView } from 'react-intersection-observer';
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export const fadeInLeft: Variants = {
  hidden: { 
    x: -40, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export const fadeInRight: Variants = {
  hidden: { 
    x: 40, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export const fadeInDown: Variants = {
  hidden: { 
    y: -40, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export const scaleIn: Variants = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const useScrollAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
};
