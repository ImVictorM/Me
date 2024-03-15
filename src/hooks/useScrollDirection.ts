import { useCallback, useEffect, useState } from "react";

type Scroll = "up" | "down";

export default function useScrollDirection() {
  const [scrollY, setScrollY] = useState<number>(window.scrollY);

  const [scrollDirection, setScrollDirection] = useState<Scroll | undefined>();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setScrollY(currentScrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrollDirection, scrollY };
}
