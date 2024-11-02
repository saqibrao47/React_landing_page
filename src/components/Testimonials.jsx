import { testimonials } from "../constants";


const Testimonials = () => {
  return (
    <div className="mt-20">
         <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-wider">
        What people <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">are saying</span>
      </h2>
        <div className="flex flex-wrap justify-center mt-10">
            {testimonials.map((testimonial, index) =>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral rounded-md p-6 text-md font-thin border border-neutral-800">
                            <p>{testimonial.text}</p>
                            <div className="mt-8 flex items-start">
                                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-600" src={testimonial.image} alt={testimonial.user} />
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className="text-neutral-400 text-sm italic ">{testimonial.company}</span>
                                </div>
                            </div>

                        </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Testimonials