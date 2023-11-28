import committed from "../assets/committed/committed.svg";
import alex from "../assets/committed/alex.png";
import jason from "../assets/committed/jason.png";
import lizzie from "../assets/committed/lizzie.png";
import star from "../assets/committed/star.png";

const Commited = () => {
  return (
    <section className="grid grid-cols-2">
      {/* content */}
      <div className="content flex flex-col justify-center space-y-6">
        {/* icon */}
        <img src={committed} alt="committed" className="w-16 h-16" />
        {/* heading */}
        <h1 className="font-bold text-4xl max-w-md">
          Engage highly committed contributors
        </h1>
        {/* story story */}
        <p className="max-w-xl">
          You need talented people on-demand across various tasks that your
          full-time workforce can’t prioritize at the moment. As an Open
          Enterprise, you can easily fund tasks and have people apply to work on
          them in return for funds or shares.
        </p>
      </div>

      {/* cards */}
      <div className="cards">
        <div className="top relative">
          <div className="shadow bg-greenCustom w-full h-[100px] rounded-xl absolute top-8 z-0"></div>
          <div className="card bg-white border-4 border-black rounded-xl px-8 py-4 z-50 relative">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Write a how-to on Open Enterprise</h4>
              <button className="bg-greenCustom text-white flex items-center space-x-2 px-2 py-0.5 rounded-full">
                <span>1</span>
                <span>SHARE</span>
              </button>
            </div>
            <div>
              <p className="text-sm max-w-[18rem]">
                Looking for an amazing copywriter using Open Enterprise to help
                us write an article on how to get started.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom flex space-x-4 py-6">
          {/* applicant card */}
          <div className="card flex flex-col border-4 border-black rounded-xl shadow-md bg-goldCustom w-96 px-8 py-4 space-y-3 ">
            <h5 className="text-xl font-bold">3 applicants</h5>
            {/* applicants */}
            <div className="applicants flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={jason} alt="jason" className="rounded-full" />
                <p>Jason Kwon</p>
              </div>
              <div className="ratings flex items-center space-x-4">
                <span>
                  <img src={star} alt="star" />
                </span>
                <span>4.8</span>
              </div>
            </div>
            {/* applicants */}
            <div className="applicants flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={alex} alt="alex" className="rounded-full" />
                <p>Alex Rose</p>
              </div>
              <div className="ratings flex items-center space-x-4">
                <span>
                  <img src={star} alt="star" />
                </span>
                <span>4.5</span>
              </div>
            </div>
            {/* applicants */}
            <div className="applicants flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={lizzie} alt="lizzie" className="rounded-full" />
                <p>Lizzie Ulrich</p>
              </div>
              <div className="ratings flex items-center space-x-4">
                <span>
                  <img src={star} alt="star" />
                </span>
                <span>4.2</span>
              </div>
            </div>
          </div>

          {/* rose-ux-writer card */}
          <div className="rose-card shadow-md border-4 border-custom rounded-xl w-60 text-center px-6 py-6 flex flex-col items-center relative top-6">
            <img
              src={alex}
              alt="alex"
              className="h-14 w-14 rounded-full mb-2"
            />
            <h5 className="font-bold">Alex Rose</h5>
            <p className="text-gray-500">UX Writer</p>
            {/* commits */}
            <div className="commits flex items-center justify-between mt-2">
              <div className="flex items-center space-x-4">
                <p>4 commits</p>
              </div>
              <div className="ratings flex items-center space-x-2">
                <span>
                  <img src={star} alt="star" />
                </span>
                <span>4.5</span>
              </div>
            </div>
            {/* view btn */}
            <button className="bg-black text-white w-full py-1 rounded-2xl mt-2 self-end my-3">
              View profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commited;
