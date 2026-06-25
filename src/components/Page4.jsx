import Button from "./Button";
import img20 from "../assets/Images/img20.png";
import img21 from "../assets/Images/img21.png";
import img22 from "../assets/Images/img22.png";
import img23 from "../assets/Images/img23.png";
import img24 from "../assets/Images/img24.png";
import img25 from "../assets/Images/img25.png";

export default function Page4() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-primary-color">
      <div>
        <div className="">
          <img
            className="absolute top-10 left-80"
            src={img20}
            alt=""
          />
          <img
            className="absolute top-10 right-80"
            src={img21}
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute top-70 left-20"
            src={img22}
            alt=""
          />
          <img
            className="absolute top-70 right-20"
            src={img25}
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute bottom-10 left-80"
            src={img23}
            alt=""
          />
          <img
            className="absolute bottom-10 right-80"
            src={img24}
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
