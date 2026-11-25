import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems, profile } from "@/data/portfolio";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(null);

  // Highlight the section crossing the middle of the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)
        );
        const current = navItems.find((i) => visible.has(i.href.slice(1)));
        setActiveHref(current ? current.href : null);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navItems.forEach((i) => {
      const el = document.getElementById(i.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200",
        isScrolled || isMenuOpen
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent"
      )}
    >
      <nav className="container flex h-14 items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary font-mono text-xs text-primary-foreground">
            L
          </span>
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "true" : undefined}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                activeHref === item.href
                  ? "bg-surface-2 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost hidden !px-3 !py-1.5 md:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-foreground hover:bg-surface-2 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 bg-background md:hidden",
          "transition-opacity duration-200",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="container flex flex-col py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              aria-current={activeHref === item.href ? "true" : undefined}
              className={cn(
                "border-b border-border py-4 text-lg",
                activeHref === item.href
                  ? "text-primary"
                  : "text-foreground/90"
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 text-lg text-primary"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};
