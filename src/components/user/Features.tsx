import { BiHappy, BiScreenshot, BiShieldAlt2, BiStreetView } from "react-icons/bi";

export default function Features() {
  const features = [
    {
      id: "1",
      icon: (
        <BiHappy
          className="text-white "
          size={40}
        />
      ),
      title: "Easy To Use",
      description: "Lorem ipsum dolor sit amet  consectetur Vestibulum elit sitim tincidunt rutrum.",
    },

    {
      id: "2",
      icon: (
        <BiScreenshot
          className="text-white "
          size={40}
        />
      ),

      title: "Awesome Design",
      description: "Lorem ipsum dolor sit amet  consectetur Vestibulum elit sitim tincidunt rutrum.",
    },

    {
      id: "3",
      icon: (
        <BiShieldAlt2
          className="text-white "
          size={40}
        />
      ),

      title: "Easy To Customize",
      description: "Lorem ipsum dolor sit amet  consectetur Vestibulum elit sitim tincidunt rutrum.",
    },

    {
      id: "4",
      icon: (
        <BiStreetView
          className="text-white "
          size={40}
        />
      ),

      title: "Any Time Support",
      description: "Lorem ipsum dolor sit amet  consectetur Vestibulum elit sitim tincidunt rutrum.",
    },
  ];

  return (
    <section className="px-4 flex justify-center  mt-20">
      <div className="container">
        <div className=" flex flex-wrap">
          <div className="w-full ">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary-600">Core Features</span>
              <h2 className="mb-4 text-4xl font-bold text-secondary-600 ">Our Awesome Features</h2>
              <p className="text-lg text-accent-600 ">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {features.map((feature: any, index: any) => (
            <div
              key={index}
              className="w-ll md:w-1/2 lg:w-1/4">
              <div className="mb-8 rounded-[20px] bg-white   flex flex-col items-center justify-center">
                <div className="mb-8 flex h-[95px] w-[95px] items-center justify-center rounded-2xl bg-primary-600 ">{feature.icon}</div>
                <h4 className="mb-3 text-xl font-semibold text-secondary-600 ">{feature.title}</h4>
                <p className="text-accent-600 text-lg text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
