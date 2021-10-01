import { RefObject, useEffect, useState } from "react";

export function useOnScreen(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    else setIntersecting(false);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}
