
import ProjectCards from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full overflow-hidden-web flex justify-center"
    >
      <div className="w-full xl:w-[85%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="PROJECTS" subtitle="Personal & Academic Projects" />
        </div>

        <div
          className="w-full h-[70%] z-19 flex justify-center"
          style={{
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
            width: "100%",
            height: "100%",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
            marginLeft: "40px",
          }}
        >
          <div className="w-full xl:w-[70%] h-[100%] relative">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;