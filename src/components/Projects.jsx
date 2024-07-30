import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title}{" "}
                <a
                  className="ms-3 text-blue-800"
                  href={project?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-2 mt-4 rounded bg-neutral-900 px-2 text-sm py-1 font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
