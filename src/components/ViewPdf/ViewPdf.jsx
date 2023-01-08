import React, { useEffect } from "react";
import "./ViewPdf";
// import pdf from "./CV_Data_Germán_Huaytalla.pdf";

export default function ViewPdf() {
  // useEffect(() => {
  //   if (typeof window.orientation !== "undefined") {
  //     document.getElementById("enlace").click();
  //     window.close();
  //   }
  // }, []);

  return (
    <div className="pdf-container">
      {/* <object
        data={require("./CV_Data_Germán_Huaytalla.pdf")}
        type="application/pdf"
        className="pdf-obj"
      >
        <br />
        <a
          href={require("./CV_Data_Germán_Huaytalla.pdf")}
          id="enlace"
          download="./CV_Data_Germán_Huaytalla.pdf"
        >
          Tu dispositivo no puede visualizar los PDF, da click para descargarlo
        </a>
      </object> */}
    </div>
  );
}
