import React from "react";

const BannerSection = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col gap-7 justify-center items-start">
        <h1 className="font-extrabold text-[5rem] leading-[130%]">
          It's good
          <br />
          tea time at The
          <br />
          Tea House
        </h1>
        <p className="font-medium text-lg leading-[1.875rem] text-dark-3">
          Tea and Botanical Solutions Supplier Give Optimum
          <br />
          Satisfaction To Your Taste Buds.
        </p>
        <button className="text-white px-5 py-4 bg-gradient-to-r from-[#FF8938] to-[#FF0000] font-bold text-xl rounded-[0.625rem] flex items-center justify-between gap-2.5">
          <span>Explore More</span>
          <span>
            <i className="fa-solid fa-arrow-up rotate-45"></i>
          </span>
        </button>
      </div>
      <div className="relative">
        <img
          className="relative top-20"
          src="/images/banner.png"
          alt="Banner-Image"
        />
        <div className="bg-white shadow-lg absolute left-24 -bottom-16 flex items-center justify-between gap-2 px-7 py-3.5 rounded-xl">
          <span className="text-3xl text-amber-400">
            <i className="fa-solid fa-star"></i>
          </span>
          <div>
            <h3 className="font-extrabold text-[1.875rem] ">5.00</h3>
            <p className="font-semibold text-dark-3">Trust Pilot Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
