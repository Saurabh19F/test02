import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
