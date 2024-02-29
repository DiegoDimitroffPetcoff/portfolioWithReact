import LogoTransparent from "../../assests/images/logo-transparent-white.png";

const WorkingOnPage = () => {
  console.log("spinning");
  return (
    <div className="gralContent" style={{justifyContent:"center"}}>
      <h1>Hi! Im still working on this page</h1>
      <h2>Is gonna be ready very soon!</h2>
      <img src={LogoTransparent} alt="Logo Diego Dimitrogg" />
    </div>
  );
};
export default WorkingOnPage;
