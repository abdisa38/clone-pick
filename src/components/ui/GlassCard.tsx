import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({
  children,
  glowColor = 'rgba(99, 102, 241, 0.15)',
  className,
  hoverEffect = true,
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn('glass-card', !hoverEffect && 'hover:transform-none', className)}
      style={{
        '--glow-color': glowColor,
      } as React.CSSProperties}
      whileHover={hoverEffect ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};
