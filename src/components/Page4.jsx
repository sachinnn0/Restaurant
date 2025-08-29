import Button from "./Button";

export default function Page4() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-primary-color">
      <div>
        <div className="">
          <img
            className="absolute top-10 left-80"
            src="src/assets/Images/img20.png"
            alt=""
          />
          <img
            className="absolute top-10 right-80"
            src="src/assets/Images/img21.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute top-70 left-20"
            src="src/assets/Images/img22.png"
            alt=""
          />
          <img
            className="absolute top-70 right-20"
            src="src/assets/Images/img25.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute bottom-10 left-80"
            src="src/assets/Images/img23.png"
            alt=""
          />
          <img
            className="absolute bottom-10 right-80"
            src="src/assets/Images/img24.png"
            alt=""
          />
        </div>
      </div>

      <div>
        <Button text="RESERVE A TABLE" />
      </div>
    </div>
  );
}
