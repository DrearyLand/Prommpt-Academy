import { Link } from "react-router";

interface ProgressCardProps {
  colaborador: {
    id: number;
    nombre: string;
    progreso: number;
    modulosCompletados: number;
    modulosTotales: number;
    ultimaActividad: string;
    status: string;
    badge: string;
  };
}

export function ProgressCard({ colaborador }: ProgressCardProps) {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "high-performer":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "on-track":
        return "bg-gray-50 text-gray-700 border-gray-200";
      case "needs-attention":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case "completed":
        return "Certificado";
      case "high-performer":
        return "Alto rendimiento";
      case "on-track":
        return "En progreso";
      case "needs-attention":
        return "Requiere atención";
      default:
        return "En progreso";
    }
  };

  return (
    <div className="border border-gray-200 p-6 transition-all duration-300 hover:border-gray-900">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg tracking-tight text-gray-900 mb-1">
            {colaborador.nombre}
          </h3>
          <p className="text-xs text-gray-500">
            {colaborador.ultimaActividad}
          </p>
        </div>
        <span className={`text-xs tracking-widest border px-3 py-1 ${getBadgeColor(colaborador.badge)}`}>
          {getBadgeText(colaborador.badge)}
        </span>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs tracking-widest text-gray-500">PROGRESO</span>
          <span className="text-sm text-gray-900">{colaborador.progreso}%</span>
        </div>
        <div className="w-full bg-gray-100 h-2">
          <div 
            className="bg-gray-900 h-2 transition-all duration-500"
            style={{ width: `${colaborador.progreso}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>
          {colaborador.modulosCompletados} de {colaborador.modulosTotales} módulos
        </span>
        <span className="text-xs tracking-widest text-gray-500">
          {colaborador.status}
        </span>
      </div>
    </div>
  );
}
