import { useEffect } from "react";

const useSmoothScroll = (closeNavHandler: () => void) => {
  useEffect(() => {
    const smoothScroll = (target: string) => {
      const targetElement = document.querySelector<HTMLElement>(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const handleNavClick: EventListener = (event: Event) => {
      event.preventDefault();
      const target = (event.currentTarget as HTMLAnchorElement).getAttribute(
        "href"
      );
      if (target) {
        smoothScroll(target);
        closeNavHandler();
      }
    };

    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav__link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick as EventListener);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick as EventListener);
      });
    };
  }, [closeNavHandler]);
};

export default useSmoothScroll;
