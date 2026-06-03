import { useEffect, useState, useRef } from 'react';

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  // Check if device supports hover (desktop)
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      cursorRef.current.x = lerp(cursorRef.current.x, targetRef.current.x, 0.08);
      cursorRef.current.y = lerp(cursorRef.current.y, targetRef.current.y, 0.08);

      setPosition({ x: cursorRef.current.x, y: cursorRef.current.y });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Large glow circle */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-300"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          width: '400px',
          height: '400px',
          background: isHovering
            ? 'radial-gradient(circle, rgba(34, 211, 238, 0.15), transparent)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent)',
          borderRadius: '50%',
        }}
      />
      
      {/* Small cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-150"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          width: '8px',
          height: '8px',
          background: isHovering ? '#22d3ee' : '#6366f1',
          borderRadius: '50%',
          boxShadow: isHovering 
            ? '0 0 20px rgba(34, 211, 238, 0.8)'
            : '0 0 10px rgba(99, 102, 241, 0.6)',
        }}
      />
    </>
  );
};
