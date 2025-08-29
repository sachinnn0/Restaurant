import Button from "./Button";

export default function Navbar() {
  return (
    <>
      <div className="z-10 absolute top-0 left-0 w-full flex justify-between items-center px-10 pt-5">
        <div className="Hamburger">
          <i class="ri-menu-fill text-4xl"></i>
        </div>
        <div className="logo ml-30 w-[80px] h-[80px]">
          <img
            className="w-full h-full object-cover"
            src="src/assets/Images/img5.png"
            alt=""
          />
        </div>
        <div className="actions flex gap-6 items-center">
          <div className="veglogo w-[44px] h-[44px] ">
            <img
              className="w-full h-full"
              src="src/assets/Images/img6.png"
              alt=""
            />
          </div>
          <div className="menu">
            <Button text="Menu" />
          </div>
        </div>
      </div>
    </>
  );
}
