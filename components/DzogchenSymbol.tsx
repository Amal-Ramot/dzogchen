import { useId } from "react";

type Props = { className?: string; animated?: boolean; title?: string };

/**
 * סמל הדזוגצ'ן: האות הטיבטית ཨ (A) הלבנה בתוך תיגלה (ཐིག་ལེ) של חמשת צבעי הקשת –
 * חמשת האורות של חמשת היסודות.
 */
export default function DzogchenSymbol({ className, animated = true, title = "סמל הדזוגצ'ן – האות A בתוך תיגלה של קשת" }: Props) {
  const raw = useId().replace(/:/g, "");
  const id = (s: string) => `${s}-${raw}`;
  const rings = [
    { r: 160, c: "#ff5a4f" },
    { r: 148, c: "#ffd34d" },
    { r: 136, c: "#3fd38a" },
    { r: 124, c: "#4f7cff" },
    { r: 112, c: "#f4f1ea" },
  ];
  const rays = Array.from({ length: 72 }, (_, i) => i * 5);

  return (
    <svg viewBox="0 0 400 400" className={`dz-symbol ${className ?? ""}`} role="img" aria-label={title}>
      <defs>
        <radialGradient id={id("halo")} cx="50%" cy="50%" r="50%">
          <stop offset="35%" stopColor="#8fb0ff" stopOpacity=".45" />
          <stop offset="60%" stopColor="#6d5cff" stopOpacity=".14" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("core")} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#2c4bd8" />
          <stop offset="55%" stopColor="#12207a" />
          <stop offset="100%" stopColor="#050a2e" />
        </radialGradient>
        <linearGradient id={id("shine")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity=".75" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id("beam")} cx="200" cy="200" r="200" gradientUnits="userSpaceOnUse">
          <stop offset="25%" stopColor="#fff6dc" stopOpacity=".85" />
          <stop offset="100%" stopColor="#fff6dc" stopOpacity="0" />
        </radialGradient>
        <filter id={id("bloom")} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id={id("soft")} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <filter id={id("glow")} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {animated && <circle className="halo" cx="200" cy="200" r="200" fill={`url(#${id("halo")})`} />}

      {animated && (
        <>
          <g className="rays" stroke="#e8c27a" strokeOpacity=".22" strokeWidth="1">
            {rays.map((a) => (
              <line key={a} x1="200" y1={a % 15 === 0 ? 14 : 26} x2="200" y2="34" transform={`rotate(${a} 200 200)`} />
            ))}
          </g>
          <g className="rays-2" fill="#f6dfaa">
            {rays.filter((a) => a % 30 === 0).map((a) => (
              <circle key={a} cx="200" cy="22" r="1.6" opacity=".7" transform={`rotate(${a + 15} 200 200)`} />
            ))}
          </g>
        </>
      )}

      {animated && (
        <g className="beams" fill={`url(#${id("beam")})`}>
          {Array.from({ length: 12 }, (_, i) => i * 30).map((a) => (
            <polygon key={a} points="200,200 192,0 208,0" transform={`rotate(${a} 200 200)`} />
          ))}
        </g>
      )}

      {animated && (
        <g className="bloom" filter={`url(#${id("bloom")})`}>
          {rings.map((ring) => (
            <circle key={ring.r} cx="200" cy="200" r={ring.r} fill="none" stroke={ring.c} strokeWidth="16" />
          ))}
        </g>
      )}

      <g filter={`url(#${id("glow")})`}>
        {rings.map((ring) => (
          <circle key={ring.r} className={animated ? "ring" : undefined} cx="200" cy="200" r={ring.r} fill="none" stroke={ring.c} strokeWidth="12.5" />
        ))}
      </g>

      {animated && (
        <g className="shimmer">
          <path d="M 200 64 A 136 136 0 0 1 318 132" fill="none" stroke={`url(#${id("shine")})`} strokeWidth="52" opacity=".4" />
        </g>
      )}

      {animated && (
        <>
          <g className="orbit o1" filter={`url(#${id("soft")})`}>
            <circle cx="200" cy="18" r="3.2" fill="#fff" />
            <circle cx="200" cy="382" r="2.4" fill="#ffd34d" />
          </g>
          <g className="orbit o2" filter={`url(#${id("soft")})`}>
            <circle cx="30" cy="200" r="2.6" fill="#8fb0ff" />
            <circle cx="370" cy="200" r="2" fill="#ff8a7f" />
          </g>
          <g className="orbit o3" filter={`url(#${id("soft")})`}>
            <circle cx="70" cy="70" r="2" fill="#3fd38a" />
            <circle cx="330" cy="330" r="2.8" fill="#fff" />
          </g>
        </>
      )}

      <circle className={animated ? "core" : undefined} cx="200" cy="200" r="106" fill={`url(#${id("core")})`} />

      {animated && (
        <text className="letter-bloom" x="200" y="262" textAnchor="middle" fill="#cfe0ff" fontSize="150" filter={`url(#${id("bloom")})`} style={{ fontFamily: "var(--font-tib)" }}>
          ཨ
        </text>
      )}

      <text
        className={animated ? "letter" : undefined}
        x="200"
        y="262"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="150"
        style={{ fontFamily: "var(--font-tib)" }}
      >
        ཨ
      </text>
    </svg>
  );
}
