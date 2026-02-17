import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg md:text-xl tracking-tight text-gray-900">
            Prompt Academy
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 lg:gap-12">
            <Link 
              to="/" 
              className={`text-sm tracking-wide transition-colors ${
                isActive("/") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/cursos" 
              className={`text-sm tracking-wide transition-colors ${
                isActive("/cursos") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Programas
            </Link>
            <Link 
              to="/tips" 
              className={`text-sm tracking-wide transition-colors ${
                isActive("/tips") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Recursos
            </Link>
            <Link 
              to="/contacto" 
              className={`text-sm tracking-wide transition-colors ${
                isActive("/contacto") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Contacto
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm tracking-wide transition-colors ${
                isActive("/dashboard") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Dashboard
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-2 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm tracking-wide transition-colors ${
                isActive("/") 
                  ? "text-gray-900" 
                  : "text-gray-500"
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/cursos" 
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm tracking-wide transition-colors ${
                isActive("/cursos") 
                  ? "text-gray-900" 
                  : "text-gray-500"
              }`}
            >
              Programas
            </Link>
            <Link 
              to="/tips" 
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm tracking-wide transition-colors ${
                isActive("/tips") 
                  ? "text-gray-900" 
                  : "text-gray-500"
              }`}
            >
              Recursos
            </Link>
            <Link 
              to="/contacto" 
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm tracking-wide transition-colors ${
                isActive("/contacto") 
                  ? "text-gray-900" 
                  : "text-gray-500"
              }`}
            >
              Contacto
            </Link>
            <Link 
              to="/dashboard" 
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm tracking-wide transition-colors ${
                isActive("/dashboard") 
                  ? "text-gray-900" 
                  : "text-gray-500"
              }`}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}