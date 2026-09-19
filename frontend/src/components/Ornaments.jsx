export function FlorOrnamento({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4">
        <circle cx="32" cy="24" r="7" fill="currentColor" fillOpacity="0.15" />
        <path d="M32 31c-3 6-3 14 0 20M32 31c3 6 3 14 0 20" />
        <path d="M20 20c2 4 6 6 10 6M44 20c-2 4-6 6-10 6" />
        <ellipse cx="18" cy="17" rx="5" ry="3.2" transform="rotate(-30 18 17)" />
        <ellipse cx="46" cy="17" rx="5" ry="3.2" transform="rotate(30 46 17)" />
      </g>
    </svg>
  );
}

export function VelaIlustracion({ className = "h-24 w-24" }) {
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <path
        d="M50 8c4 8 10 14 10 22 0 6-4 10-10 10s-10-4-10-10c0-8 6-14 10-22Z"
        fill="#B8933D"
      />
      <rect x="38" y="42" width="24" height="80" rx="3" fill="currentColor" fillOpacity="0.9" />
      <rect x="38" y="42" width="24" height="10" rx="3" fill="#00000014" />
      <line x1="50" y1="42" x2="50" y2="34" stroke="#00000030" strokeWidth="2" />
    </svg>
  );
}

export function PalomaIlustracion({ className = "h-16 w-16" }) {
  return (
    <svg viewBox="0 0 100 80" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 46c-8-16-26-24-40-20 10 2 18 10 20 18-10-2-18 2-22 10 10-4 18-2 24 4-6 4-9 10-9 17 6-6 13-10 20-10 3 8 9 14 17 16-4-6-5-13-3-20 9 2 18-1 24-8-8 2-15-1-19-7 9-5 15-14 16-24-6 8-15 13-24 12 2-10-1-19-8-25 3 8 2 17-4 23-4-8-8-13-12-13-3 0 5 5 5 5-3-2-3-2-5 2Z" />
    </svg>
  );
}

export function ArcoIlustracion({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 200 260" className={className} fill="none" aria-hidden="true">
      <path
        d="M10 260V110C10 55 50 12 100 12s90 43 90 98v150"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.35"
      />
      <path
        d="M30 260V115C30 68 61 33 100 33s70 35 70 82v145"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.25"
      />
    </svg>
  );
}

export function AtaudIlustracion({ className = "h-24 w-24", id = "ataud", claro = "#A9754A", oscuro = "#4E2E16" }) {
  const gWood = `${id}-wood`;
  const gLid = `${id}-lid`;
  const gShine = `${id}-shine`;
  return (
    <svg viewBox="0 0 200 130" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gWood} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={claro} />
          <stop offset="45%" stopColor={oscuro} />
          <stop offset="100%" stopColor="#241608" />
        </linearGradient>
        <linearGradient id={gLid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={oscuro} />
          <stop offset="50%" stopColor={claro} />
          <stop offset="100%" stopColor={oscuro} />
        </linearGradient>
        <linearGradient id={gShine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* shadow */}
      <ellipse cx="100" cy="118" rx="80" ry="8" fill="#000000" opacity="0.18" />

      {/* base / stand */}
      <rect x="30" y="98" width="140" height="10" rx="2" fill="#3A2312" />
      <rect x="20" y="106" width="160" height="8" rx="2" fill="#241608" />

      {/* casket body */}
      <path
        d="M35 96V52c0-8 5-14 12-16l18-6c3-1 6-1 9-1h52c3 0 6 0 9 1l18 6c7 2 12 8 12 16v44Z"
        fill={`url(#${gWood})`}
        stroke="#2B1A0C"
        strokeWidth="1.5"
      />
      {/* lid, slightly open */}
      <path
        d="M35 52c0-8 5-14 12-16l18-6c3-1 6-1 9-1h52c3 0 6 0 9 1l18 6c7 2 12 8 12 16v6H35Z"
        fill={`url(#${gLid})`}
        stroke="#2B1A0C"
        strokeWidth="1.5"
      />
      <path d="M35 58h130" stroke="#2B1A0C" strokeWidth="1" opacity="0.5" />
      {/* interior visible sliver */}
      <path d="M55 40c8-4 20-6 45-6s37 2 45 6" fill="none" stroke="#EFE4CC" strokeWidth="6" strokeLinecap="round" opacity="0.85" />

      {/* gold trim band */}
      <rect x="35" y="70" width="130" height="6" fill="#D6B868" opacity="0.9" />

      {/* handles */}
      <rect x="45" y="82" width="16" height="5" rx="2" fill="#D6B868" />
      <rect x="139" y="82" width="16" height="5" rx="2" fill="#D6B868" />
      <rect x="92" y="82" width="16" height="5" rx="2" fill="#D6B868" />

      {/* shine overlay */}
      <path d="M35 52c0-8 5-14 12-16l18-6c3-1 6-1 9-1h52c3 0 6 0 9 1l18 6c7 2 12 8 12 16v6H35Z" fill={`url(#${gShine})`} />
    </svg>
  );
}

