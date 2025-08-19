import { pageData } from "./utils/pageData";
import BannerSection from "./sections/BannerSection";
import FeaturedProductsSection from "./sections/FeaturedProductsSection";
import PresentationSection from "./sections/PresentationSection";

function App() {
  return (
    <>
      <header className="font-display px-56 pt-16 ">
        <BannerSection />
      </header>
      <main className="font-display mt-48 px-[22rem] pb-80">
        <FeaturedProductsSection pageData={pageData} />
        <PresentationSection />
      </main>
    </>
  );
}

export default App;
