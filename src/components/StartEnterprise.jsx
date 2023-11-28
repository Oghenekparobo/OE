import signIn from "../assets/pablo-sign-in.svg";

const StartEnterprise = () => {
  return (
    <section className="grid grid-cols-1 py-10 lg:grid-cols-2">
      {/* hero content */}
      <div className="content flex flex-col justify-center space-y-6">
        <h1 className="font-bold text-4xl max-w-md">
          Start an Open Enterprise
        </h1>
        <p className="max-w-xl text-gray-500">
          If you can’t wait to run a new or existing organization on Open
          Enterprise and are willing to explore and navigate the beta, we’d love
          to get you started.
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
        <img src={signIn} alt="pablo sign in vector illustation" />
      </div>
    </section>
  );
};

export default StartEnterprise;
