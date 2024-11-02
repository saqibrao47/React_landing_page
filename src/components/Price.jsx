import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Price = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl mt-10">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title == "Pro" && (
                  <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/month</span>
              </p>
              <ul>
                {option.features.map((feature, index) =>(
                    <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{feature}</span>
                    </li>
                ))}
              </ul>
              <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 border border-blue-700 rounded-xl mt-12 hover:bg-blue-700 transition duration-300"> Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;