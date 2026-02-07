import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Discover places near you 🌍</h1>
      <p className="text-zinc-400">
        Hyperlocal discovery + social feed + maps (coming next).
      </p>
      <Link
        to="/explore"
        className="inline-block bg-emerald-500 text-black px-4 py-2 rounded-lg font-semibold"
      >
        Start Exploring
      </Link>
    </div>
  );
}
