import { Link } from "react-router-dom";
import document from "../../../assets/document.jpg";

export default function File() {
  return (
    <div className=" h-52 rounded-lg p-1 flex items-center justify-center shadow-sm shadow-accent-200">
      <Link
        to={"/"}
        >
        <img
          alt="Home"
          src={document}
          className=" h-40 rounded-md object-cover"
        />
        <p className=" py-2 text-center ">Resume.pdf</p>
      </Link>
    </div>
  );
}
