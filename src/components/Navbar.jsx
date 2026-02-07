import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm ${
      isActive ? "bg-zinc-800" : "hover:bg-zinc-900"
    }`;

  return (
    <div className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-wide">
          Local<span className="text-emerald-400">Explorer</span>
        </Link>

        <div className="flex gap-2">
          <NavLink to="/explore" className={linkClass}>Explore</NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
          <NavLink to="/register" className={linkClass}>Register</NavLink>
          <NavLink to="/profile" className={linkClass}>Profile</NavLink>
        </div>
      </div>
    </div>
  );
}
