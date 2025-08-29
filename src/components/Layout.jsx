// src/components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/items">Items</Link>
            <Link to="/items/new">Nuevo Item</Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Aquí se carga el contenido dinámico */}
      </main>

      <footer>
        <p>© 2025 Mi App</p>
      </footer>
    </div>
  );
}

export default Layout;
