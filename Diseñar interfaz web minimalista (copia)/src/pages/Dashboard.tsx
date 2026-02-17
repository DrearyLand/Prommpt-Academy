import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { MetricCard } from "../components/MetricCard";
import { ProgressCard } from "../components/ProgressCard";
import { InsightCard } from "../components/InsightCard";
import { colaboradores, metricas, actividadReciente, datosGrafico, insights } from "../data/dashboard";
import { TrendingUp, Users, Award, Clock, Calendar, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-2">
              Dashboard de Mejora Continua
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Introducción a IA - Seguimiento en tiempo real
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Actualizado: Hoy, 14:35</span>
          </div>
        </div>
      </section>

      {/* Métricas Globales */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-gray-200">
        <h2 className="text-xs tracking-widest text-gray-500 mb-6 md:mb-8">
          MÉTRICAS GLOBALES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <MetricCard
            label="PROGRESO GLOBAL"
            value={`${metricas.progresoGlobal}%`}
            icon={<Target className="w-5 h-5 text-gray-600" />}
          />
          <MetricCard
            label="CERTIFICADOS"
            value={`${metricas.colaboradoresCertificados}/${metricas.colaboradoresTotales}`}
            subtitle={`${metricas.tasaCompletacion}% completado`}
            icon={<Award className="w-5 h-5 text-gray-600" />}
          />
          <MetricCard
            label="PROMEDIO CALIFICACIONES"
            value={metricas.promedioCalificaciones}
            subtitle="Sobre 100 puntos"
            icon={<TrendingUp className="w-5 h-5 text-gray-600" />}
          />
          <MetricCard
            label="TIEMPO SEMANAL"
            value={metricas.tiempoPromedioSemanal}
            subtitle="Por colaborador"
            icon={<Clock className="w-5 h-5 text-gray-600" />}
          />
          <MetricCard
            label="COLABORADORES"
            value={metricas.colaboradoresTotales}
            subtitle="Activos en el programa"
            icon={<Users className="w-5 h-5 text-gray-600" />}
          />
          <MetricCard
            label="FECHA FIN ESTIMADA"
            value={metricas.fechaEstimadaFin}
            subtitle={`Inicio: ${metricas.fechaInicio}`}
            icon={<Calendar className="w-5 h-5 text-gray-600" />}
          />
        </div>
      </section>

      {/* Gráfico de Progreso */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-gray-200">
        <h2 className="text-xs tracking-widest text-gray-500 mb-6 md:mb-8">
          EVOLUCIÓN SEMANAL DEL PROGRESO
        </h2>
        <div className="border border-gray-200 p-6 md:p-8">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={datosGrafico}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="semana" 
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0',
                  fontSize: '12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '12px' }}
              />
              <Line 
                type="monotone" 
                dataKey="Ezzat" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="Emilio" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={{ fill: '#10B981', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="José" 
                stroke="#F59E0B" 
                strokeWidth={2}
                dot={{ fill: '#F59E0B', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="Alberto" 
                stroke="#EF4444" 
                strokeWidth={2}
                dot={{ fill: '#EF4444', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="Camila" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="Fiona" 
                stroke="#EC4899" 
                strokeWidth={2}
                dot={{ fill: '#EC4899', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Progreso Individual */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-gray-200">
        <h2 className="text-xs tracking-widest text-gray-500 mb-6 md:mb-8">
          PROGRESO INDIVIDUAL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colaboradores.map((colaborador) => (
            <ProgressCard key={colaborador.id} colaborador={colaborador} />
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-gray-200">
        <h2 className="text-xs tracking-widest text-gray-500 mb-6 md:mb-8">
          INSIGHTS Y RECOMENDACIONES
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </section>

      {/* Actividad Reciente */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <h2 className="text-xs tracking-widest text-gray-500 mb-6 md:mb-8">
          ACTIVIDAD RECIENTE
        </h2>
        <div className="border border-gray-200">
          {actividadReciente.map((actividad, index) => (
            <div 
              key={index} 
              className={`p-6 flex items-start gap-4 ${
                index !== actividadReciente.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{actividad.colaborador}</span> {actividad.accion}
                  </p>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {actividad.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detalles del Curso */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs tracking-widest text-gray-500 mb-6">
              MÓDULOS DEL PROGRAMA
            </h2>
            <div className="space-y-4">
              {[
                "Introducción a la IA y modelos de lenguaje",
                "Anatomía de un prompt efectivo",
                "Técnicas de contexto y especificidad",
                "Formatos de salida y estructuración",
                "Casos prácticos aplicados a la industria",
                "Evaluación y certificación"
              ].map((modulo, index) => (
                <div key={index} className="flex items-start gap-4 border border-gray-200 p-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-600">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700 pt-1">
                    {modulo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs tracking-widest text-gray-500 mb-6">
              INFORMACIÓN DEL PROGRAMA
            </h2>
            <div className="border border-gray-200 p-6 space-y-6">
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  NOMBRE DEL CURSO
                </p>
                <p className="text-sm text-gray-900">
                  Programa Foundation: Introducción a IA
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  DURACIÓN
                </p>
                <p className="text-sm text-gray-900">
                  8 semanas
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  NIVEL
                </p>
                <p className="text-sm text-gray-900">
                  BÁSICO
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  INVERSIÓN
                </p>
                <p className="text-sm text-gray-900">
                  $5,000 MXN por colaborador
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  DEPARTAMENTO
                </p>
                <p className="text-sm text-gray-900">
                  Mejora Continua
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  FECHA DE INICIO
                </p>
                <p className="text-sm text-gray-900">
                  {metricas.fechaInicio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}