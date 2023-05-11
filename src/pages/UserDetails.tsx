import profile from "../assets/profile.jpg";
import File from "../components/admin/user-details/File";

export default function UserDetails() {
  return (
    <div className=" bg-white p-4">
      <div className="flex gap-3">
        <div className="w-5/12 ">
          <div className="shadow rounded-lg">
            <div className="flex justify-center">
              <img
                src={profile}
                alt=""
                className="rounded-full object-cover w-32 h-32 shadow-md border-4 border-white  "
              />
            </div>

            <div className="">
              <h1 className="font-bold text-center text-3xl text-gray-900">Lokendra Chaulagain</h1>
              <p className="text-center text-sm text-gray-400 font-medium">SpinyBabbler IT</p>

              <div className="my-5 px-6">
                <a
                  href="#"
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                  Send Direct Mail
                </a>
              </div>
              <div className="flex justify-between items-center my-5 px-6">
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Profile</p>
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Files</p>
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Other Info</p>
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Something</p>
              </div>

              <div className="w-full">
                <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>

                <div className="mt-5 ">
                  <div className="flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  hover:bg-gray-100 transition duration-150">
                    <span>First Name</span>
                    <span className="text-gray-500 text-xs">24 min ago</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  hover:bg-gray-100 transition duration-150">
                    <span>First Name</span>
                    <span className="text-gray-500 text-xs">24 min ago</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  hover:bg-gray-100 transition duration-150">
                    <span>First Name</span>
                    <span className="text-gray-500 text-xs">24 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 flex flex-wrap  justify-center gap-4 ">
          <File />
          <File />
          <File />
        </div>
      </div>
    </div>
  );
}
