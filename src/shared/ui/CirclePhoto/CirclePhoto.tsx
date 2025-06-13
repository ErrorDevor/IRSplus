import React from "react";

interface CirclePhotoProps {
  imageSrc: string;
  size?: number;
  alt?: string;
  backgroundPosition?: string;
  backgroundSize?: string; 
  borderRadius?: string;
}

export const CirclePhoto: React.FC<CirclePhotoProps> = ({
  imageSrc,
  size = 80,
  alt,
  backgroundPosition = "center",
  backgroundSize = "cover",
  borderRadius = "50%",
}) => {
  return (
    <div
      role="img"
      aria-label={alt || "circle photo"}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: borderRadius,
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundRepeat: "no-repeat",
        flexShrink: 0,
      }}
    />
  );
};
