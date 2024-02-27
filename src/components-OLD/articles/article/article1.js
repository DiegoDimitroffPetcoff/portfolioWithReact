import React, { useState } from "react";

import BlogArticle2 from "../../blogArticles.js/blogArticle2";


function Article1() {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [bottomShow, setBottomShow] = useState(
    <button className="bottomArticle" onClick={show1}>
      Migration from Heroku app to Railway
    </button>
  );
  const [bottom, setBottom] = useState(false);

  function show1() {
    setMostrarComponente(<BlogArticle2></BlogArticle2>);
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
        Migration from Heroku app to Railway
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

export default Article1;
