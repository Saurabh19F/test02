import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Explore from "../pages/Explore";
import PlaceDetails from "../pages/PlaceDetails";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/explore", element: <Explore /> },
  { path: "/places/:id", element: <PlaceDetails /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <NotFound /> },
];
