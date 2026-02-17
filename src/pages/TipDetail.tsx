import { useParams, Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { tips } from "../data/tips";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TipDetail() {
  const { id } = useParams();
  const tip = tips.find(t => t.id === id);
  
  if (!tip) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-32">
          <p className="text-gray-600">Recurso no encontrado</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <article className="max-w-screen-lg mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <Link 
          to="/tips" 
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-8 md:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Recursos
        </Link>
        
        <div className="mb-8 md:mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-4 md:mb-6">
            {tip.category}
          </p>
          
          <h1 className="text-3xl md:text-4xl tracking-tight text-gray-900 mb-4 md:mb-6">
            {tip.title}
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            {tip.description}
          </p>
        </div>
        
        <div className="aspect-[16/9] overflow-hidden bg-gray-100 mb-12 md:mb-16">
          <ImageWithFallback 
            src={tip.image} 
            alt={tip.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
            {tip.content}
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}