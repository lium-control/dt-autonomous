import { motion } from "motion/react";
import { Plane, Car, Waves, Dog, Cpu, Route } from "lucide-react";

const nodes = [
  { icon: Car, label: "UGV / AV", className: "left-4 top-14" },
  { icon: Plane, label: "UAV", className: "right-8 top-24" },
  { icon: Waves, label: "USV", className: "bottom-16 left-16" },
  { icon: Dog, label: "Quadruped", className: "bottom-12 right-8" },
  { icon: Route, label: "Planning", className: "left-1/2 top-3 -translate-x-1/2" },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[520px] max-w-[560px]">
      <motion.div
        className="hero-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />
      <div className="orbit left-[8%] top-[18%] h-[320px] w-[470px]" />
      <div className="orbit left-[18%] top-[8%] h-[420px] w-[380px] rotate-45" />

      <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-cyan-200/30 bg-slate-950/70 shadow-[0_0_70px_rgba(34,211,238,0.25)] backdrop-blur-xl scanline overflow-hidden">
        <div className="text-center">
          <Cpu className="mx-auto mb-3 text-cyan-200" size={38} />
          <div className="text-xs uppercase tracking-[0.24em] text-slate-300">Digital</div>
          <div className="text-2xl font-semibold text-white neon-text">Twin</div>
        </div>
      </div>

      {nodes.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            className={`absolute z-20 ${item.className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18 * index, duration: 0.5 }}
          >
            <div className="float rounded-2xl border border-white/15 bg-slate-950/65 px-4 py-3 shadow-2xl backdrop-blur-xl">
              <Icon className="mb-2 text-cyan-200" size={22} />
              <div className="text-xs font-semibold text-white">{item.label}</div>
            </div>
          </motion.div>
        );
      })}

      <svg className="absolute inset-0 z-0 h-full w-full opacity-70" viewBox="0 0 560 520" fill="none">
        <path d="M95 155 C190 120 230 260 280 260" stroke="url(#g1)" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M445 165 C380 120 340 250 280 260" stroke="url(#g1)" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M150 390 C225 360 235 280 280 260" stroke="url(#g2)" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M430 395 C365 350 340 285 280 260" stroke="url(#g2)" strokeWidth="2" strokeDasharray="8 10" />
        <defs>
          <linearGradient id="g1" x1="80" y1="100" x2="460" y2="280">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="g2" x1="120" y1="400" x2="440" y2="260">
            <stop stopColor="#34d399" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
