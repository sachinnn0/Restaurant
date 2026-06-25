import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import starImage from "../assets/Images/Star1.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Page3() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Pin the section while scrolling and scale image smoothly
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
      });

      gsap.fromTo(
        "img",
        { scale: 1 },
        {
          scale: 7,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center bg-primary-color overflow-hidden"
    >
      <img
        className="will-change-transform w-[40%]"
        src={starImage}
        alt=""
      />
    </div>
  );
}
