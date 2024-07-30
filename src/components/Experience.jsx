import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center ">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-lg lg:w-1/3">
              <h6 className="mb-2 font-semibold">
                {exp.role}-{" "}
                <span className="text-sm text-purple-500">{exp.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{exp.description}</p>
              {exp.technologies.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-2 mt-4 rounded bg-neutral-900 px-2 text-sm py-1 font-medium text-purple-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
