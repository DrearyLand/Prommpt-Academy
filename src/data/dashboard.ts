export const colaboradores = [
  {
    id: 1,
    nombre: "Ezzat",
    progreso: 87,
    modulosCompletados: 5,
    modulosTotales: 6,
    tiempoPromedio: "2.5h",
    ultimaActividad: "Hace 3 horas",
    evaluaciones: [
      { modulo: "Módulo 1", calificacion: 95 },
      { modulo: "Módulo 2", calificacion: 88 },
      { modulo: "Módulo 3", calificacion: 92 },
      { modulo: "Módulo 4", calificacion: 85 },
      { modulo: "Módulo 5", calificacion: 90 }
    ],
    status: "En progreso",
    badge: "high-performer"
  },
  {
    id: 2,
    nombre: "Emilio",
    progreso: 100,
    modulosCompletados: 6,
    modulosTotales: 6,
    tiempoPromedio: "3.2h",
    ultimaActividad: "Hace 1 día",
    evaluaciones: [
      { modulo: "Módulo 1", calificacion: 92 },
      { modulo: "Módulo 2", calificacion: 95 },
      { modulo: "Módulo 3", calificacion: 98 },
      { modulo: "Módulo 4", calificacion: 90 },
      { modulo: "Módulo 5", calificacion: 94 },
      { modulo: "Módulo 6", calificacion: 96 }
    ],
    status: "Completado",
    badge: "completed"
  },
  {
    id: 3,
    nombre: "José",
    progreso: 67,
    modulosCompletados: 4,
    modulosTotales: 6,
    tiempoPromedio: "2.8h",
    ultimaActividad: "Hace 5 horas",
    evaluaciones: [
      { modulo: "Módulo 1", calificacion: 85 },
      { modulo: "Módulo 2", calificacion: 78 },
      { modulo: "Módulo 3", calificacion: 88 },
      { modulo: "Módulo 4", calificacion: 82 }
    ],
    status: "En progreso",
    badge: "on-track"
  },
  {
    id: 4,
    nombre: "Alberto",
    progreso: 50,
    modulosCompletados: 3,
    modulosTotales: 6,
    tiempoPromedio: "3.5h",
    ultimaActividad: "Hace 2 días",
    evaluaciones: [
      { modulo: "Módulo 1", calificacion: 88 },
      { modulo: "Módulo 2", calificacion: 82 },
      { modulo: "Módulo 3", calificacion: 85 }
    ],
    status: "En progreso",
    badge: "needs-attention"
  },
  {
    id: 5,
    nombre: "Camila",
    progreso: 83,
    modulosCompletados: 5,
    modulosTotales: 6,
    tiempoPromedio: "2.1h",
    ultimaActividad: "Hace 4 horas",
    evaluaciones: [
      { modulo: "Módulo 1", calificacion: 97 },
      { modulo: "Módulo 2", calificacion: 93 },
      { modulo: "Módulo 3", calificacion: 95 },
      { modulo: "Módulo 4", calificacion: 91 },
      { modulo: "Módulo 5", calificacion: 98 }
    ],
    status: "En progreso",
    badge: "high-performer"
  },
  {
    id: 6,
    nombre: "Fiona",
    progreso: 100,
    modulosCompletados: 6,
    modulosTotales: 6,
    tiempoPromedio: "2.4h",
    ultimaActividad: "Hace 6 horas",
    evaluaciones: [
      { modulo: "Módulo 1", calificacion: 98 },
      { modulo: "Módulo 2", calificacion: 96 },
      { modulo: "Módulo 3", calificacion: 99 },
      { modulo: "Módulo 4", calificacion: 94 },
      { modulo: "Módulo 5", calificacion: 97 },
      { modulo: "Módulo 6", calificacion: 100 }
    ],
    status: "Completado",
    badge: "completed"
  }
];

export const metricas = {
  progresoGlobal: 81,
  colaboradoresCertificados: 2,
  colaboradoresTotales: 6,
  promedioCalificaciones: 92,
  tiempoPromedioSemanal: "2.7h",
  tasaCompletacion: 33,
  modulosDisponibles: 6,
  fechaInicio: "15 Ene 2026",
  fechaEstimadaFin: "15 Mar 2026"
};

export const actividadReciente = [
  {
    colaborador: "Ezzat",
    accion: "Completó Módulo 5: Casos prácticos",
    timestamp: "Hace 3 horas",
    tipo: "completion"
  },
  {
    colaborador: "Camila",
    accion: "Obtuvo 98 en Evaluación Módulo 5",
    timestamp: "Hace 4 horas",
    tipo: "achievement"
  },
  {
    colaborador: "José",
    accion: "Inició Módulo 5",
    timestamp: "Hace 5 horas",
    tipo: "activity"
  },
  {
    colaborador: "Fiona",
    accion: "Certificación completada con 100 en Módulo 6 ✓",
    timestamp: "Hace 6 horas",
    tipo: "certificate"
  },
  {
    colaborador: "Emilio",
    accion: "Certificación completada ✓",
    timestamp: "Hace 1 día",
    tipo: "certificate"
  },
  {
    colaborador: "Alberto",
    accion: "Completó Módulo 3",
    timestamp: "Hace 2 días",
    tipo: "completion"
  }
];

export const datosGrafico = [
  { semana: "Sem 1", Ezzat: 15, Emilio: 18, José: 12, Alberto: 10, Camila: 20, Fiona: 17 },
  { semana: "Sem 2", Ezzat: 32, Emilio: 35, José: 28, Alberto: 22, Camila: 38, Fiona: 33 },
  { semana: "Sem 3", Ezzat: 50, Emilio: 52, José: 42, Alberto: 35, Camila: 55, Fiona: 50 },
  { semana: "Sem 4", Ezzat: 67, Emilio: 70, José: 55, Alberto: 42, Camila: 68, Fiona: 67 },
  { semana: "Sem 5", Ezzat: 75, Emilio: 85, José: 62, Alberto: 48, Camila: 75, Fiona: 83 },
  { semana: "Sem 6", Ezzat: 87, Emilio: 100, José: 67, Alberto: 50, Camila: 83, Fiona: 100 }
];

export const insights = [
  {
    tipo: "positive",
    titulo: "Excelente rendimiento",
    descripcion: "Fiona logró calificación perfecta de 100 en el módulo final. Camila y Ezzat mantienen promedio superior a 90"
  },
  {
    tipo: "warning",
    titulo: "Atención requerida",
    descripcion: "Alberto lleva 2 días sin actividad. Considere un seguimiento personalizado"
  },
  {
    tipo: "info",
    titulo: "Hito alcanzado",
    descripcion: "2 colaboradores ya certificados: Fiona (promedio 97) y Emilio (promedio 94)"
  },
  {
    tipo: "positive",
    titulo: "Ritmo destacado",
    descripcion: "El equipo mantiene un promedio de 2.7 horas semanales, superando la meta de 2.5 horas"
  }
];