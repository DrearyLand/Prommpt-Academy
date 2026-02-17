import { Link } from "react-router";

interface CursoCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

export function CursoCard({ id, title, description, duration, level }: CursoCardProps) {
  return (
    <Link 
      to={`/cursos/${id}`}
      className="group block border border-gray-200 p-6 md:p-8 lg:p-12 transition-all duration-300 hover:border-gray-900"
      data-name={`card_curso_${id}`}
    >
      <div className="flex items-start justify-between mb-6 md:mb-8">
        <span className="text-xs tracking-widest text-gray-500">
          {level}
        </span>
        <span className="text-xs tracking-widest text-gray-500">
          {duration}
        </span>
      </div>
      
      <h3 className="text-lg md:text-xl tracking-tight text-gray-900 mb-4 md:mb-6">
        {title}
      </h3>
      
      <p className="text-sm leading-relaxed text-gray-600 mb-6 md:mb-8">
        {description}
      </p>
      
      <span className="text-xs tracking-widest text-gray-900 group-hover:underline">
        VER DETALLES →
      </span>
    </Link>
  );
}