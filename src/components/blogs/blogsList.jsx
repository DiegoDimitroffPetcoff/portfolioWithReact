import blogs from "./blogList.json";
import Accordion from "react-bootstrap/Accordion";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoServerOutline } from "react-icons/io5";

const BlogsList = () => {
  return (
    <article>
      {blogs.map((blog, index) => (
        <Accordion key={index} className="blogContent">
          <Accordion.Item eventKey={index}>
            <Accordion.Header
              style={{
                padding: "5px",
                fontSize: "20px",
              }}
            >
              {blog.title} {blog.date}
            </Accordion.Header>
            <Accordion.Body style={{ display: "flex", minHeight: "100px" }}>
              <section
                style={{
                  padding: "5px",
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {blog.description}
                {blog.iframe ? (
                  <iframe
                    className="linkedinPostBlog"
                    src={blog.iframe}
                    border-radius="0px"
                    allowFullScreen=""
                    title="Embedded post"
                    height="300"
                  ></iframe>
                ) : null}
              </section>
              <section>
                <img
                  className="blogImg"
                  src={
                    blog.Img
                      ? require(`../../assests/images/${blog.Img}`)
                      : require(`../../assests/images/logo-transparent.png`)
                  }
                  alt={blog.title}
                  style={{ width: "100px" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {blog.GitHubLinkFront ? (
                    <Link target="_blank" to={blog.GitHubLinkFront}>
                      <FaGithub />
                    </Link>
                  ) : null}

                  {blog.GitHubLinkBack ? (
                    <Link target="_blank" to={blog.GitHubLinkBack}>
                      <IoServerOutline />
                    </Link>
                  ) : null}
                  {blog.DeployLink ? (
                    <Link target="_blank" to={blog.DeployLink}>
                      <FaReact />
                    </Link>
                  ) : null}
                </div>
              </section>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </article>
  );
};
export default BlogsList;
