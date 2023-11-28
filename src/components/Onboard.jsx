import jasir from "../assets/onboard/jasir.png";
import onboard from "../assets/onboard/onboard.svg";

const Onboard = () => {
  return (
    <section className="grid grid-cols-2 py-28">
      {/* onboard card */}
      <div className="onboard-card relative">
        <div className="card flex flex-col space-y-8 bg-white w-96  px-10 py-6 border-4 border-black rounded-xl z-50 relative">
          {/* oga investor */}
          <div className="investor flex items-center space-x-4">
            {/* onboard img */}
            <img src={jasir} alt="jasir" className="h-14 w-14 rounded-full" />
            {/* onboard details */}
            <div className="details">
              <h6 className="font-bold text-xl">Jassir Jonis</h6>
              <p className="text-gray-500">Pre-seed angel investor</p>
            </div>
          </div>
          {/* onboard compliment */}
          <p className="text-sm">
            Hey guys, love what you’re doing and I’m convinced that together
            we’ll achieve amazing things.
          </p>

          {/* investor doings */}
          <div className="flex items-center space-x-10">
            <div className="doings flex flex-col space-y-2">
              <h6 className="font-bold text-gray-600">COMMIT</h6>
              <p className="font-bold text-xl tracking-wide">10,000 DAI</p>
            </div>
            <div className="doings flex flex-col space-y-2">
              <h6 className="font-bold text-gray-600">SHARES</h6>
              <p className="font-bold text-xl tracking-wide">20</p>
            </div>
          </div>

          {/* vote btn */}
          <button className="bg-black text-white text-xl py-3 rounded-2xl">
            Go to vote
          </button>
        </div>
      </div>

      {/* content */}
      <div className="content flex flex-col justify-center space-y-6">
        {/* icon */}
        <img src={onboard} alt="onboard" className="w-16 h-16" />
        {/* heading */}
        <h1 className="font-bold text-4xl max-w-md">
        Onboard users, investors and advisors as you grow
        </h1>
        {/* story story */}
        <p className="max-w-xl">
          It’s the early days, you just had a long conversation with two friends
          about a meaningful challenge that you’re all passionate about and have
          a potential solution for. You’re ready to embark the startup journey.
        </p>
      </div>
    </section>
  );
};

export default Onboard;