export function CapillaIlustracion({ className = "h-24 w-24", id = "capilla" }) {
  const gCurtain = `${id}-curtain`;
  const gFloor = `${id}-floor`;
  const gFlame = `${id}-flame`;
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gCurtain} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A2839" />
          <stop offset="100%" stopColor="#3E0F1C" />
        </linearGradient>
        <linearGradient id={gFloor} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFE4CC" />
          <stop offset="100%" stopColor="#D8C9A3" />
        </linearGradient>
        <radialGradient id={gFlame} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="100%" stopColor="#B8933D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* floor */}
      <rect x="0" y="112" width="200" height="28" fill={`url(#${gFloor})`} />
      {/* back wall */}
      <rect x="0" y="0" width="200" height="112" fill="#1E1215" />

      {/* curtains */}
      <path d="M0 0h34l-10 112H0Z" fill={`url(#${gCurtain})`} />
      <path d="M200 0h-34l10 112h24Z" fill={`url(#${gCurtain})`} />
      <path d="M34 0h14l-6 112H28Z" fill={`url(#${gCurtain})`} opacity="0.6" />
      <path d="M166 0h-14l6 112h14Z" fill={`url(#${gCurtain})`} opacity="0.6" />

      {/* cross */}
      <rect x="97" y="14" width="6" height="34" fill="#D6B868" />
      <rect x="86" y="24" width="28" height="6" fill="#D6B868" />

      {/* casket on pedestal, small, centered */}
      <rect x="72" y="96" width="56" height="10" rx="2" fill="#4E2E16" />
      <path
        d="M78 96V86c0-3 2-6 5-7l6-2c2-1 4-1 6-1h10c2 0 4 0 6 1l6 2c3 1 5 4 5 7v10Z"
        fill="#8C5A34"
        stroke="#3A2312"
      />
      <rect x="78" y="86" width="44" height="4" fill="#D6B868" />

      {/* candelabra + glow, left and right */}
      {[46, 154].map((x) => (
        <g key={x}>
          <circle cx={x} cy="86" r="20" fill={`url(#${gFlame})`} />
          <line x1={x} y1="70" x2={x} y2="106" stroke="#B8933D" strokeWidth="2.5" />
          <line x1={x - 10} y1="106" x2={x + 10} y2="106" stroke="#B8933D" strokeWidth="2.5" />
          <ellipse cx={x} cy="68" rx="2.2" ry="4" fill="#FFE9A8" />
        </g>
      ))}
    </svg>
  );
}

