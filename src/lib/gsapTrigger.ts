import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapTrigger = (trigger: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      markers: true,
    },
  });
  return tl;
};
