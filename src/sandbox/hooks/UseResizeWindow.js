import { useEffect, useState } from "react";

export default function UseResizeWindow() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handelWindowChange = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handelWindowChange);
    return () => {
      window.removeEventListener("resize", handelWindowChange);
    };
  }, []);
  return windowSize;
}
