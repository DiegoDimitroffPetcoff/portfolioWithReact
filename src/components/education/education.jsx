import EducationLista from "./educationList.jsx";

const Education = () => {
  return (
    <div className="gralContent">
      {" "}
      <div className="gralContentHeader">
        <h1 className="gralTitle">Projects</h1>
        <h2 className="gralSubtitle">
          In this section I will be posting all my projects, from the newest to
          the oldest.
        </h2>

        <EducationLista />
      </div>
    </div>
  );
};
export default Education;
