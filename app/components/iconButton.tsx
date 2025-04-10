import { BaseProps, ButtonVariant } from "@/app/types/ui";
import { cn } from "@/app/lib/utils";

interface IconButtonProps extends BaseProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  tooltip?: string;
  rounded?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white",
  secondary:
    "bg-gray-100 border border-gray-200 hover:opacity-90 text-black mx-1 hover:bg-primary hover:text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  info: "bg-cyan-600 hover:bg-cyan-700 text-white",
};

const sizeStyles = {
  sm: "p-1.5 text-sm",
  md: "p-2 text-base",
  lg: "p-3 text-lg",
};

export default function IconButton({
  icon,
  onClick,
  variant = "primary",
  size = "md",
  disabled,
  className,
  type = "button",
  tooltip,
  rounded = false,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      title={tooltip}
      className={cn(
        "aspect-square transition-colors duration-200",
        rounded ? "rounded-full" : "rounded-lg",
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      <span className="flex items-center justify-center">{icon}</span>
    </button>
  );
}
