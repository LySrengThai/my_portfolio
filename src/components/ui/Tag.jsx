import { cn } from "@/lib/utils";

export const Tag = ({ className, children }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted-foreground",
      className
    )}
  >
    {children}
  </span>
);
