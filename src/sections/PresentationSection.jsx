const PresentationSection = () => {
  return (
    <section className="mt-36 grid grid-cols-2 gap-12 px-32">
      {/* image section */}
      <div className="grid gap-8 grid-cols-2 grid-rows-3 *:rounded-xl">
        <div className="bg-gradient-to-r from-[#FF8938] to-[#FF0000] opacity-10"></div>
        <div className="row-span-2 bg-[rgba(230,165,35,0.1)] py-11 flex items-center justify-center">
          <img src="/public/images/fresh-1.png" alt="fresh1" />
        </div>
        <div className="row-span-2 bg-[rgba(88,118,57,0.1)] py-11 flex items-center justify-center">
          <img src="/public/images/fresh-2.png" alt="fresh2" />
        </div>
        <div className="bg-gradient-to-r from-[#F4F4F4] to-transparent"></div>
      </div>
      {/* text section */}
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-5">
          <h2 className="font-extrabold text-5xl leading-[130%]">
            Great Tea, Freshly
            <br />
            Presented
          </h2>
          <p className="text-dark-3 leading-[1.75rem] text-base font-medium">
            The meaning of gong cha is chanese is to provide the best tea to
            <br />
            emperor from all possessions . It represents the highest quality and
            <br />
            self expectation. Establishing in 2006, Gong cha had been deeply
            <br />
            appreciated by its custoers because of good words of mouth and
            unique
            <br />
            customized service orginated from Taiwan.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2.5">
            <h4 className="font-extrabold text-xl">Unique Taste</h4>
            <p className="font-medium text-dark-3 leading-[1.75rem]">
              A Unique and different style from other teapots gives a luxurious
              <br />
              and minimalist impression
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="font-extrabold text-xl">Premium Quality</h4>
            <p className="font-medium text-dark-3 leading-[1.75rem]">
              Premium Quality that makes tea more elegant and more durable when
              <br />
              you use it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
