import org from "../assets/org/org.svg";
import dillion from "../assets/org/Dillon.png";
import anna from "../assets/org/Anna.png";
import kas from "../assets/org/Kas.png";

const Organization = () => {
  return (
    <section className="grid grid-cols-2 py-28">
      {/* content */}
      <div className="content flex flex-col justify-center space-y-6">
        {/* icon */}
        <img src={org} alt="org" className="w-16 h-16" />
        {/* heading */}
        <h1 className="font-bold text-4xl max-w-md">
          Kickstart an organization with your co-founders
        </h1>
        {/* story story */}
        <p className="max-w-xl">
          It’s the early days, you just had a long conversation with two friends
          about a meaningful challenge that you’re all passionate about and have
          a potential solution for. You’re ready to embark the startup journey.
        </p>
      </div>
      {/* members card */}
      <div className="members-card relative">
        <div className="shadow bg-greenCustom w-96 h-80 absolute z-0 rounded-xl left-4 top-10"></div>
        <div className="card flex flex-col space-y-8 bg-white w-96  px-10 py-6 border-4 border-black rounded-xl z-50 relative">
          {/* title */}
          <h3 className="font-bold text-2xl">Members</h3>
          {/* member */}
          <div className="member flex items-center space-x-4">
            {/* member img */}
            <img
              src={dillion}
              alt="dillion"
              className="h-14 w-14 rounded-full"
            />
            {/* member details */}
            <div className="details">
              <h6 className="font-bold text-xl">Dillon Kydd</h6>
              <p className="text-gray-500">100 SHARES</p>
            </div>
          </div>
          {/* member */}
          <div className="member flex items-center space-x-4">
            {/* member img */}
            <img src={anna} alt="anna" className="h-14 w-14 rounded-full" />
            {/* member details */}
            <div className="details">
              <h6 className="font-bold text-xl">Anna Olsen</h6>
              <p className="text-gray-500">100 SHARES</p>
            </div>
          </div>
          {/* member */}
          <div className="member flex items-center space-x-4">
            {/* member img */}
            <img src={kas} alt="kas" className="h-14 w-14 rounded-full" />
            {/* member details */}
            <div className="details">
              <h6 className="font-bold text-xl">Kas Moss</h6>
              <p className="text-gray-500">100 SHARES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
