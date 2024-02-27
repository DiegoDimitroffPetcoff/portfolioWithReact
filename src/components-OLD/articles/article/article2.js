import React, { useState } from "react";

import BlogArticle4 from "../../blogArticles.js/blogArticle4";



function Article2() {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [bottomShow, setBottomShow] = useState(
    <button className="bottomArticle" onClick={show1}>
    Migrating from a static project to a scalable one in React
    </button>
  );
  const [bottom, setBottom] = useState(false);

  function show1() {
    setMostrarComponente(<BlogArticle4></BlogArticle4>);
    setBottomShow(false);
    setBottom(
      <button className="bottomCloseArticle" onClick={close}>
        CLOSE
      </button>
    );
  }

  function close() {
    setMostrarComponente(false);
    setBottomShow(
      <button className="bottomArticle" onClick={show1}>
      Migrating from a static project to a scalable one in React
      </button>
    );
    setBottom(false);
  }

  return (
    <div>


      <div className="articlesContent">
        {bottomShow}
        {mostrarComponente}
        {bottom}
      </div>
    </div>
  );
}

export default Article2;
