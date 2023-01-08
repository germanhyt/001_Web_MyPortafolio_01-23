import "./Header.css";
import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import imgPerfil from "../../assets/img/Foto_germán.png";

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
              <span>Nombres: </span>Germán Huaytalla Aquino
            </p>
            <p>
              <span>Carrera: </span>Ingeniería de Sistemas
            </p>
            <p>
              <span>Ciclo: </span>8vo
            </p>
            <p>
              Preprofesional de Ingeniería de Sistemas, honesto, comprometido
              con las actividades a realizar. Soy una persona autodidacta, capaz
              de liderar y trabajar en equipo. Mi objetivo es ser analista de
              Sistemas de TI, y además aprender más sobre el campo de análisis
              de datos.
            </p>
          </div>
          <Buttons />
        </div>
      </div>
    </>
  );
}
