import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Effect from "./Effect";
import valuesImg1 from "../assets/Images/img3.png";
import valuesImg2 from "../assets/Images/img4.png";

export default function Page2() {
  useGSAP(() => {
    gsap.from(".para2 span", {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      duration: 0.6,
      delay: 0.1,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".para2",
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
            About our <br />
            Values
          </h2>
        </Effect>
        <h5 className="text-xl inter-regular w-[53%] para2">
          <span>
            At Oakaz, we value food for its power to unite people. By focusing
            on the rich{" "}
          </span>
          <span>
            traditions of Indian cuisine, using fresh, high-quality ingredients,
            and
          </span>{" "}
          <span>
            embracing sustainable practices, our chefs craft dishes that reflect
            India’s{" "}
          </span>
          <span>vibrant culinary legacy.</span>
          <br /> <br />
          <span>
            Our interactive menu and immersive dining environment engage all the
          </span>
          <span>
            senses, creating a unique and memorable experience for every guest.
          </span>
          <span>
            Traditional Indian recipes are reimagined with a modern touch,
            offering an
          </span>{" "}
          <span>
            exceptional dining journey that honors heritage while embracing
            innovation.
          </span>
        </h5>
      </div>
      <div className="bottom w-full p-10 flex justify-between">
        <img src={valuesImg1} alt="" />
        <img src={valuesImg2} alt="" />
      </div>
    </div>
  );
}
