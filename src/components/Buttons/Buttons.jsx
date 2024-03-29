import "./Buttons.css";
import pdf from "../../assets/pdf/CV_Data_Germán_Huaytalla.pdf";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#footer" className="btn pri">
        Contáctame
      </a>
      <a
        href="https://drive.google.com/file/d/1vW4K6fq9_jmMQUhyWItpoCTDwclHvb9I/view?usp=drivesdk"
        className="btn sec"
        target={"_blank"}
      >
        Descargar CV
      </a>
    </div>
  );
}

export default Buttons;
// //Nuetros doc en drive:
// https://drive.google.com/file/d/1P9dMn0s5SnD69oMBqYQSS3g6c1wEz0T2/view?usp=sharing
// //Ejemplo compartido:
// https://drive.google.com/uc?export=download&id=1P9dMn0s5SnD69oMBqYQSS3g6c1wEz0T2
