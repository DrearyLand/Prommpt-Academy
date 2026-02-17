import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TipCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export function TipCard({ id, title, description, image, category }: TipCardProps) {
  return (
    <Link 
      to={`/tips/${id}`} 
      className="group block border border-gray-200 transition-all duration-300 hover:border-gray-900"
      data-name={`card_tip_${id}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 md:p-8 lg:p-12">
        <p className="text-xs tracking-widest text-gray-500 mb-4 md:mb-6">
          {category}
        </p>
        
        <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-4 md:mb-6">
          {title}
        </h3>
        
        <p className="text-sm leading-relaxed text-gray-600 mb-6 md:mb-8">
          {description}
        </p>
        
        <span className="text-xs tracking-widest text-gray-900 group-hover:underline">
          LEER MÁS →
        </span>
      </div>
    </Link>
  );
}