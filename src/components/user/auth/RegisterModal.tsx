import { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Twitter from "../svg/Twitter";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast  from "react-hot-toast";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  address: string;
  password: string;
  confirmPassword: string;
  file: string;
  infoIsValid: boolean;
  description: string;
};

export default function RegisterModal() {
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
    toast.success("Register success");
  };

  const [visible, setVisible] = useState(false);
  const makeVisible = () => {
    setVisible(true);
  };
  const makeHidden = () => {
    setVisible(false);
  };

  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const makeConfirmPasswordVisible = () => {
    setConfirmPasswordVisible(true);
  };
  const makeConfirmPasswordHidden = () => {
    setConfirmPasswordVisible(false);
  };

  return (
    <section>
      <p
        onClick={handleOpen}
        className=" cursor-pointer  py-2 px-5 text-base font-medium text-white hover:bg-opacity-90  bg-primary-600 rounded-lg">
        Register
      </p>

      {open && (
        <div className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4   ">
          <div className="w-full max-w-[770px] rounded-3xl bg-white  px-8 pt-5 pb-10">
            <div className="flex justify-end">
              <RxCross2
                className="cursor-pointer"
                onClick={handleClose}
                size={35}
              />
            </div>

            <div className="flex flex-col  mb-4">
              <h3 className="pb-1 text-xl font-bold text-secondary-600 sm:text-2xl text-center">Register</h3>
              <span className="mx-auto mb-3 inline-block h-1 w-20 rounded bg-primary-600"></span>
            </div>
            {/* <p className="mb-10 text-lg leading-relaxed text-accent-600">New Here, Register Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 ">
              <div className="flex gap-2">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="First Name"
                    className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && <span className=" text-red-500">This field is required</span>}
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && <span className=" text-red-500">This field is required</span>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className=" text-red-500">This field is required</span>}
              </div>

              <div className="flex gap-2">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Address"
                    className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                    {...register("address", { required: true })}
                  />
                  {errors.address && <span className=" text-red-500">This field is required</span>}
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Username"
                    className=" w-full rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                    {...register("username", { required: true })}
                  />
                  {errors.username && <span className=" text-red-500">This field is required</span>}
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-full">
                  <div className="flex items-center justify-between  w-full gap-4 rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none">
                    <input
                      type={visible ? "text" : "password"}
                      placeholder="Password"
                      className="bg-accent-50 outline-none w-full "
                      {...register("password", { required: true })}
                    />
                    {visible ? (
                      <AiOutlineEye
                        onClick={makeHidden}
                        className=" cursor-pointer"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={makeVisible}
                        className=" cursor-pointer"
                      />
                    )}
                  </div>
                  {errors.password && <span className=" text-red-500">This field is required</span>}
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between  w-full gap-4 rounded-md border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none">
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="Password"
                      className="bg-accent-50 outline-none w-full"
                      {...register("confirmPassword", { required: true })}
                    />
                    {confirmPasswordVisible ? (
                      <AiOutlineEye
                        onClick={makeConfirmPasswordHidden}
                        className=" cursor-pointer"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={makeConfirmPasswordVisible}
                        className=" cursor-pointer"
                      />
                    )}
                  </div>
                  {errors.confirmPassword && <span className=" text-red-500">This field is required</span>}
                </div>
              </div>

              <div className="w-full">
                <input
                  type="file"
                  placeholder="File"
                  className=" w-full rounded-md  border bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                  {...register("file", { required: true })}
                />
                {errors.file && <span className=" text-red-500">This field is required</span>}
              </div>

              <div className="w-full">
                <textarea
                  placeholder="Description (optional)"
                  className=" w-full rounded-md border h-28 bg-accent-50 py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                  {...register("description", { required: false })}
                />
                {errors.description && <span className=" text-red-500">This field is required</span>}
              </div>

              <div className=" flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center mt-4 cursor-pointer">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="mr-2 rounded  h-4  w-4 "
                      {...register("infoIsValid", { required: true })}
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-gray-600">
                      Information provided is valid
                    </label>
                  </div>
                  {errors.infoIsValid && <span className=" text-red-500">This field is required</span>}
                </div>

                <Link
                  to="/"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                  Already have an account ?
                </Link>
              </div>

              <button
                type="submit"
                className="inline-block w-full rounded bg-primary-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white "
                data-te-ripple-init
                data-te-ripple-color="light">
                Sign UP
              </button>

              <div className=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 text-center font-semibold text-accent-600">OR</p>
              </div>

              <Link
                to="/"
                className=" flex gap-2 w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white bg-color-facebook"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                Continue with Facebook
              </Link>

              <Link
                to="/"
                className=" flex gap-2 w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white bg-color-twitter"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                <Twitter />
                Continue with Twitter
              </Link>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
