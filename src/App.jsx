import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Lunch from "./components/Lunch";
import Supper from "./components/Supper";
import Dinner from "./components/Dinner";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Footer from "./components/Footer";
import Effect from "./components/Effect";

import { ReactLenis } from "lenis/react";

function App() {
  return (
    <>
      <ReactLenis root>
        <div>
          <Navbar />
          <Hero />
          <Page1 />
          <Page2 />
          <Lunch />
          <Supper />
          <Dinner />
          <Page3 />
          <Page4 />
          <Page5 />
          <Footer />
          <Effect />
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
