import { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
};

const baseStyles = "rounded-full px-3 py-1 w-fit";

const typeStyles = {
  default: "text-neutral-900 dark:text-neutral-50 border border-neutral-200",
  primary: "bg-[#8C52FF] text-neutral-50",
  secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
};

export default function Pill({
  children,
  variant = "default",
  className = "",
}: PillProps) {
  return (
    <div className={`${baseStyles} ${typeStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
