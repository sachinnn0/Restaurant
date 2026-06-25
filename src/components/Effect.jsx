import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

// Accept 'children' as a prop
export default function Effect({ children }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(containerRef.current, {
      type: "words",
    });

    gsap.from(split.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
    });
  }, []);

  return (
    // Wrap the children with a span or div that has the ref
    <div ref={containerRef}>{children}</div>
  );
}
