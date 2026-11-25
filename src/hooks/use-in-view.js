import { useEffect, useRef, useState } from "react";

// Returns [ref, inView]. Once the element has been seen it stays "in view".
export const useInView = ({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
} = {}) => {
  const ref = useRef(null);
  // Without IntersectionObserver, show content immediately rather than hide it.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};
