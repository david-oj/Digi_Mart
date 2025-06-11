import {
  Hero,
  Trusted,
  WhyShop,
  Featured,
  Header,
  Popular,
  Deals,
  NewsLetter,
  Footer,
} from "@/sections";
import Reviews from "./sections/Reviews";

function App() {
  return (
    <div className="overflow-hidden bg-gradient-to-t from-blue-50  to-purple-50">
      <Header />
      <Hero />
      <Trusted />
      <WhyShop />
      <Featured />
      <Popular />
      <Deals />
      <Reviews />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
