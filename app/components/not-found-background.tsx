/**
 * Orbital decoration for 404 — light theme (soft greens on white / mint).
 */
export default function NotFoundBackground() {
  const c = 200;
  const spiral: { x: number; y: number; op: number; r: number; fill: string }[] = [];

  const n = 520;
  for (let i = 0; i < n; i++) {
    const p = i / n;
    const t = p * 11 * Math.PI;
    const r = 22 + p * 168;
    const wobble = Math.sin(i * 0.07) * 4 + Math.cos(i * 0.11) * 2;
    const x = c + (r + wobble) * Math.cos(t + 0.55);
    const y = c + (r + wobble) * Math.sin(t + 0.55) * 0.86;
    const op = (0.08 + p * 0.72) * 0.34;
    const dotR = 0.45 + (i % 6) * 0.22;
    const fill =
      i % 7 === 0 ? "#34D399" : i % 5 === 0 ? "#1F7A4D" : "#166A45";
    spiral.push({ x, y, op, r: dotR, fill });
  }

  const innerSpiral: typeof spiral = [];
  const n2 = 220;
  for (let i = 0; i < n2; i++) {
    const p = i / n2;
    const t = -p * 6 * Math.PI + 1.2;
    const r = 18 + p * 95;
    const x = c + r * Math.cos(t) * 0.96;
    const y = c + r * Math.sin(t) * 0.82;
    const op = (0.06 + p * 0.35) * 0.32;
    innerSpiral.push({
      x,
      y,
      op,
      r: 0.35 + (i % 4) * 0.12,
      fill: "#1F7A4D",
    });
  }

  const ringDots: { x: number; y: number; op: number }[] = [];
  for (let i = 0; i < 180; i++) {
    const a = (i / 180) * Math.PI * 2 + 0.3;
    const rad = 118 + (i % 3) * 2.2;
    ringDots.push({
      x: c + rad * Math.cos(a) * 1.05,
      y: c + rad * Math.sin(a) * 0.91,
      op: (0.12 + (i % 5) * 0.06) * 0.45,
    });
  }

  return (
    <svg
      className="h-full w-full [mask-image:radial-gradient(ellipse_68%_68%_at_50%_50%,black_25%,transparent_75%)]"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <filter
          id="nf-orbit-glow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="nf-orbit-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.42" />
          <stop offset="45%" stopColor="#34D399" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#1F7A4D" stopOpacity="0.26" />
        </linearGradient>
        <radialGradient id="nf-core-glow" cx="50%" cy="46%" r="58%">
          <stop offset="0%" stopColor="#1F7A4D" stopOpacity="0.06" />
          <stop offset="40%" stopColor="#A7F3D0" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="400" fill="url(#nf-core-glow)" />

      {innerSpiral.map((d, i) => (
        <circle key={`in-${i}`} cx={d.x} cy={d.y} r={d.r} fill={d.fill} opacity={d.op} />
      ))}

      {spiral.map((d, i) => (
        <circle key={`sp-${i}`} cx={d.x} cy={d.y} r={d.r} fill={d.fill} opacity={d.op} />
      ))}

      {ringDots.map((d, i) => (
        <circle
          key={`rg-${i}`}
          cx={d.x}
          cy={d.y}
          r={0.55 + (i % 4) * 0.15}
          fill="#1F7A4D"
          opacity={d.op}
        />
      ))}

      <g
        fill="none"
        stroke="url(#nf-orbit-stroke)"
        strokeWidth="1.1"
        strokeLinecap="round"
        filter="url(#nf-orbit-glow)"
        opacity={0.55}
      >
        <ellipse cx="200" cy="188" rx="142" ry="58" transform="rotate(-16 200 188)" />
        <ellipse cx="200" cy="188" rx="128" ry="72" transform="rotate(38 200 188)" />
        <ellipse cx="200" cy="188" rx="108" ry="88" transform="rotate(82 200 188)" />
        <ellipse cx="200" cy="188" rx="155" ry="48" transform="rotate(-52 200 188)" />
      </g>

      <g fill="#1F7A4D" opacity={0.55}>
        <circle cx="318" cy="168" r="3.2" />
        <circle cx="98" cy="218" r="2.8" />
        <circle cx="248" cy="92" r="2.4" />
        <circle cx="152" cy="278" r="2.6" />
        <circle cx="285" cy="245" r="2" />
        <circle cx="118" cy="118" r="1.8" />
      </g>
    </svg>
  );
}
