import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/roadmap", label: "Roadmap" },
  { path: "/platforms", label: "Platforms" },
  { path: "/projects", label: "Projects" },
  { path: "/publications", label: "Publications" },
  { path: "/gallery", label: "Gallery" },
  { path: "/resources", label: "Resources" },
  { path: "/team", label: "Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm transition ${
      isActive
        ? "bg-cyan-400/15 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.16)]"
        : "text-slate-300 hover:bg-white/8 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/30">
            <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-cyan-300 to-violet-400 opacity-80 blur-[1px]" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.22em] text-cyan-100">DT-AUS</div>
            <div className="-mt-1 text-[11px] text-slate-400">Digital Twin Lab Showcase</div>
          </div>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
