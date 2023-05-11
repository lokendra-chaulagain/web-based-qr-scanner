import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function AdminLeftbar() {
  const navLists = [
    {
      id: "1",
      title: "Events",
      link: "",
      icon: <RxDashboard />,
      subLinks: [
        {
          id: "1",
          title: "Events",
          link: "/dashboard/events",
          icon: <RxDashboard />,
        },
      ],
    },

    {
      id: "3",
      title: "Users",
      link: "",
      icon: <RxDashboard />,
      subLinks: [
        {
          id: "1",
          title: "Users",
          link: "/dashboard/users",
          icon: <RxDashboard />,
        },
      ],
    },
  ];

  return (
    <div className="px-4 w-2/12 ">
      <nav
        aria-label="Main Nav"
        className="mt-6 flex flex-col space-y-1">
        <a
          href="/"
          className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
          <RxDashboard />
          <span className="text-sm font-medium"> General </span>
        </a>

        {navLists.map((nav: any) => (
          <details
            key={nav.id}
            className="">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                {nav.icon}
                <span className="text-sm font-medium">{nav.title}</span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <MdKeyboardArrowDown />
              </span>
            </summary>

            <nav
              aria-label="Account Nav"
              className="mt-2 flex flex-col px-4">
              {nav.subLinks &&
                nav.subLinks.map((nav: any) => (
                  <a
                    key={nav.id}
                    href={nav.link}>
                    <div className="px-4 py-2 flex items-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 gap-2 rounded-lg">
                      <p>{nav.icon}</p>
                      <span className="text-sm font-medium">{nav.title}</span>
                    </div>
                  </a>
                ))}
            </nav>
          </details>
        ))}
      </nav>
    </div>
  );
}
