import React from "react";

const Enterprise = () => {
  return (
    <section className="py-28">
      {/* content */}
      <div className="content flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Help us improve Open Enterprise</h1>
        <p className="max-w-[53rem] text-center py-6">
          As an Open Enterprise ourselves, we are actively looking for new
          talent to join our mission of improving and delivering the Open
          Enterprise model to the world. Apply for open tasks and earn a stake
          in our success.
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-col py-8">
        <div className="cards grid grid-cols-3 gap-4">
          {/* card */}
          <div className="card bg-white shadow-md rounded-xl  px-6 py-4 flex flex-col justify-between">
            <div>
              <h2 className="font-bold">
                Ideate a list of features based on the <br /> Sociocracy model
              </h2>
              <p className="text-sm py-4 max-w-[16rem]">
                We’re looking for someone interested in business theory and
                research that’ll help us bridge the gap between our s...{" "}
              </p>
            </div>
            <div className="date flex items-center justify-between mt-4">
              <button className="bg text-white bg-greenCustom rounded-full px-1">
                5 AUT
              </button>
              <p className="font-bold">Apply by May 15</p>
            </div>
          </div>

          {/* card */}
          <div className="card bg-white shadow-md rounded-xl  px-6 py-4 flex flex-col justify-between">
            <div>
              <h2 className="font-bold">Update documentation with FAQs</h2>
              <p className="text-sm py-4 max-w-sm">
                Review our community chat for the most <br /> frequently asked
                questions and document <br /> answers for our product docs.
              </p>
            </div>
            <div className="date flex items-center justify-between mt-4">
              <button className="bg text-white bg-greenCustom rounded-full px-1">
                10 AUT
              </button>
              <p className="font-bold">Apply by May 18</p>
            </div>
          </div>

          {/* card */}
          <div className="card bg-white shadow-md rounded-xl px-6 py-4 flex flex-col justify-between">
            <div>
              <h2 className="font-bold">Tutorial video series</h2>
              <p className="text-sm py-1 max-w-sm">
                Create a series of video tutorials that <br /> cover everything
                from start to finish on <br /> using Open Enterprise.
              </p>
            </div>
            <div className="date flex items-center justify-between mt-4">
              <button className="bg text-white bg-greenCustom rounded-full px-1">
                40 AUT
              </button>
              <p className="font-bold">Apply by May 20</p>
            </div>
          </div>
        </div>

        {/* view more */}
        <button className="bg-black text-white py-2 px-4 w-[8rem] mx-auto rounded-md mt-8">
          View more
        </button>
      </div>
    </section>
  );
};

export default Enterprise;
