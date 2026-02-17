import { Navigation } from "../components/Navigation";
import { TipCard } from "../components/TipCard";
import { Footer } from "../components/Footer";
import { tips } from "../data/tips";

export function Tips() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="mb-12 md:mb-20">
          <h1 className="text-3xl md:text-4xl tracking-tight text-gray-900 mb-6">
            Recursos institucionales
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Guías estratégicas, mejores prácticas, y casos de estudio para 
            implementar exitosamente programas de IA en tu institución educativa.
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
      
      <Footer />
    </div>
  );
}