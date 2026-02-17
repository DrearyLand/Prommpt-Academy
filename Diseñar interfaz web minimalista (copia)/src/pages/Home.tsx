import { Navigation } from "../components/Navigation";
import { Button } from "../components/Button";
import { TipCard } from "../components/TipCard";
import { Footer } from "../components/Footer";
import { tips } from "../data/tips";
import { GraduationCap, Users, Award, TrendingUp } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          <div className="lg:col-span-9">
            <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6 md:mb-8 leading-tight">
              Transforma tu institución
              <br />
              con educación en IA
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8 md:mb-12 max-w-2xl">
              Programas completos de Prompt Engineering y IA para universidades, 
              escuelas de negocios, y centros de formación profesional. Prepara 
              a tus estudiantes para el futuro digital.
            </p>
            
            <Button 
              to="/cursos" 
              variant="primary"
              name="btn_primary_explorar"
            >
              Ver programas institucionales
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-gray-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-2">15.000+</p>
            <p className="text-sm text-gray-600">Estudiantes formados</p>
          </div>
          
          <div>
            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-2">120+</p>
            <p className="text-sm text-gray-600">Instituciones partner</p>
          </div>
          
          <div>
            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-2">92%</p>
            <p className="text-sm text-gray-600">Tasa de certificación</p>
          </div>
          
          <div>
            <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-2">+35%</p>
            <p className="text-sm text-gray-600">Aumento en empleabilidad</p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-6">
              Por qué las instituciones nos eligen
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              Más de 120 universidades y centros de formación confían en nuestros 
              programas para preparar a sus estudiantes en competencias de IA.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3">
                Implementación llave en mano
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Plataforma LMS integrada, material didáctico completo, capacitación 
                docente, y soporte técnico dedicado. Todo lo necesario para empezar 
                desde el día uno.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3">
                ROI comprobado
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Instituciones reportan 35% de incremento en solicitudes de ingreso 
                y 40% de mejora en empleabilidad de egresados. ROI promedio de 450% 
                en 3 años.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3">
                Flexibilidad curricular
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Adaptamos los programas a tu curriculum existente. Desde módulos 
                independientes hasta programas completos de certificación. Sin 
                necesidad de reestructuración institucional.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3">
                Actualización continua
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                El campo de la IA evoluciona rápidamente. Incluimos actualizaciones 
                de contenido, nuevos casos de estudio, y acceso a las últimas 
                herramientas y técnicas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 border-t border-gray-200">
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-4">
            Recursos para instituciones
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Guías y mejores prácticas para implementar IA en tu institución educativa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tips.map((tip) => (
            <div key={tip.id}>
              <TipCard {...tip} />
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 border-t border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 mb-6 md:mb-8">
            Preparemos juntos a la próxima generación
          </h2>
          
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8 md:mb-12">
            Agenda una consultoría sin costo para conocer cómo podemos adaptar 
            nuestros programas a las necesidades específicas de tu institución.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              to="/contacto" 
              variant="primary"
              name="btn_primary_contacto"
            >
              Agendar consultoría
            </Button>
            <Button 
              to="/cursos" 
              variant="secondary"
              name="btn_secondary_programas"
            >
              Ver todos los programas
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
