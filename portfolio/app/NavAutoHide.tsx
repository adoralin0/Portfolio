"use client";

import { useEffect } from "react";

export default function NavAutoHide() {
  useEffect(() => {
    let lastY = window.scrollY;
    const delta = 6;

    const applyNavState = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY - lastY > delta;
      const scrollingUp = lastY - currentY > delta;

      if (scrollingDown && currentY > 80) {
        document.body.classList.add("nav-hidden");
      } else if (scrollingUp || currentY <= 20) {
        document.body.classList.remove("nav-hidden");
      }

      lastY = currentY;
    };
    window.addEventListener("scroll", applyNavState, { passive: true });
    return () => {
      window.removeEventListener("scroll", applyNavState);
      document.body.classList.remove("nav-hidden");
    };
  }, []);

  return null;
}
