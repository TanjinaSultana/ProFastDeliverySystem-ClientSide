import React from "react";

const SalesCard = ({ logo, alt , width, height}) => {
  return (
    <div className="flex items-center justify-center mx-4">
      <img 
  src={logo} 
  alt={alt} 
  className={`w-[${width}px] h-[${height}px] object-contain`} 
/>

    </div>
  );
};

export default SalesCard;
