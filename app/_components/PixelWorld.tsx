// Original pixel-art scene for the KultKloud hero, rasterised at build time.
// Grid: 240 x 135 "pixels", scaled up crisply. All motion is CSS and stops for reduced motion.

type Px = [number, number, string];
const W = 240, H = 135;

// Merge horizontal runs of the same colour into single rects to keep the SVG small.
function toRects(pixels: Px[]) {
  const rows = new Map<number, Map<number, string>>();
  for (const [x, y, c] of pixels) {
    if (x < -40 || x >= W + 40 || y < 0 || y >= H) continue;
    if (!rows.has(y)) rows.set(y, new Map());
    rows.get(y)!.set(x, c);
  }
  const out: { x: number; y: number; w: number; c: string }[] = [];
  for (const [y, row] of rows) {
    const xs = [...row.keys()].sort((a, b) => a - b);
    let start = xs[0], prev = xs[0], color = row.get(xs[0])!;
    for (let i = 1; i <= xs.length; i++) {
      const x = xs[i], c = x === undefined ? "" : row.get(x)!;
      if (x === prev + 1 && c === color) { prev = x; continue; }
      out.push({ x: start, y, w: prev - start + 1, c: color });
      start = x; prev = x; color = c;
    }
  }
  return out;
}
function Rects({ pixels }: { pixels: Px[] }) {
  return <>{toRects(pixels).map((r, i) => <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={r.c} />)}</>;
}

// Deterministic pseudo-random so the scene is identical on every build.
function rng(seed: number) { return () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296); }

// A puffy cloud from overlapping circles, shaded light-top / dark-bottom.
function cloud(cx: number, cy: number, scale: number, palette: [string, string, string]): Px[] {
  const lobes = [[-1.1, 0.25, 0.75], [-0.4, -0.2, 1], [0.45, -0.05, 0.85], [1.1, 0.3, 0.65]].map(([dx, dy, r]) => [cx + dx * 9 * scale, cy + dy * 9 * scale, r * 8 * scale]);
  const px: Px[] = [];
  const minX = Math.floor(cx - 22 * scale), maxX = Math.ceil(cx + 22 * scale);
  const minY = Math.floor(cy - 14 * scale), maxY = Math.ceil(cy + 8 * scale);
  for (let y = minY; y <= maxY; y++) for (let x = minX; x <= maxX; x++) {
    if (y > cy + 4.5 * scale) continue; // flat base
    let inside = false, top = Infinity;
    for (const [lx, ly, r] of lobes) { const d = Math.hypot(x - lx, y - ly); if (d <= r) { inside = true; top = Math.min(top, (y - (ly - r)) / (2 * r)); } }
    if (!inside) continue;
    const c = y > cy + 2.5 * scale ? palette[2] : top < 0.28 ? palette[0] : palette[1];
    px.push([x, y, c]);
  }
  return px;
}

// Floating island: grass cap, earth band, tapering rock underside.
function island(cx: number, top: number, half: number, depth: number): Px[] {
  const px: Px[] = [];
  for (let x = cx - half; x <= cx + half; x++) {
    const edge = Math.abs(x - cx) >= half - 1;
    px.push([x, top, edge ? "#2f9e6b" : "#5fe08f"], [x, top + 1, "#3cbf72"], [x, top + 2, "#2f9e6b"]);
  }
  for (let d = 3; d < depth; d++) {
    const w = Math.round(half * (1 - (d - 3) / (depth - 2)) ** 0.8);
    for (let x = cx - w; x <= cx + w; x++) {
      const shade = x < cx - w / 3 ? "#6b4f8c" : x > cx + w / 3 ? "#3a2a5c" : "#52407a";
      px.push([x, top + d, d === 3 ? "#7a5a3a" : shade]);
    }
  }
  return px;
}

// A small server rack with two LED rows; LEDs are drawn separately so they can blink.
function rack(x: number, y: number): Px[] {
  const px: Px[] = [];
  for (let j = 0; j < 12; j++) for (let i = 0; i < 8; i++) {
    const border = i === 0 || i === 7 || j === 0 || j === 11;
    px.push([x + i, y + j, border ? "#1b1f3a" : j % 4 === 3 ? "#2a3060" : "#3b4380"]);
  }
  return px;
}

