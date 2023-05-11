import  { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
const LoginModal = lazy(() => import("./auth/LoginModal"));
const RegisterModal = lazy(() => import("./auth/RegisterModal"));

export default function Header() {
  return (
    <div className="fixed w-full z-10 bg-white opacity-90  py-3 border ">
      <div className="container mx-auto">
        <div className="relative  flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/">
              <div className="flex items-center   w-24">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4 ">
            <div className="hidden lg:block">
              <nav className="absolute right-4 top-full w-full  rounded-lg bg-white px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none">
                <ul className="block lg:flex">
                  <li>
                    <Link
                      to="/"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">
                      Pricing
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">
                      Support
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden lg:block">
              <div className=" justify-end pr-16 sm:flex lg:pr-0 ">
                <Suspense fallback={<div>Loading...</div>}>
                  <LoginModal />
                  <RegisterModal />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
