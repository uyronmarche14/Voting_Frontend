import Link from "next/link";
import { ALinkVariant, Size } from "@/app/types/ui";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface aLinkProps {
  href?: string;
  onClick?: () => void;
  variant?: ALinkVariant | "footer" | "footer-bottom";
  id?: string;
  className?: string;
  title?: string;
  size?: Size;
  icon?: React.ReactNode;
  children?: ReactNode;
  external?: boolean;
}

const ALink_variantStyles: Record<string, string> = {
  primary: "text-[var(--primary)] underline-offset-4 ",
  secondary: "text-[var(--secondary)]",
  link: "text-[var(--text)] underline-offset-4 hover:underline",
  footer:
    "text-[var(--paragraph)] hover:text-[var(--primary)] transition-all duration-200 flex items-center gap-3 py-1 group",
  "footer-bottom":
    "text-sm text-[var(--paragraph)] hover:text-[var(--primary)] transition-colors duration-200",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const isExternalLink = (href: string | undefined) => {
  return (
    href?.startsWith("http") ||
    href?.startsWith("mailto:") ||
    href?.startsWith("tel:")
  );
};

export default function aLink({
  href = "",
  onClick,
  variant = "primary",
  id,
  className,
  title,
  size = "md",
  icon,
  children,
  external,
}: aLinkProps) {
  const linkClassName = cn(
    "rounded-lg font-medium transition-colors duration-200",
    ALink_variantStyles[variant],
    sizeStyles[size],
    className
  );

  // Handle external links or if explicitly set as external
  if (external || isExternalLink(href)) {
    return (
      <a
        href={href}
        onClick={onClick}
        id={id}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        {title || children}
      </a>
    );
  }

  // Internal links use Next.js Link
  return (
    <Link href={href} onClick={onClick} id={id} className={linkClassName}>
      {icon}
      {title || children}
    </Link>
  );
}
