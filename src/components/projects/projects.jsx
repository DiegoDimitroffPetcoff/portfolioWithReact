import ProjectsList from "./projectsList";

const Projects = () => {
  return (
    <div className="gralContent">
      {" "}
      <div data-aos="fade-right">
        <h1 className="gralTitle">Projects</h1>
        <h2 className="gralSubtitle">
          In this section I will be posting all my projects, from the newest to
          the oldest.
        </h2>
      </div>
      <ProjectsList />
    </div>
  );
};
export default Projects;