// Kloudy the mascot: a round cloud with a face, drawn on its own 22x16 grid.
const KLOUDY = [
  "......XXXXXX..........",
  "....XXwwwwwwXX........",
  "...XwwwwwwwwwwX.XXX...",
  "..XwwwwwwwwwwwwXwwwX..",
  ".XXwwwwwwwwwwwwwwwwwX.",
  "XwwwwwwwwwwwwwwwwwwwwX",
  "XwwwwwEEwwwwwEEwwwwwwX",
  "XwwwwwEEwwwwwEEwwwwwwX",
  "XwwwppwwwwMMwwwwppwwwX",
  "XwwwwwwwwwwMMwwwwwwwwX",
  "XsswwwwwwwwwwwwwwwwssX",
  ".XsssssssssssssssssX..",
  "..XXXXXXXXXXXXXXXXX...",
];
const KCOL: Record<string, string> = { X: "#1b1f3a", w: "#f4f6ff", s: "#c9cff5", E: "#1b1f3a", p: "#ff9fc8", M: "#1b1f3a" };
function sprite(map: string[], colors: Record<string, string>, ox: number, oy: number): Px[] {
  const px: Px[] = [];
  map.forEach((row, y) => [...row].forEach((ch, x) => { if (colors[ch]) px.push([ox + x, oy + y, colors[ch]]); }));
  return px;
}

export default function PixelWorld() {
  const r = rng(7);
  const stars: Px[] = Array.from({ length: 70 }, () => [Math.floor(r() * W), Math.floor(r() * 60), r() > 0.8 ? "#ffe9a8" : "#dfe6ff"]);
  const skyBands = ["#140f33", "#1a1442", "#211a52", "#2a2063", "#342673", "#3f2c80", "#4b348a", "#563f93", "#5b4f9e", "#5662a6", "#4f78ad", "#4a8db3"];

  const farClouds = [...cloud(30, 74, 1.1, ["#8f86c9", "#7a71b8", "#6a61a6"]), ...cloud(120, 70, 1.3, ["#8f86c9", "#7a71b8", "#6a61a6"]), ...cloud(205, 76, 1, ["#8f86c9", "#7a71b8", "#6a61a6"])];
  const midClouds = [...cloud(70, 44, 0.9, ["#ffffff", "#e3e6ff", "#b9bdf0"]), ...cloud(175, 36, 0.75, ["#ffffff", "#e3e6ff", "#b9bdf0"])];
  const seaClouds: Px[] = [];
  for (let x = -40; x < W + 40; x++) {
    const h = 6 + Math.round(3 * Math.sin(x / 7) + 2 * Math.sin(x / 3.1));
    for (let y = H - h - 10; y < H; y++) seaClouds.push([x, y, y < H - h - 7 ? "#ffffff" : y < H - h - 2 ? "#dfe3ff" : "#b7bdf0"]);
  }

  const leds: { x: number; y: number; d: number; c: string }[] = [];
  [[24, 76], [33, 76], [188, 68], [198, 68]].forEach(([x, y], k) => [2, 6, 10].forEach((dy, j) => leds.push({ x: x + 2 + (j % 2) * 3, y: y + dy - 1, d: (k * 3 + j) * 0.37, c: j === 1 ? "#ffd23f" : "#4fe3c3" })));
  // Antenna tower on the right island.
  const tower: Px[] = [];
  for (let y = 54; y < 68; y++) tower.push([211, y, "#1b1f3a"]);
  tower.push([210, 56, "#1b1f3a"], [212, 56, "#1b1f3a"], [209, 59, "#1b1f3a"], [213, 59, "#1b1f3a"]);
  // Hanging cable (the route) between the islands; the data packet rides along it.
  const bridge: Px[] = [];
  for (let x = 70; x <= 176; x++) {
    const t = (x - 70) / 106;
    const y = Math.round(90 - 8 * t + 16 * Math.sin(Math.PI * t));
    if (x % 4 < 2) bridge.push([x, y, "#ffd23f"]);
  }
  // Little trees on the islands.
  const trees: Px[] = [];
  for (const [tx, ty] of [[180, 80], [214, 80]]) {
    trees.push([tx, ty - 1, "#7a5a3a"], [tx, ty - 2, "#7a5a3a"]);
    for (let j = 0; j < 4; j++) for (let i = -2 + Math.floor(j / 2); i <= 2 - Math.floor(j / 2); i++) trees.push([tx + i, ty - 3 - j, j < 2 ? "#2f9e6b" : "#5fe08f"]);
  }
  const kloudy = sprite(KLOUDY, KCOL, 44, 75);

  return (
    <svg className="kk-world" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      {skyBands.map((c, i) => <rect key={c} x={0} y={i * 9} width={W} height={10} fill={c} />)}
      <g className="kk-stars"><Rects pixels={stars.filter((_, i) => i % 2 === 0)} /></g>
      <g className="kk-stars kk-stars-b"><Rects pixels={stars.filter((_, i) => i % 2 === 1)} /></g>
      <rect x={196} y={14} width={10} height={10} fill="#fff4cc" />
      <rect x={195} y={16} width={12} height={6} fill="#fff4cc" />
      <rect x={198} y={13} width={6} height={12} fill="#fff4cc" />
      <rect x={200} y={16} width={2} height={2} fill="#f2dfa0" /><rect x={203} y={20} width={2} height={1} fill="#f2dfa0" />
      <g className="kk-drift-far"><Rects pixels={farClouds} /></g>
      <g className="kk-drift-mid"><Rects pixels={midClouds} /></g>
      <g className="kk-isle kk-isle-a"><Rects pixels={[...island(46, 88, 24, 16), ...rack(24, 76), ...rack(33, 76)]} /></g>
      <g className="kk-isle kk-isle-b"><Rects pixels={[...island(196, 80, 19, 14), ...rack(188, 68), ...rack(198, 68), ...tower, ...trees]} /><rect className="kk-beacon" x={211} y={53} width={1} height={1} fill="#ff5c8a" /></g>
      <g className="kk-bridge"><Rects pixels={bridge} /></g>
      {leds.map((l, i) => <rect key={i} className="kk-led" style={{ animationDelay: `${l.d}s` }} x={l.x} y={l.y} width={2} height={1} fill={l.c} />)}
      <rect className="kk-packet" x={69} y={88} width={3} height={3} fill="#4fe3c3" />
      <g className="kk-kloudy"><Rects pixels={kloudy} /><rect className="kk-blink" x={50} y={81} width={2} height={2} fill="#f4f6ff" /><rect className="kk-blink" x={57} y={81} width={2} height={2} fill="#f4f6ff" /></g>
      <g className="kk-drift-sea"><Rects pixels={seaClouds} /></g>
    </svg>
  );
}

