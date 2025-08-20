import React from "react";

const ClientsReviewCard = () => {
  return (
    <div className="bg-white rounded-lg px-10 py-12 w-[26rem] flex flex-col gap-5 relative">
      <p className="text-dark-3 leading-7">
        We are providing the best and suitable home insurance services for the
        people who are interested to treatmep
      </p>
      <div>
        <h3 className="font-bold leading-7">Ilham Yuda</h3>
        <p className="text-dark-3 leading-7 font-medium">Businessman</p>
      </div>
      <img
        className="size-16 absolute -top-[10%] -left-[5%] rounded-full border-4 border-white bg-white"
        src="/images/client.png"
        alt="Client"
      />
      <img
        className="size-6 absolute bottom-6 right-6"
        src="/images/circles.png"
        alt="circles"
      />
    </div>
  );
};

export default ClientsReviewCard;
