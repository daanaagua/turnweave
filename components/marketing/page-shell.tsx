import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`.trim()}>{children}</div>;
}
