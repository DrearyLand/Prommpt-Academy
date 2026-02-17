import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 md:mt-32 lg:mt-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-xl tracking-tight text-gray-900 mb-6">
              Prompt Academy
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Soluciones educativas de IA para instituciones que buscan preparar a sus estudiantes para el futuro digital.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7 lg:col-start-7">
            <h4 className="text-xs tracking-widest text-gray-900 mb-6">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs tracking-widest text-gray-900 mb-6">
              CONTACTO
            </h4>
            <ul className="space-y-4">
              <li className="text-sm text-gray-600">
                instituciones@promptacademy.com
              </li>
              <li className="text-sm text-gray-600">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 md:mt-16 pt-8">
          <p className="text-xs tracking-wide text-gray-500">
            © 2026 Prompt Academy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}