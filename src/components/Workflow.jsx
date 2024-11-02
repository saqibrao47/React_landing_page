import { CheckCircle2 } from "lucide-react";
import codeimg from "../assets/code.jpg";
const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
          coding workflow
        </span>{" "}
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="mt-2 w-full lg:w-1/2">
        <img src={codeimg} alt="code" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
