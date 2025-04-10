"use client";
import { BaseProps, ButtonVariant } from "@/app/types/ui";
import { cn } from "@/app/lib/utils";
import { useState } from "react";

interface DropDownProps extends BaseProps {
  label: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  dropdownItems?: { label: string; value: string }[];
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white",
  secondary: "bg-[var(--secondary)] hover:opacity-90 text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  info: "bg-cyan-600 hover:bg-cyan-700 text-white",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-1.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function DropDown({
  label,
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  disabled,
  className,
  type = "button",
  dropdownItems,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownItemClick = (value: string) => {
    console.log(`Item ${value} clicked`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        type={type}
        className={cn(
          "rounded-lg font-medium transition-colors duration-200",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        <span className="flex items-center justify-center gap-2">
          {icon}
          {label}
        </span>
      </button>
      {dropdownItems && isOpen && (
        <div className="absolute top-full left-0 w-full  bg-white border shadow-md p-2">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleDropdownItemClick(item.value)}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
