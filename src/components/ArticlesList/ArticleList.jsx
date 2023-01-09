import React from "react";
import "./ArticleList.css";

export const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div className="article-container" key={article.id}>
          <div className="img-container">
            <a target={"blanck"}  href={article.link}>
              <img src={article.image} alt={article.title} />
            </a>
          </div>
          <div className="article-body">
            <h2>{article.title}</h2>
            <p className="tech">{article.tecnologies}</p>
            <p className="desc">{article.description}</p>
            <div className="article-footer">
              {/* codigo ASCCI ALT+250 */}
              <span>{article.date} · </span>
              <span>{article.ReadingTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
