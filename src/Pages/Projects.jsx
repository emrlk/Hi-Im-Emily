
import ProjectCards from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full overflow-hidden-web flex justify-center"
    >
      <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[180%] mt-[-10%] mb-[-10%] relative z-10">
          <SectionTitle title="PROJECTS" subtitle="Personal & Acedemic Projects" />
        </div>

        <div
          className="w-full h-[70%] z-10 flex justify-center"
          style={{
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
            width: "90%",
            height: "280%",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",

          }}
        >
          <div className="w-full xl:w-[70%] h-[-10%] absolute">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;