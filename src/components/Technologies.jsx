import { RiReactjsLine } from "react-icons/ri";
import { FaNetworkWired, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  //   SiFigma,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-6xl text-cyan-500" /> {/* React */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-600" /> {/* MongoDB */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-6xl text-blue-500" /> {/* PostgreSQL */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-6xl text-gray-500" /> {/* Express */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNodedotjs className="text-6xl text-green-500" /> {/* Node.js */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNetworkWired className="text-6xl text-blue-500" />{" "}
          {/* Microservices */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-6xl text-purple-600" /> {/* Redux */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-6xl text-white" /> {/* GitHub */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-6xl text-blue-400" />{" "}
          {/* Tailwind CSS */}
        </div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFigma className="text-6xl text-black" /> 
        </div> */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-6xl text-blue-600" /> {/* Docker */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAmazonaws className="text-6xl text-orange-500" /> {/* AWS */}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
