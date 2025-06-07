export function CircleStarSVG() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="4" fill="white" />
      <path
        d="M50 25 L55 45 L75 50 L55 55 L50 75 L45 55 L25 50 L45 45 Z"
        fill="black"
      />
    </svg>
  );
}

// components/StraightLineSVG.tsx
export function StraightLineSVG() {
  return (
    <svg width="400" height="40" viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="20" x2="400" y2="20" stroke="white" strokeWidth="0.5" />
    </svg>
  );
}
