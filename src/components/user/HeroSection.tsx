import img1 from "../../assets/hero-image-1.jpg";
import img2 from "../../assets/hero-image-2.jpg";
import img3 from "../../assets/hero-image-3.jpg";

export default function HeroSection() {
  return (
    <div className="relative bg-white pt-20  sm:pt-24 md:pt-30 lg:pt-56">
      <div className="container mx-auto">
        <div className=" flex flex-wrap justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="">
              <h1 className="mb-3 text-3xl md:text-5xl  text-secondary-600 ">Build beautiful website with TailGrids Components</h1>
              <p className="mb-8  text-lg font-medium text-accent-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at egestas tortor. Morbi sed odio id purus pellentesque iaculis. Nulla facilisi.</p>

              <div className="  ">
                <p className="my-3 text-lg font-semibold text-gray-600">Subscribe to get notified when we launch 🎉</p>
                <form className="flex gap-3 ">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Email"
                      className=" w-full rounded-md border  py-3 px-5 text-base text-accent-600  outline-none focus:border-primary-600 focus-visible:shadow-none"
                    />
                  </div>

                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Notify Me!"
                      className=" bg-primary-600-600 w-full cursor-pointer  rounded-md border bg-primary-600 py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full px-4  lg:w-5/12 flex justify-between gap-6">
            <div className="flex flex-col justify-center">
              <img
                src={img1}
                alt="img"
              />
            </div>

            <div className="flex flex-col gap-4 justify-center xl:justify-between">
              <img
                src={img2}
                alt="img"
              />

              <img
                src={img3}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
