import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export const Reveal = ({ delay = 0, className, children }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};
