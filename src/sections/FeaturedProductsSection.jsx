import FeatureCard from "../components/FeatureCard";

const FeaturedProductsSection = ({ pageData }) => {
  return (
    <section className="mt-48 flex flex-col gap-12">
      <div className="flex flex-col gap-5 items-center text-center">
        <h2 className="font-extrabold text-5xl">Our Featured Products</h2>
        <p className="font-medium text-dark-3">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form,
          <br />
          by injected humour, or randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-4 px-32">
        {pageData.featuredSection.products.map((product, _) => (
          <FeatureCard key={_} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
