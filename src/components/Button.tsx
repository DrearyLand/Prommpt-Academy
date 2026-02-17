import { Link } from "react-router";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  name?: string;
}

export function Button({ 
  children, 
  to, 
  onClick, 
  variant = "primary", 
  className = "",
  name
}: ButtonProps) {
  const baseStyles = "inline-block px-8 py-4 text-sm tracking-wide transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-gray-900 text-white hover:bg-gray-700",
    secondary: "border border-gray-300 text-gray-900 hover:border-gray-900"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} data-name={name}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} data-name={name}>
      {children}
    </button>
  );
}
