// import Button from "./Button";
// import Effect from "./Effect";
// // import heroImage from "../assets/Images/img1.png";
// import heroVideo from "../assets/Images/Video2.mp4";
// export default function Hero() {
//   return (
//     <div>
//       <div className="w-full h-screen">
//         {/* <img className="object-cover w-full h-full " src={heroImage} alt="" /> */}
//         <video
//           src={heroVideo}
//           className="object-cover w-full h-full"
//           autoPlay
//           loop
//           muted
//           playsInline
//         ></video>
//       </div>
//       <div className="absolute top-[40%] left-0 primary-color p-10">
//         <Effect>
//           <h1 className=" text-8xl gloock-regular mb-8">
//             Welcome to the <br /> Oakaz Rooftop <br /> Restaurant
//           </h1>
//         </Effect>

//         <Button text="Reservation" />
//       </div>
//     </div>
//   );
// }

import { Menu } from "lucide-react";
import heroVideo from "../assets/Images/Video2.mp4";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* ===================== NAVBAR ===================== */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <div className="flex items-center justify-between h-20 px-6 rounded-lg border border-white/10 bg-[#2d211c]/60 backdrop-blur-xl">
          {/* Left Button */}
          <button className="px-8 h-12 border border-white/20 text-white uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-300">
            Book Now
          </button>

          {/* Logo */}
          <h1
            className="mr-[100px] text-white text-5xl font-light tracking-[0.35em] "
            style={{
              fontFamily: "Bebas Neue, sans-serif",
            }}
          >
            OAKAZ
          </h1>

          {/* Menu */}
          <button className="text-white hover:opacity-70 transition">
            <Menu size={36} strokeWidth={1.4} />
          </button>
        </div>
      </nav>

      {/* ===================== HERO ===================== */}
      <div className="relative z-20 flex items-center justify-center h-full px-12 lg:px-24">
        <div className="max-w-3xl text-white flex flex-col items-center justify-center">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-center"
            style={{ fontFamily: "Gloock, serif" }}
          >
            Welcome to the
            <br />
            Oakaz Rooftop
            <br />
            Restaurant
          </h1>

          <button className="px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-white border border-white transition-all duration-300">
            Menu
          </button>
        </div>
      </div>
    </section>
  );
}
