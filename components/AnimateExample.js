import React from "react";
import ImageDescriptionSection from "./ImageDescriptionSection";

function AnimateExample() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <ImageDescriptionSection
        imageSrc={
          "https://1.bp.blogspot.com/-TxCsd-Lgd_c/XZGE_IfQxvI/AAAAAAAAcbk/mSRNT9XAzrgdZ77lX93omJQIuQat6m7qQCLcBGAsYHQ/s2560/monkey-d-luffy-one-piece-4k-ln-2560x1440.jpg"
        }
        description="In this setup, the ImageDescriptionSection component takes an imageSrc and description as props. It uses Framer Motion for animations, displaying the image and description side by side for larger screens and stacking them vertically for mobile screens.Remember to adjust the paths and styles as per your project's setup and design preferences."
      />
    </div>
  );
}

export default AnimateExample;
