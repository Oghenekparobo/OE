import workforce from "../assets/reimagining/workforce.svg";
import design from "../assets/reimagining/design.svg";
import resilience from "../assets/reimagining/resilience.svg";

const Reimagining = () => {
  return (
    <section className="py-10">
      {/* content */}
      <div className="content flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">
          Reimagining what it means to work
        </h1>
        <p className="max-w-[53rem] text-center py-6">
          Teams and communities using Open Enterprise fundamentally unlock a
          reality of work that reimagines how people engage in economic
          opportunity, meeting the demands and expectations of a modern
          organization.
        </p>
      </div>
      {/* cards */}
      <div className="py-8">
        <div className="cards grid grid-cols-3">
          {/* card */}
          <div className="card bg-white shadow-lg w-96 flex flex-col space-y-6 items-center px-8 py-14 rounded-lg">
            {/* icons */}
            <img src={workforce} alt="workforce" className="h-20 w-20" />
            {/* title */}
            <h4 className="font-bold text-xl">Modern workforce</h4>
            {/* description */}
            <p className="text-sm text-center">
              Multistakeholder governance aligns employees with the
              organization’s wider community.
            </p>
          </div>

          {/* card */}
          <div className="card bg-white shadow-lg w-96  flex flex-col space-y-6 items-center px-8 py-14 rounded-lg">
            {/* icons */}
            <img src={design} alt="design" className="h-20 w-20" />
            {/* title */}
            <h4 className="font-bold text-xl">Meritocratic by design</h4>
            {/* description */}
            <p className="text-sm text-center">
              Tokenized ownership aligns deeply committed individuals with the
              organization’s success.
            </p>
          </div>

          {/* card */}
          <div className="card bg-white shadow-lg w-96  flex flex-col space-y-6 items-center px-8 py-14 rounded-lg">
            {/* icons */}
            <img src={resilience} alt="resilience" className="h-20 w-20" />
            {/* title */}
            <h4 className="font-bold text-xl">Engineered for resilience</h4>
            {/* description */}
            <p className="text-sm text-center">
              Open Enterprise supports best practices in sociocratic management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reimagining;
