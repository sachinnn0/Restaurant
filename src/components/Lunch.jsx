import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import lunchImg7 from "../assets/Images/img7.png";
import lunchImg8 from "../assets/Images/img8.png";
import lunchImg9 from "../assets/Images/img9.png";
import lunchImg10 from "../assets/Images/img10.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Lunch() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Pin the first section's heading in the center
      ScrollTrigger.create({
        trigger: ".first",
        start: "top top",
        end: "+=200%",
        pin: ".first h2",
        pinSpacing: false,
      });

      // Ensure heading stays behind all images across sections
      gsap.set(".first h2", { zIndex: 1, position: "relative" });
      gsap.set([".second img", ".third img"], {
        zIndex: 50,
        position: "relative",
      });

      // Parallax for second section
      gsap.to(".second .z-2", {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".second .z-0", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax for third section
      gsap.to(".third .z-2", {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ".third",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".third .z-0", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".third",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className="third-color lunch">
      <div className="first w-full h-screen flex items-center justify-center">
        <h2 className="text-9xl gloock-regular uppercase text-secondary-color">
          Lunch
        </h2>
      </div>
      <div className="second relative w-full h-screen flex items-center justify-center">
        <div className="flex absolute top-0 gap-50 items-start">
          <img className="z-2" src={lunchImg7} alt="" />
          <img className="mt-25 z-0" src={lunchImg8} alt="" />
        </div>
      </div>
      <div className="relative third w-full h-screen  flex items-center justify-center">
        <div className="flex absolute top-0 gap-50 items-start">
          <img className="z-0" src={lunchImg9} alt="" />
          <img className="z-2 mt-25" src={lunchImg10} alt="" />
        </div>
      </div>
    </div>
  );
}
