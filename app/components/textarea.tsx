import { BaseProps } from "@/app/types/ui";
import { cn } from "@/app/lib/utils";

interface TextAreaProps extends BaseProps {
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function TextArea({
  label,
  placeholder,
  error,
  size = "md",
  disabled,
  className,
  value,
  rows = 4,
  onChange,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        rows={rows}
        onChange={onChange}
        className={cn(
          "rounded-lg border border-[var(--border)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-colors resize-vertical",
          sizeStyles[size],
          error && "border-red-500",
          disabled && "bg-gray-100 cursor-not-allowed",
          className,
        )}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
