import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";
import { FiSend } from "react-icons/fi";
const SocialMediaIcons = lazy(() => import("./SocialMediaIcons"));

const quickLinks1 = [
  {
    title: "SaaS Development",
  },

  {
    title: "Our Products",
  },

  {
    title: "User Flow",
  },

  {
    title: "User Strategy",
  },
];

const quickLinks2 = [
  {
    title: "About TailGrids",
  },

  {
    title: "Contact & Support",
  },

  {
    title: "Success History",
  },

  {
    title: "Setting & Privacy",
  },
];

export default function Footer() {
  return (
    <footer className="pt-40 pb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="h-20 mb-2"
                />
              </Link>
              <p className="mb-7 text-lg text-accent-600 ">Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.</p>
              <Suspense fallback={<div>Loading..</div>}>
                <SocialMediaIcons />
              </Suspense>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">Resources</h4>
              <ul>
                {quickLinks1.map((link: any) => (
                  <li>
                    <Link
                      to="/"
                      className="mb-1 inline-block text-lg text-accent-600 leading-loose  hover:text-primary">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">Company</h4>
              <ul>
                {quickLinks2.map((link: any) => (
                  <li>
                    <Link
                      to="/"
                      className="mb-1 inline-block text-lg text-accent-600 leading-loose  hover:text-primary">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">Subscribe To Newsletter</h4>

              <p className="mb-7 text-lg text-accent-600 ">Enter your email address for receiving valuable newsletters.</p>

              <form className="flex">
                <div className="">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className=" w-full rounded-md border rounded-r-none border-top-right-radius-0 border-bottom-right-radius-0  py-3 px-5 text-lg text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                  />
                </div>

                <div className="  cursor-pointer  mb-5 flex items-center justify-center   py-4 px-3 rounded-sm bg-primary-600  text-white transition hover:bg-opacity-90">
                  <FiSend size={22} />
                </div>
              </form>

              <p className="text-lg text-accent-600 ">&copy; 2023 Talika</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
