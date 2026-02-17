import { useParams, Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { cursos } from "../data/cursos";
import { ArrowLeft, Clock, TrendingUp, Check, Users } from "lucide-react";

export function CursoDetail() {
  const { id } = useParams();
  const curso = cursos.find(c => c.id === id);
  
  if (!curso) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-32">
          <p className="text-gray-600">Programa no encontrado</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <article className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <Link 
          to="/cursos" 
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-8 md:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Programas
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-8 md:mb-12">
              <p className="text-xs tracking-widest text-gray-500 mb-4 md:mb-6">
                {curso.level}
              </p>
              
              <h1 className="text-3xl md:text-4xl tracking-tight text-gray-900 mb-6 md:mb-8">
                {curso.title}
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8 md:mb-12">
                {curso.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {curso.duration}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {curso.level}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {curso.students}
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12 md:mb-16">
              <div className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
                {curso.details}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl md:text-2xl tracking-tight text-gray-900 mb-6 md:mb-8">
                Módulos del programa
              </h2>
              
              <div className="space-y-4">
                {curso.modules.map((module, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 border border-gray-200 p-4 md:p-6"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xs text-gray-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700 pt-1">
                      {module}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="border border-gray-200 p-6 md:p-8 lg:sticky lg:top-8">
              <div className="mb-6 md:mb-8">
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  INVERSIÓN
                </p>
                <p className="text-2xl md:text-3xl tracking-tight text-gray-900">
                  {curso.price}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Precios por volumen disponibles
                </p>
              </div>
              
              <Button 
                to="/contacto"
                variant="primary" 
                className="w-full mb-4 md:mb-6"
                name="btn_primary_solicitar_info"
              >
                Solicitar información
              </Button>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs tracking-widest text-gray-900 mb-4">
                  INCLUYE
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Plataforma LMS completa
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Material didáctico y recursos
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Capacitación para docentes
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Soporte técnico dedicado
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Certificaciones oficiales
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Portal administrativo
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Actualizaciones incluidas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
