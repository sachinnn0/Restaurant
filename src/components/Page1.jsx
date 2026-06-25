import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Effect from "./Effect";
import aboutImage from "../assets/Images/img2.png";

export default function Page1() {
  useGSAP(() => {
    gsap.from(".para1 span", {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      duration: 0.6,
      delay: 0.1,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".para1",
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
      },
    });
  });

  return (
    <div className="bg-primary-color text-secondary-color">
      <div className="top flex justify-between px-10 pt-10">
        <Effect>
          <h2 className="text-5xl gloock-regular uppercase">
            About our <br /> restaurant
          </h2>
        </Effect>

        <h5 className="text-xl inter-regular w-[53%] para1">
          <span>
            Oakaz was founded in 2002 in the heart of Indore with a vision to
            bring the
          </span>{" "}
          <span>
            authentic flavors of Indian cuisine to the city. From the very
            beginning, Oakaz{" "}
          </span>
          <span>
            has been dedicated to celebrating India’s rich culinary heritage
            while blending{" "}
          </span>
          <span>
            {" "}
            it with modern dining experiences. What started as a passion for
            traditional{" "}
          </span>
          <span>
            {" "}
            Indian recipes soon grew into a culinary destination, where every
            guest can{" "}
          </span>
          <span>
            {" "}
            enjoy a unique journey of flavors, warmth, and hospitality.
          </span>
        </h5>
      </div>
      <div className="bottom w-full p-10">
        <img className="w-full object-cover" src={aboutImage} alt="" />
      </div>
    </div>
  );
}