export function UrnaIlustracion({ className = "h-24 w-24", id = "urna" }) {
  const gBody = `${id}-body`;
  const gShine = `${id}-shine`;
  return (
    <svg viewBox="0 0 140 160" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gBody} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8C6C26" />
          <stop offset="45%" stopColor="#D6B868" />
          <stop offset="100%" stopColor="#8C6C26" />
        </linearGradient>
        <linearGradient id={gShine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="70" cy="148" rx="46" ry="7" fill="#000000" opacity="0.18" />
      {/* base */}
      <rect x="42" y="132" width="56" height="10" rx="2" fill="#4E2E16" />
      <path d="M48 132c2-8 6-12 22-12s20 4 22 12Z" fill={`url(#${gBody})`} stroke="#4E2E16" strokeWidth="1.2" />
      {/* body */}
      <path
        d="M40 120c-3-22-3-44 6-58 5-8 14-12 24-12s19 4 24 12c9 14 9 36 6 58Z"
        fill={`url(#${gBody})`}
        stroke="#4E2E16"
        strokeWidth="1.4"
      />
      {/* neck + lid */}
      <rect x="56" y="36" width="28" height="12" rx="3" fill={`url(#${gBody})`} stroke="#4E2E16" strokeWidth="1.2" />
      <ellipse cx="70" cy="34" rx="16" ry="6" fill={`url(#${gBody})`} stroke="#4E2E16" strokeWidth="1.2" />
      <ellipse cx="70" cy="32" rx="6" ry="3" fill="#4E2E16" opacity="0.5" />
      {/* handles */}
      <path d="M40 78c-8 0-12 6-12 12s4 10 10 10" fill="none" stroke="#4E2E16" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 78c8 0 12 6 12 12s-4 10-10 10" fill="none" stroke="#4E2E16" strokeWidth="3" strokeLinecap="round" />
      {/* decorative band */}
      <rect x="40" y="94" width="60" height="5" fill="#4E2E16" opacity="0.35" />
      {/* shine */}
      <path d="M40 120c-3-22-3-44 6-58 5-8 14-12 24-12s19 4 24 12c9 14 9 36 6 58Z" fill={`url(#${gShine})`} />
    </svg>
  );
}

export function CarrozaIlustracion({ className = "h-16 w-16", id = "carroza" }) {
  const gBody = `${id}-body`;
  const gGlass = `${id}-glass`;
  const gChrome = `${id}-chrome`;
  return (
    <svg viewBox="0 0 220 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gBody} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A3F4A" />
          <stop offset="55%" stopColor="#1E222A" />
          <stop offset="100%" stopColor="#0C0E12" />
        </linearGradient>
        <linearGradient id={gGlass} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9FB4C8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4C5A68" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={gChrome} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E9D9A8" />
          <stop offset="50%" stopColor="#B8933D" />
          <stop offset="100%" stopColor="#8C6C26" />
        </linearGradient>
      </defs>

      <ellipse cx="112" cy="103" rx="95" ry="7" fill="#000000" opacity="0.2" />

      {/* body */}
      <path
        d="M10 78c0-4 3-7 7-8l14-3 10-24c2-5 7-8 13-8h96c6 0 11 3 13 8l10 24 14 3c4 1 7 4 7 8v14c0 5-4 9-9 9H19c-5 0-9-4-9-9Z"
        fill={`url(#${gBody})`}
        stroke="#000"
        strokeOpacity="0.4"
      />

      {/* roof + side windows */}
      <path d="M55 66l7-19c1-3 4-5 7-5h60c3 0 6 2 7 5l7 19Z" fill={`url(#${gGlass})`} stroke="#000" strokeOpacity="0.3" />
      <line x1="112" y1="42" x2="112" y2="66" stroke="#000" strokeOpacity="0.35" />
      {/* rear casket window */}
      <rect x="150" y="50" width="46" height="26" rx="3" fill={`url(#${gGlass})`} opacity="0.6" />

      {/* chrome trim */}
      <rect x="10" y="73" width="202" height="3" fill={`url(#${gChrome})`} />
      <rect x="30" y="45" width="150" height="3" fill={`url(#${gChrome})`} opacity="0.7" />

      {/* headlight */}
      <circle cx="16" cy="80" r="4" fill="#E9D9A8" />

      {/* wheels */}
      <circle cx="60" cy="101" r="13" fill="#111318" stroke="#000" />
      <circle cx="60" cy="101" r="6" fill={`url(#${gChrome})`} />
      <circle cx="168" cy="101" r="13" fill="#111318" stroke="#000" />
      <circle cx="168" cy="101" r="6" fill={`url(#${gChrome})`} />
    </svg>
  );
}
