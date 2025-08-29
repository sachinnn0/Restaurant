import Effect from "./Effect";

export default function Footer() {
  return (
    <div className="w-full h-screen secondary-color primary-color flex flex-col justify-between ">
      <h1 className="uppercase text-9xl gloock-regular flex flex-1 items-center justify-center">
        oakaz
      </h1>
      <div className="uppercase flex items-center justify-between px-10 pb-5">
        <p>2025 @ oakaz</p>
        <div className="flex gap-5 text-2xl">
          <button className="w-10 h-10 border border-[#E9E2D2] rounded-full flex items-center justify-center">
            <i class="ri-phone-line"></i>
          </button>

          <button className="w-10 h-10 border border-[#E9E2D2] rounded-full flex items-center justify-center">
            <i class="ri-mail-line"></i>
          </button>

          <button className="w-10 h-10 border border-[#E9E2D2] rounded-full flex items-center justify-center">
            <i class="ri-map-pin-line"></i>
          </button>
        </div>
        <p>Made by sachin</p>
      </div>
    </div>
  );
}
