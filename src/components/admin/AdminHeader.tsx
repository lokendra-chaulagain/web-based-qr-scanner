import logo from "../../assets/logo2.png";

export default function AdminHeader() {
  return (
    <div className="sticky py-2 px-5 flex items-center justify-between inset-x-0 bottom-0 border-t bg-white  border-gray-100">
      <img
        className=" h-12 cursor-pointer "
        src={logo}
        alt=""
      />
      <div>
        <img
          className=" h-10 w-10 cursor-pointer border rounded-full object-cover "
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
}
