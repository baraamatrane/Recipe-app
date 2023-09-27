import Headre from "./Headre";
import Navbar from "./Navbar";
import Section from "./Section.js";
import Footer from "./Footer.js";

import "./Recipe.css";
export default function page() {
  return (
    <div className="flex flex-1 flex-col mx-auto ">
      <Navbar />
      <Headre />
      <Section />
      <Footer />
    </div>
  );
}
