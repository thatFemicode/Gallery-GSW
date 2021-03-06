import React, { useState, createRef, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { MainStyled } from "../MainStyled";
import { HomeStyled } from "./HomeStyled";
import Layout from "../Components/Layout/Layout";
import Hero from "../Components/Hero/Hero";
import Story from "../Components/Story/Story";
import Future from "../Components/Future/Future";
import Tribute from "../Components/Tribute/Tribute";
import Footer from "../Components/Footer/Footer";
// import Scroll from "../Components/SmoothScroll/SmoothScroll";

const Home = () => {
  const [active, setActive] = useState("one");

  let refs = [];
  const app = useRef(null);
  // create and track refs for later use
  const newRef = () => {
    const ref = createRef();

    refs.push(ref);

    return ref;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          // if 90% of the section is visible
          if (entry.isIntersecting) {
            // update the active state to the visible section
            setActive(entry.target.id);
          }
        }
      },
      {
        // root property defaults to the browser viewport

        // intersection ratio (90% of section must be visibile)
        threshold: 0.9,
        rootMargin: `100px 0px 100px 0px`,
      }
    );

    refs.forEach((ref) =>
      // observe the refs that were applied to the sections
      observer.observe(ref.current)
    );
  }, []);

  return (
    <HomeStyled>
      <MainStyled>
        <Navbar />
        {/* <Scroll />  */}
        <Layout refs={refs}>
          <Hero
            id="one"
            ref={newRef()}
            active={active === "one" ? true : false}
          />
          <Story
            id="two"
            ref={newRef()}
            active={active === "two" ? true : false}
          />
          <Future
            id="three"
            ref={newRef()}
            active={active === "three" ? true : false}
          />
          <Tribute
            id="four"
            ref={newRef()}
            active={active === "four" ? true : false}
          />
        </Layout>
        <Footer />
      </MainStyled>
    </HomeStyled>
  );
};

export default Home;
