import "./App.css";
import Header from "./components/header/Header";
import { ArticleList } from "./components/ArticlesList/ArticleList";
import { ButtonList } from "./components/ButtonList/ButtonList";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import data from "./data/data";

export default function App() {
  const allCategories = [
    "All",
    ...new Set(data.map((article) => article.category))
  ];
  // console.log(allCategories);
  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  const filterCategory = (category) => {
    console.log(category);
    if (category === "All") {
      setArticles(data);
      return;
    }

    const filterData = data.filter((article) => article.category === category);
    // console.log(filterData)
    setArticles(filterData); //Cada button reinicia el estado de los articulos
  };

  return (
    <div className="container">
      <Header />
      <ButtonList categories={categories} filterCategory={filterCategory} />
      <ArticleList articles={articles} />
      <Footer />
    </div>
  );
}
