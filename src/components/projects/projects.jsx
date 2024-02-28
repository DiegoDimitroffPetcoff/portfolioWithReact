import ProjectsList from "./projectsList";

const Projects = () => {
  return (
    <div style={{padding:"10%"}}>
      {" "}
      <div data-aos="fade-right">
        <h1 className="titlePage">Projects</h1>
        <h2 className="subtitlePage">
          In this section I will be posting all my projects, from the newest to
          the oldest.
        </h2>
      </div>
    
      <ProjectsList />
    </div>
  );
};
export default Projects;
