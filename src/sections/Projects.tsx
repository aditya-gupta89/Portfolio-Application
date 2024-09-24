import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { portfolioProjects } from "../constants";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export const ProjectsSection = () => {
  return (
    <section id={"project"} className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          description="See how I transformed concepts into engaging digital experience."
          title=""
          eyebrow="Personal Project"
        />
        <div className="md:mt-20  flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:px-10 lg:pt-16 lg:px-20 sticky top-0"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 text-2xl to-sky-400 inline-flex font-bold uppercase tracking-widest  text-transparent bg-clip-text">
                    {project.title}
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5"></h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <p className="text-sm mt-4 md:text-base text-white/50">
                    {project.description}
                  </p>

                  <div className="flex gap-2">
                    <a href={project.link}>
                      {" "}
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>View Live Site</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                    <a href={project.sourceCode}>
                      {" "}
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Source Code</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative mb-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
