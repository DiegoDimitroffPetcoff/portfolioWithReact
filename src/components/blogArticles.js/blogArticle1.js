import React from "react";
import "../welcome/blog.css";
import { Link } from "react-router-dom";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
function BlogArticle1() {
  return (
    <div className="conteinerBlog">
      <h6 className="dateBlog">02/03/23</h6>
      <h2 className="titleBlog">
        New project in React and new goals achieved!
      </h2>
      <div className="textBlog">
        It is a pleasure to be able to share with you the evolution and
        professional growth that I am achieving day by day. In the first place,
        a new certificate obtained thanks to the free teaching of Open Bootcam.
        On the other hand, a new game project where I am working on new skills!
        Developing in ReactJS. fetching external APIS, deploying the project on
        different hosts!. Let me share with all of you somethip about this
        projects!. I deployed the same project in two different free Hosts:
        Render. com & Railway.app.. You can try any of them.. just keep on main
        both are free and therefore could be a litle slow to charge..be patient!
        :D
      </div>
      <div className="LinkBlog"> 👇 You can Try any of them!</div>

      <Link
        className="LinkBlog"
        to="https://lnkd.in/dZnf-eZH https://lnkd.in/dvaSNs26"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineDeploymentUnit></AiOutlineDeploymentUnit>Code Deployed
      </Link>

      <div>
        <iframe
          className="linkedinPostBlog"
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7036849530687864834"
          border-radius="0px"
          allowfullscreen=""
          title="Embedded post"
          height="731"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default BlogArticle1;
