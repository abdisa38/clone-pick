export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <svg
        className="w-full h-full opacity-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(99, 102, 241, 0.04)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="grid-fade">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#grid-fade-mask)"
        />
        <mask id="grid-fade-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade)" />
        </mask>
      </svg>
    </div>
  );
};
