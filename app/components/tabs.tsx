import React from "react";
import { BaseProps } from "@/app/types/ui";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface TabProps extends BaseProps {
  id?: string;
  href?: string;
  label: string;
  external?: boolean;
  children?: ReactNode;
  size?: keyof typeof sizeStyles;
  onClick?: () => void;
}

const sizeStyles = {
  sm: "px-2 py-1.5 text-base",
  md: "px-3 py-1.5  text-base",
  lg: "px-6 py-3 text-lg",
};

const isExternalLink = (href: string | undefined) => {
  return (
    href?.startsWith("http") ||
    href?.startsWith("mailto:") ||
    href?.startsWith("tel:")
  );
};

const Tab = ({
  id,
  href,
  label,
  className,
  external,
  children,
  size = "md",
  onClick,
}: TabProps) => {
  const isLink = external || isExternalLink(href);

  const baseStyles =
    "relative transition-all duration-200 font-medium rounded-lg";

  return (
    <li className="focus-within:z-10">
      {isLink ? (
        <a
          href={href}
          className={cn(
            baseStyles,
            "inline-block px-6 py-2.5 border border-gray-200",
            className,
          )}
          id={id}
        >
          {label || children}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={cn(
            baseStyles,
            "inline-block px-6 py-2.5 border border-gray-200",
            className,
          )}
          id={id}
        >
          {label || children}
        </button>
      )}
    </li>
  );
};

const Tabs = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-2 p-2 bg-gray-50/50 backdrop-blur-sm rounded-full">
      {children}
    </ul>
  );
};

export { Tabs, Tab };
