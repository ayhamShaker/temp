"use client";

import React, { useRef } from "react";
import Button from "@/components/tailwind/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Template1 from "@/components/Templates/Template1";
import Template2 from "@/components/Templates/Template2";
import Template3 from "@/components/Templates/Template3";
import Template4 from "@/components/Templates/Template4";
import Template5 from "@/components/Templates/Template5";
import Template6 from "@/components/Templates/Template6";
import Template7 from "@/components/Templates/Template7";
import Template8 from "@/components/Templates/Template8";
import Template9 from "@/components/Templates/Template9";
import Template10 from "@/components/Templates/Template10";
import Template11 from "@/components/Templates/Template11";
import Template12 from "@/components/Templates/Template12";

const builder = () => {
  const builderRef = useRef(null);

  const handleGeneratePdf = async () => {
    const inputData = builderRef.current;
    try {
      if (inputData !== null) {
        const canvas = await html2canvas(inputData);
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
          orientation: "p",
          unit: "px",
          format: "a4",
        });

        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", 10, 10, width, height);

        pdf.save("name_cv.pdf");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>builder</div>
      <div ref={builderRef} className="p-2">
        {/* <Template1 /> */}
        {/* <Template2 /> */}
        {/* <Template3 /> */}
        {/* <Template4 /> */}
        {/* <Template5 /> */}
        {/* <Template6 /> */}
        {/* <Template7 /> */}
        {/* <Template8 /> */}
        {/* <Template9 /> */}
        {/* <Template10 /> */}
        {/* <Template11 /> */}
        <Template12 />
      </div>
      <Button color={"blue"} onClick={handleGeneratePdf}>
        Download CV
      </Button>
    </>
  );
};

export default builder;