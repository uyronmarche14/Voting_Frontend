import { useState } from "react";
import { cn } from "@/app/lib/utils";

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export default function Disclosure({
  title,
  children,
  className,
  defaultOpen = false,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("w-full border border-gray-100", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50/80 transition-all duration-200"
      >
        <span className="text-[15px]">{title}</span>
        <svg
          className={cn(
            "w-4 h-4 text-gray-400 transition-transform duration-300 ease-out",
            isOpen ? "rotate-180" : "",
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out border-t border-gray-100",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-5 py-4 text-[15px] text-gray-600 bg-gray-50/50">
          {children}
        </div>
      </div>
    </div>
  );
}
