import { useEffect, useState } from "react";

export function useWindowWidth(): number {
  const isSsr = typeof window === "undefined";
  const [width, setWidth] = useState(isSsr ? 0 : window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
