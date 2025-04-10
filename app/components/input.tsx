import { BaseProps } from "@/app/types/ui";
import { cn } from "@/app/lib/utils";

interface InputProps extends BaseProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Input({
  label,
  placeholder,
  type = "text",
  error,
  size = "md",
  disabled,
  className,
  value,
  onChange,
  id,
  name,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
        className={cn(
          "rounded-lg border border-[var(--border)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-colors",
          sizeStyles[size],
          error && "border-red-500",
          disabled && "bg-gray-100 cursor-not-allowed",
          className
        )}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
