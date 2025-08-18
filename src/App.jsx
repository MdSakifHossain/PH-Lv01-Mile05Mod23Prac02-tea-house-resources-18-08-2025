import { pageData } from "./utils/pageData";
import BannerSection from "./sections/BannerSection";
import FeaturedProductsSection from "./sections/FeaturedProductsSection";
import PresentationSection from "./sections/PresentationSection";

function App() {
  return (
    <main className="font-display px-56 pt-16 pb-80">
      <BannerSection />
      <FeaturedProductsSection pageData={pageData} />
      <PresentationSection />
    </main>
  );
}

export default App;
