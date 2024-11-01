import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="text-lg text-center pt-10 text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get start today and turn your imagination
        into immpersive reality!{" "}
      </p>
      <div className="flex justify-center my-10 gap-10">
      <a
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 border rounded-md"
              href="#"
            >
              Start for free
            </a>

      <a className="py-2 px-3 border rounded-md" href="#">
              Documentation
            </a>
            
      </div>
      <div className="flex justify-center mt-10">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
        <source src={video1} type="video/mp4" />
        </video>

        <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
        <source src={video2} type="video/mp4" />
        </video>

      </div>
    </div>
  );
};

export default HeroSection;
