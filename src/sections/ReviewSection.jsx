import ClientsReviewCard from "../components/ClientsReviewCard";

const ReviewSection = () => {
  return (
    <section className="mt-32 rounded-[0.625rem] bg-gradient-to-l from-[#FF0000] to-[#FF8938] px-20 py-24 relative flex items-center justify-center gap-6">
      <div className="text-dark-7 w-6/12 flex flex-col gap-8 items-start">
        <div className="flex flex-col gap-5">
          <h2 className="font-extrabold text-5xl leading-[140%]">
            Meet Our Super
            <br />
            Clients
          </h2>
          <p className="font-medium leading-7">
            There are many variations of passages of Lorem Ipsum available, but
            <br />
            the majority have suffered alteration in some form, by injected
            <br />
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <button className="bg-white rounded-sm px-7 py-3.5 font-bold text-xl">
          <span className="bg-gradient-to-l from-[#FF0000] to-[#FF8938] text-transparent bg-clip-text">
            Show All
          </span>
        </button>
      </div>
      <div className="w-6/12 h-full flex items-center justify-center">
        <ClientsReviewCard />
      </div>
      <img
        className="size-72 absolute bottom-0 left-44 -z-0"
        src="/images/bg_cup.png"
        alt="BG_Cup"
      />
    </section>
  );
};

export default ReviewSection;
