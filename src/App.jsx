import React from "react";

function App() {
  return (
    <main className="font-display px-56 pt-16">
      {/* START: Banner Section */}
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
          <button className="text-white px-5 py-4 bg-gradient-to-r from-[#FF8938] to-[#FF0000] font-bold text-xl rounded-[0.625rem]">
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
      {/* END: Banner Section */}

      {/* START: Feature Section */}
      <section className="border mt-48 flex flex-col gap-12">
        <div className="flex flex-col gap-5 items-center text-center">
          <h2 className="font-extrabold text-5xl">Our Featured Products</h2>
          <p className="font-medium text-dark-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form,
            <br />
            by injected humour, or randomised words which don't look even
            slightly believable.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-4">
          <div>
            <img src="/images/tea-1.png" alt="Milk Tea" />
            <div className="flex flex-col">
              <h3 className="font-extrabold text-2xl">Milk Tea</h3>
              <p className="">Creamer could be replaced by fresh milk</p>
            </div>
          </div>
          <div>Card - 2</div>
          <div>Card - 3</div>
          <div>Card - 4</div>
        </div>
      </section>
      {/* END: Feature Section */}
    </main>
  );
}

export default App;
