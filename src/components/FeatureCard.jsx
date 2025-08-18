import React from "react";

const FeatureCard = ({ product }) => {
  return (
    <div
      className="bg-gradient-to-b from-[#F4F4F4] to-transparent rounded-xl py-9
                          flex flex-col gap-8 items-center justify-center"
    >
      <img
        className="w-[8.5rem]"
        src={product.imageSrc}
        alt={product.altText}
      />
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-extrabold text-2xl">{product.title}</h3>
        <p className="font-semibold text-dark-3">
          Creamer could be replaced by
          <br />
          fresh milk
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
