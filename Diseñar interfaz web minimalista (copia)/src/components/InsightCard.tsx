import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

interface InsightCardProps {
  tipo: "positive" | "warning" | "info" | "error";
  titulo: string;
  descripcion: string;
}

export function InsightCard({ tipo, titulo, descripcion }: InsightCardProps) {
  const getConfig = () => {
    switch (tipo) {
      case "positive":
        return {
          icon: <CheckCircle className="w-5 h-5" />,
          color: "text-green-700",
          bg: "bg-green-50",
          border: "border-green-200"
        };
      case "warning":
        return {
          icon: <AlertTriangle className="w-5 h-5" />,
          color: "text-yellow-700",
          bg: "bg-yellow-50",
          border: "border-yellow-200"
        };
      case "info":
        return {
          icon: <Info className="w-5 h-5" />,
          color: "text-blue-700",
          bg: "bg-blue-50",
          border: "border-blue-200"
        };
      case "error":
        return {
          icon: <AlertCircle className="w-5 h-5" />,
          color: "text-red-700",
          bg: "bg-red-50",
          border: "border-red-200"
        };
      default:
        return {
          icon: <Info className="w-5 h-5" />,
          color: "text-gray-700",
          bg: "bg-gray-50",
          border: "border-gray-200"
        };
    }
  };

  const config = getConfig();

  return (
    <div className={`border ${config.border} ${config.bg} p-4 md:p-6`}>
      <div className="flex items-start gap-3">
        <div className={config.color}>
          {config.icon}
        </div>
        <div className="flex-1">
          <h4 className={`text-sm tracking-tight ${config.color} mb-2`}>
            {titulo}
          </h4>
          <p className="text-xs leading-relaxed text-gray-600">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}
