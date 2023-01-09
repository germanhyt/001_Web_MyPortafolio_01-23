import "./Header.css";
import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import imgPerfil from "../../assets/img/mclovin.jpg";

export default function Header() {
  const [toggleState, setToggleState] = useState(true);

  const change = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <h1 className="title">
        Mi <span>Portafolio</span> Web
      </h1>
      <div id="info" className="info-container">
        <div className="logo">
          <div
            className={`${toggleState ? "hover-show active" : "hover-show"}`}
            onClick={change}
          >
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <img src={imgPerfil} alt="imagen" />
        </div>
        <div id="about" className="contain">
          <h2 className="contain-title">
            <span>Acerca de mi</span>
          </h2>
          <div>
            <p>
              <span>Nombres: </span>McLovin
            </p>
            <p>
              <span>Carrera: </span>Informático
            </p>
            <p>
              <span>Ciclo: </span>8vo
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
              officia maiores ducimus assumenda nam impedit beatae dolore illum
              cupiditate voluptas, quisquam esse distinctio. Sapiente debitis
              laboriosam et nihil, amet voluptatum!
            </p>
          </div>
          <Buttons />
        </div>
      </div>
    </>
  );
}
