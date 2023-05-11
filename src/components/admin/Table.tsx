import { BsCheck2 } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";

const headers = [
  {
    id: 1,
    title: "Name",
  },

  {
    id: 2,
    title: "Documents",
  },

  {
    id: 3,
    title: "Created At",
  },

  {
    id: 4,
    title: "Verified",
  },

  {
    id: 5,
    title: "Actions",
  },
];

const datas = [
  {
    id: 1,
    name: "Lokendra",
    document: "loki.png",
    createdAt: "4 days ago",
    verified: true,
  },

  {
    id: 2,
    name: "Lokendra",
    document: "loki.png",
    createdAt: "4 days ago",
    verified: false,
  },

  {
    id: 3,
    name: "Lokendra",
    document: "loki.png",
    createdAt: "4 days ago",
    verified: true,
  },
];

export default function Table() {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="py-2">
          <select
            className=" w-80 outline-none border p-2"
            data-te-select-init
            data-te-select-size="lg">
            <option
              selected
              value="1">
              Select By Country
            </option>
            <option value="2">USA</option>
            <option value="3">Africa</option>
          </select>
        </div>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 text-start">
                <label
                  htmlFor="SelectAll"
                  className="sr-only">
                  Select All
                </label>

                <input
                  type="checkbox"
                  id="SelectAll"
                  className="h-5 w-5 rounded border-gray-300"
                />
              </th>
              {headers.map((header) => (
                <th
                  key={header.id}
                  className="whitespace-nowrap  text-start px-4 py-2 font-medium text-gray-900">
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {datas.map((data: any) => (
              <tr key={data.id}>
                <td className="px-4 py-2">
                  <label
                    className="sr-only"
                    htmlFor="Row1">
                    Row 1
                  </label>

                  <input
                    className="h-5 w-5 rounded border-gray-300"
                    type="checkbox"
                    id="Row1"
                  />
                </td>

                <td className="whitespace-nowrap px-4 py-2   text-gray-700">{data.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.document}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.createdAt}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.verified ? <BsCheck2 className=" text-green-600 text-base" /> : <MdClear className=" text-red-600 text-base" />}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <div className="flex gap-2">
                    <a className="inline-block rounded border bg-red-600  p-1 text-xs font-medium text-white ">Delete</a>
                    <Link to={`/dashboard/user/user-details/${data.id}`}>
                      <p className="inline-block rounded border bg-primary-600  p-1 text-xs font-medium text-white ">View</p>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
