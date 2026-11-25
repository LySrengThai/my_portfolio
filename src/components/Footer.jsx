import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};
