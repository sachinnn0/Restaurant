import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Page5() {
  const imgRef = useRef([]);
  const parentRef = useRef([]);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      width: "100%",
      scrollTrigger: {
        scroller: "body",
        trigger: parentRef.current,
        // markers: true,
        start: "top 0",
        end: "top -100%",
        pin: true,
        scrub: 2,
      },
    });
  });

  return (
    <div
      ref={parentRef}
      className="page5 w-full h-screen flex items-center justify-center bg-primary-color"
    >
      <div className="w-[90%] h-[80%] flex items-center justify-center">
        <img
          ref={imgRef}
          className="w-[10%] h-full object-cover"
          src="src/assets/Images/img26.png"
          alt=""
        />
      </div>
    </div>
  );
}
