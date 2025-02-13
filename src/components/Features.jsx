import { features } from "../constants";
const Features = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
            your code
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
      {features.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
                <div className="flex">
                    <div className="flex justify-center items-center rounded-full mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700">
                        {item.icon}
                    </div>
                    <div>
                        <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                        <p className="text-md p-2 mb-20 text-neutral-500">{item.description}</p>
                    </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Features;
