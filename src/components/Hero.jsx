import blob from "../assets/hero/blob-shape.svg";
import illustration from "../assets/hero/Illustration.svg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 py-10 lg:grid-cols-2">
      {/* hero content */}
      <div className="content flex flex-col justify-center space-y-6">
        <h1 className="font-bold text-5xl max-w-md">
          A new model for open collaboration
        </h1>
        <p className="max-w-md text-gray-500">
          Run an organization where members get rewarded for their contributions
          with fractional ownership.
        </p>
        {/* register btn */}
        <button
          className="bg-greenCustom cursor-pointer py-3 px-6 rounded text-white w-[12.5rem]"
          disabled
        >
          Request early access
        </button>
      </div>
      {/* hero images */}
      <div className="images relative">
        <img src={blob} alt="blob" className="blob w-[550px]" />
        <img
          src={illustration}
          alt="illustration"
          className="illustration absolute top-12 -left-24"
        />
      </div>
    </section>
  );
};

export default Hero;