/** Short pixel-sky strip used behind every inner page title, so the whole site lives in one world. */
export function PixelBanner({ seed = 3 }: { seed?: number }) {
  const BW = 240, BH = 60;
  const r = rng(seed);
  const stars: Px[] = Array.from({ length: 34 }, () => [Math.floor(r() * BW), Math.floor(r() * 34), r() > 0.8 ? "#ffe9a8" : "#dfe6ff"]);
  const bands = ["#140f33", "#1a1442", "#211a52", "#2a2063", "#342673", "#3f2c80", "#4b348a"];
  const cx = 30 + Math.floor(r() * 50), cx2 = 150 + Math.floor(r() * 50);
  const clouds = [...cloud(cx, 26, 0.55, ["#ffffff", "#e3e6ff", "#b9bdf0"]), ...cloud(cx2, 20, 0.45, ["#ffffff", "#e3e6ff", "#b9bdf0"])];
  const sea: Px[] = [];
  for (let x = -40; x < BW + 40; x++) {
    const h = 5 + Math.round(2 * Math.sin((x + seed * 9) / 6) + 1.5 * Math.sin(x / 2.7));
    for (let y = BH - h; y < BH; y++) sea.push([x, y, y < BH - h + 2 ? "#e9e6ff" : "#b7aee8"]);
  }
  return (
    <svg className="kk-banner-art" viewBox={`0 0 ${BW} ${BH}`} preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      {bands.map((c, i) => <rect key={c} x={0} y={i * 9} width={BW} height={10} fill={c} />)}
      <g className="kk-stars"><Rects pixels={stars.filter((_, i) => i % 2 === 0)} /></g>
      <g className="kk-stars kk-stars-b"><Rects pixels={stars.filter((_, i) => i % 2 === 1)} /></g>
      <g className="kk-drift-mid"><Rects pixels={clouds} /></g>
      <g className="kk-drift-sea"><Rects pixels={sea} /></g>
    </svg>
  );
}

const MARK = [
  "......XXXX......",
  "....XXwwwwXX....",
  "...XwwwwwwwwXXX.",
  ".XXwwwwwwwwwwwwX",
  "XwwwwwwwwwwwwwwX",
  "XwwwEwwwwwwEwwwX",
  "XwwwEwwwwwwEwwwX",
  "XwpwwwwMMwwwwpwX",
  "XsswwwwwwwwwwssX",
  ".XXXXXXXXXXXXXX.",
];
const MCOL: Record<string, string> = { X: "#1b1f3a", w: "#ffffff", s: "#d7d2ff", E: "#1b1f3a", p: "#ff8fbd", M: "#1b1f3a" };

/** Pixel brand mark: Kloudy on a sun-yellow tile. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg className="kk-logo-mark" viewBox="0 0 20 16" width={size} height={size * 0.8} shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <rect x={1} y={0} width={18} height={16} fill="#1b1f3a" />
      <rect x={0} y={1} width={20} height={14} fill="#1b1f3a" />
      <rect x={1} y={1} width={18} height={14} fill="#ffd23f" />
      <rect x={1} y={13} width={18} height={2} fill="#e0a800" />
      <Rects pixels={sprite(MARK, MCOL, 2, 2)} />
    </svg>
  );
}
