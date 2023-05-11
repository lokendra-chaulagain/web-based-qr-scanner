import { ChangeEvent, useEffect, useState } from "react";
import AddEventModal from "./AddEventModal";
import headers from "../../../pages/event/headers.json";

const tableItems = [
  {
    id:1,
    name: "Liam James",
    email: "liamjames@example.com",
    position: "Software engineer",
    salary: "$100K",
  },
];

export default function EventTable() {
  const [areAllChecked, setAllChecked] = useState(false);
  let [checkboxItems, setCheckboxItem] = useState({});

  // set or unset all checkbox items
  // const handleCheckboxItems = () => {
  //   setAllChecked(!areAllChecked);
  //   tableItems.forEach((item: any, idx) => {
  //     checkboxItems[`checkbox${idx}`] = !areAllChecked;
  //     setCheckboxItem({ ...checkboxItems });
  //   });
  // };

  // Update checked value
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    setAllChecked(false);
    setCheckboxItem({ ...checkboxItems, [`checkbox${idx}`]: e.target.checked });
  };

  // useEffect(() => {
  //   // Set properties with false value
  //   tableItems.forEach((item, idx) => {
  //     checkboxItems[`checkbox${idx}`] = false;
  //     setCheckboxItem({ ...checkboxItems });
  //   });
  // }, []);

  useEffect(() => {
    // Check if all checkbox items are checked and update setAllChecked state
    const checkboxItemsVal = Object.values(checkboxItems);
    const checkedItems = checkboxItemsVal.filter((item) => item == true);
    if (checkedItems.length == tableItems.length) setAllChecked(true);
  }, [checkboxItems]);

  return (
    <div className="w-full ">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">All Events</h3>
          <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <AddEventModal />
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6 flex items-center gap-x-4">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox-all-items"
                    placeholder="check-box"
                    className="checkbox-item peer hidden"
                    checked={areAllChecked}
                    // onChange={handleCheckboxItems}
                  />
                  <label
                    htmlFor="checkbox-all-items"
                    className="relative flex w-5 h-5 bg-white peer-checked:bg-primary-600 rounded-md border ring-offset-2 ring-primary-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-1 after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"></label>
                </div>
                Event Title
              </th>
              {headers.map((header: any) => (
                <th
                  key={header.id}
                  className="py-3 px-6">
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr
                key={idx}
                className="odd:bg-gray-50 even:bg-white">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                  <div>
                    <input
                      type="checkbox"
                      id={`checkbox-${idx}`}
                      name={`checkbox-${idx}`}
                      placeholder="check-box"
                      className="checkbox-item peer hidden"
                      // checked={checkboxItems[`checkbox${idx}`]}
                      onChange={(e) => handleCheckboxChange(e, idx)}
                    />
                    <label
                      htmlFor={`checkbox-${idx}`}
                      className="relative flex w-5 h-5 bg-white peer-checked:bg-primary-600 rounded-md border ring-offset-2 ring-primary-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"></label>
                  </div>
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-primary-600 hover:text-primary-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Edit
                  </a>
                  <button
                    type="button"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

