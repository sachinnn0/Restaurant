import Button from "./Button";
import Effect from "./Effect";

export default function Hero() {
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="object-cover w-full h-full "
          src="src/assets/Images/img1.png"
          alt=""
        />
      </div>
      <div className="absolute top-[40%] left-0 primary-color p-10">
        <Effect>
          <h1 className=" text-8xl gloock-regular mb-8">
            Welcome to the <br /> Oakaz Rooftop <br /> Restaurant
          </h1>
        </Effect>

        <Button text="Reservation" />
      </div>
    </div>
  );
}
