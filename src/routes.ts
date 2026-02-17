import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Cursos } from "./pages/Cursos";
import { Tips } from "./pages/Tips";
import { Contacto } from "./pages/Contacto";
import { TipDetail } from "./pages/TipDetail";
import { CursoDetail } from "./pages/CursoDetail";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/cursos",
    Component: Cursos,
  },
  {
    path: "/cursos/:id",
    Component: CursoDetail,
  },
  {
    path: "/tips",
    Component: Tips,
  },
  {
    path: "/tips/:id",
    Component: TipDetail,
  },
  {
    path: "/contacto",
    Component: Contacto,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);