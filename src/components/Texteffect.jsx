// import React, { useRef } from "react";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(SplitText, ScrollTrigger);

// export default function Texteffect({
//   children,
//   animateOnScroll = true,
//   delay = 0,
// }) {
//   const containerRef = useRef(null);
//   const splitRef = useRef(null);
//   const linesRef = useRef([]);

//   useGSAP(
//     () => {
//       if (!containerRef.current) return;

//       // Split text into lines
//       splitRef.current = new SplitText(containerRef.current, {
//         type: "lines",
//         linesClass: "line",
//       });

//       linesRef.current = splitRef.current.lines;

//       // Set initial state (hidden below)
//       gsap.set(linesRef.current, { yPercent: 100 });

//       const animationProps = {
//         yPercent: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power4.out",
//         delay,
//       };

//       if (animateOnScroll) {
//         gsap.to(linesRef.current, {
//           ...animationProps,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 75%",
//             once: true,
//           },
//         });
//       } else {
//         gsap.to(linesRef.current, animationProps);
//       }

//       // Cleanup on unmount
//       return () => {
//         if (splitRef.current) splitRef.current.revert();
//       };
//     },
//     { scope: containerRef, dependencies: [animateOnScroll, delay] }
//   );

//   // If single child → attach ref directly
//   if (React.Children.count(children) === 1) {
//     return React.cloneElement(children, { ref: containerRef });
//   }

//   // If multiple children → wrap them
//   return (
//     <div ref={containerRef} data-copy-wrapper="true">
//       {children}
//     </div>
//   );
// }
