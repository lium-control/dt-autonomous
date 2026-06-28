import { Link } from "react-router-dom";

export default function ButtonLink({ to, href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
      : "border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10";

  if (href) {
    return (
      <a className={`${base} ${styles}`} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles}`} to={to}>
      {children}
    </Link>
  );
}
