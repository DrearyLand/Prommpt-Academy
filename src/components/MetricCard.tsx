interface MetricCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function MetricCard({ label, value, subtitle, icon }: MetricCardProps) {
  return (
    <div className="border border-gray-200 p-6">
      {icon && (
        <div className="w-10 h-10 border border-gray-200 flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <p className="text-xs tracking-widest text-gray-500 mb-2">
        {label}
      </p>
      <p className="text-2xl md:text-3xl tracking-tight text-gray-900 mb-1">
        {value}
      </p>
      {subtitle && (
        <p className="text-xs text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
