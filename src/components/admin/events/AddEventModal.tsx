import {  useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { DateRangePicker } from "rsuite";

type Inputs = {
  eventTitle: string;
  type: string;
  country: string;
  description: string;
  fromTo: string;
  location: string;
};

export default function AddEventModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const allInputFields = watch();

  const onSubmit: SubmitHandler<Inputs> = () => {
    console.log(allInputFields);
    reset();
    toast.success("Event Create success");
  };

  return (
    <>
      <div onClick={handleOpen}>
        <ButtonPrimary
          title="Add Event"
          py={2}
        />
      </div>

      {open && (
        <div className="fixed top-0 left-0 z-50 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-50 px-4 py-5 ">
          <div className=" w-4/12 rounded-3xl bg-white py-12 px-8  ">
            <div className="flex justify-end">
              <RxCross2
                className="cursor-pointer"
                onClick={handleClose}
                size={35}
              />
            </div>

            <div className="flex flex-col  mb-4">
              <h3 className="pb-1 text-xl font-bold text-secondary-600 sm:text-2xl text-center">Create an Event</h3>
              <span className="mx-auto mb-3 inline-block h-1  rounded bg-primary-600"></span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                  {...register("eventTitle", { required: true })}
                />
                {errors.eventTitle && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <select
                  {...register("type", { required: true })}
                  className="w-full p-2.5 text-gray-500 bg-accent-50 border rounded-md  outline-none appearance-none focus:border-primary-600">
                  <option
                    selected
                    value="">
                    Select Type of Event
                  </option>
                  <option value="seminar">Seminar</option>
                  <option value="lecture">Lecture</option>
                </select>
                {errors.type && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <select
                  {...register("country", { required: true })}
                  className="w-full p-2.5 text-gray-500 bg-accent-50 border rounded-md  outline-none appearance-none focus:border-primary-600">
                  <option
                    selected
                    value="">
                    Select Country{" "}
                  </option>
                  <option value="USA">USA</option>
                  <option value="Africa">Africa</option>
                </select>
                {errors.country && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <textarea
                  placeholder="Description"
                  className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                  {...register("description", { required: true })}
                />
                {errors.description && <span className="text-red-500">This field is required</span>}
              </div>

              <div className=" w-full rounded-md border bg-accent-50 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none">
                {/* <p>Date Time Range</p> */}
                <DateRangePicker
                  className="w-full"
                  format="yyyy-MM-dd HH:mm:ss"
                  defaultCalendarValue={[new Date("2022-02-01 00:00:00"), new Date("2022-05-01 23:59:59")]}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Location"
                  className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                  {...register("location", { required: true })}
                />
                {errors.location && <span className="text-red-500">This field is required</span>}
              </div>

              <ButtonPrimary
                title="Create Event"
                py={3}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
