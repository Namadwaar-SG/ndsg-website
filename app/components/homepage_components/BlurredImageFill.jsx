import React from "react";
import Image from "@node_modules/next/image";

const BlurredImageFill = ({ src, alt = "", className = "" }) => {
  return (
    <div className={`relative w-full h-3/4 overflow-hidden ${className}`}>
      {/* Blurred background */}
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
        aria-hidden="true"
      />

      {/* Main content */}
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="relative z-10 max-w-full max-h-full object-contain mx-auto"
      />
    </div>
  );
};

export default BlurredImageFill;
