import GradientButton from "@/components/ui/Button/GradientButton";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio({ projects }) {
  const renderProject = (project, index) => {
    if (index % 2 === 0) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="hero my-10 ">
            <div className="hero-content  flex-col md:flex-row-reverse">
              <div class="relative">
                <div class="border-[8px] rounded-md border-secondary w-[150px] sm:w-[200px] h-[100px] sm:h-[150px]">
                  <div></div>
                </div>
                <div class="w-[150px] sm:w-[200px] h-[100px] sm:h-[150px] bg-black rounded-md absolute bottom-5 left-5">
                  <Image
                    src={`${project.image}`}
                    alt={project.title}
                    layout="fill"
                    data-tooltip-id={project.dataTooltipId}
                    data-tooltip-content={project.dataTooltipContent}
                  />
                </div>
              </div>
              <div className="mr-0 lg:mr-36 mt-5 md:mt-0 max-w-lg">
                <h4 className="font-semibold text-sm sm:text-xl text-white">
                  Project {project.id}
                </h4>
                <h6 className="font-medium text-sm sm:text-xl text-white">
                  {project.title}
                </h6>
                <div className="text-white text-sm sm:text-base text-normal text-justify my-3">
                  <small>{project.duration}</small>
                  <span>
                    <li>{project.line1}</li>
                    <li>{project.line2}</li>
                    <li>{project.line3}</li>
                  </span>
                </div>
                <div>
                  <GradientButton>
                    <div className="flex justify-center">
                      <Link
                        href={project.live}
                        className="text-white border-r-2 px-2 border-white"
                        data-tooltip-id="my-tooltip-1"
                        data-tooltip-content="Live Website"
                        target="_blank"
                      >
                        <span className="hover:animate-ping">
                          <IoIosGlobe />
                        </span>
                      </Link>
                      <Link
                        href={project.client}
                        className="text-white border-r-2 px-2 border-white"
                        data-tooltip-id="my-tooltip-2"
                        data-tooltip-content="Client Site"
                        target="_blank"
                      >
                        <span className="hover:animate-ping">
                          <FaGithub />
                        </span>
                      </Link>
                      <Link
                        href={project.server}
                        className="text-white px-2 border-white"
                        data-tooltip-id="my-tooltip-3"
                        data-tooltip-content="Server Site"
                        target="_blank"
                      >
                        <span className="hover:animate-ping">
                          <FaServer />
                        </span>
                      </Link>
                    </div>
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="hero my-20">
            <div className="hero-content flex-col md:flex-row">
              <div class="relative">
                <div class="border-[8px] rounded-md border-secondary w-[150px] sm:w-[200px] h-[100px] sm:h-[150px]">
                  <div></div>
                </div>
                <div class="w-[150px] sm:w-[200px] h-[100px] sm:h-[150px] bg-black rounded-md absolute bottom-5 left-5">
                  <Image
                    src={`${project.image}`}
                    alt={project.title}
                    layout="fill"
                    data-tooltip-id={project.dataTooltipId}
                    data-tooltip-content={project.dataTooltipContent}
                  />
                </div>
              </div>
              <div className="ml-0 md:ml-5 lg:ml-36 mt-5 md:mt-0 max-w-lg">
                <h4 className="font-semibold text-sm sm:text-xl text-white">
                  Project {project.id}
                </h4>
                <h6 className="font-medium text-sm sm:text-xl text-white">
                  {project.title}
                </h6>
                <div className="text-white text-sm sm:text-base text-normal text-justify my-3">
                  <small>{project.duration}</small>
                  <ul>
                    <li>{project.line1}</li>
                    <li>{project.line2}</li>
                    <li>{project.line3}</li>
                  </ul>
                </div>
                <div>
                  <GradientButton>
                    <div className="flex justify-center">
                      <Link
                        href={project.live}
                        className="text-white border-r-2 px-2 border-white"
                        data-tooltip-id="my-tooltip-1"
                        data-tooltip-content="Live Website"
                        target="_blank"
                      >
                        <span className="hover:animate-ping">
                          <IoIosGlobe />
                        </span>
                      </Link>
                      <Link
                        href={project.client}
                        className="text-white border-r-2 px-2 border-white"
                        data-tooltip-id="my-tooltip-2"
                        data-tooltip-content="Client Site"
                        target="_blank"
                      >
                        <span className="hover:animate-ping">
                          <FaGithub />
                        </span>
                      </Link>
                      <Link
                        href={project.server}
                        className="text-white px-2 border-white"
                        data-tooltip-id="my-tooltip-3"
                        data-tooltip-content="Server Site"
                        target="_blank"
                      >
                        <span className="hover:animate-ping">
                          <FaServer />
                        </span>
                      </Link>
                    </div>
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
  };
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="py-3 rounded-lg">
        <div>
          <div>
            <h1 className="font-semibold text-center text-white text-xl sm:text-2xl my-5">
              Portfolio
            </h1>
          </div>
          <div className="pt-5  md:pt-10">
            {projects.map((project, index) => (
              <div key={project.id}>{renderProject(project, index)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/projects");
  const data = await res.json();

  return {
    props: {
      projects: data,
    },
    revalidate: 10,
  };
};
