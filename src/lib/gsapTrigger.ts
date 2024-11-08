import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapTrigger = (trigger: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top 70%",
      markers: true, 
    },
  });
  return tl;
};
