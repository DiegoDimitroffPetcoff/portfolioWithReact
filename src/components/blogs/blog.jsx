import BlogsList from "./blogsList";

const Blog = () => {
  return (
    <div className="gralContent">
      {" "}
      <div data-aos="fade-right">
        <h1 className="gralTitle">Blog</h1>
        <h2 className="gralSubtitle">
          This is a space where I will be posting projects that I am currently
          working on.! Many times it is a bit difficult to keep the portfolio
          updated. Technology is changing day by day and at a very fast pace,
          that is why I have created this Blog where I will gradually show the
          projects I am working on, the ideas that arise and much more.
        </h2>
      </div>
      <BlogsList />
    </div>
  );
};
export default Blog;
