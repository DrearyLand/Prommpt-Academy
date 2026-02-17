import { Navigation } from "../components/Navigation";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h1 className="text-3xl md:text-4xl tracking-tight text-gray-900 mb-6">
              Agenda una consultoría
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-12 md:mb-16">
              ¿Interesado en implementar programas de IA en tu institución? 
              Agenda una sesión de consultoría sin costo donde analizaremos 
              tus necesidades específicas.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-2">
                    EMAIL
                  </p>
                  <p className="text-sm text-gray-900">
                    instituciones@promptacademy.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-2">
                    TELÉFONO
                  </p>
                  <p className="text-sm text-gray-900">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Lun-Vie 9:00-18:00 CET
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-2">
                    OFICINA
                  </p>
                  <p className="text-sm text-gray-900">
                    Barcelona, España
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs tracking-widest text-gray-900 mb-3"
                  >
                    NOMBRE COMPLETO
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="position" 
                    className="block text-xs tracking-widest text-gray-900 mb-3"
                  >
                    CARGO
                  </label>
                  <input
                    type="text"
                    id="position"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="Director, Decano, etc."
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="institution" 
                  className="block text-xs tracking-widest text-gray-900 mb-3"
                >
                  <Building2 className="w-4 h-4 inline mr-2" />
                  INSTITUCIÓN
                </label>
                <input
                  type="text"
                  id="institution"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="Nombre de la universidad o institución"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-xs tracking-widest text-gray-900 mb-3"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="tu@institucion.edu"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-xs tracking-widest text-gray-900 mb-3"
                  >
                    TELÉFONO
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="students" 
                  className="block text-xs tracking-widest text-gray-900 mb-3"
                >
                  NÚMERO DE ESTUDIANTES
                </label>
                <select
                  id="students"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors bg-white"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="50-200">50-200 estudiantes</option>
                  <option value="200-500">200-500 estudiantes</option>
                  <option value="500-1000">500-1.000 estudiantes</option>
                  <option value="1000-5000">1.000-5.000 estudiantes</option>
                  <option value="5000+">Más de 5.000 estudiantes</option>
                </select>
              </div>
              
              <div>
                <label 
                  htmlFor="interest" 
                  className="block text-xs tracking-widest text-gray-900 mb-3"
                >
                  PROGRAMA DE INTERÉS
                </label>
                <select
                  id="interest"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors bg-white"
                >
                  <option value="">Selecciona un programa</option>
                  <option value="foundation">Programa Foundation</option>
                  <option value="advanced">Programa Advanced</option>
                  <option value="enterprise">Solución Enterprise</option>
                  <option value="custom">Solución personalizada</option>
                </select>
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs tracking-widest text-gray-900 mb-3"
                >
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tus necesidades y objetivos..."
                />
              </div>
              
              <Button 
                variant="primary"
                name="btn_primary_enviar"
                className="w-full md:w-auto"
              >
                Solicitar consultoría gratuita
              </Button>
              
              <p className="text-xs text-gray-500 leading-relaxed">
                Al enviar este formulario, aceptas que Prompt Academy se ponga en 
                contacto contigo para discutir soluciones educativas. Respondemos 
                típicamente en menos de 24 horas hábiles.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-12 md:mb-16">
            Preguntas frecuentes
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3 md:mb-4">
                ¿Cuánto tiempo toma implementar un programa?
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                El tiempo de implementación varía según el alcance. Un programa 
                Foundation puede estar operativo en 4-6 semanas, mientras que 
                una Solución Enterprise completa toma 3-4 meses. Incluimos 
                capacitación docente y migración de contenido.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3 md:mb-4">
                ¿Ofrecen programas en otros idiomas?
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                Sí, nuestros programas están disponibles en español, inglés, y 
                portugués. También podemos adaptar contenido a otros idiomas 
                para implementaciones de gran escala.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3 md:mb-4">
                ¿Qué infraestructura técnica necesitamos?
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                Nuestros programas son cloud-based y no requieren infraestructura 
                especial. Solo necesitas conexión a internet. Nos integramos con 
                LMS existentes (Canvas, Moodle, Blackboard) o proporcionamos 
                nuestra propia plataforma.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-3 md:mb-4">
                ¿Cómo funcionan los precios por volumen?
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                Ofrecemos descuentos progresivos basados en el número de 
                estudiantes. También tenemos modelos de licenciamiento anual 
                y multi-año con mejores tarifas. Agenda una consultoría para 
                recibir una cotización personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
