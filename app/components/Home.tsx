"use client";

import React from "react";
import Header from "./Header";
import Features from "./Features";
import MusicSection from "./MusicSection";
import ReviewCarousel from "./Reviews";

const bgUrl = "/bg.avif";

const Home = () => {
  return (
    <div>
      <Header backgroundImage={bgUrl} />
      <div id="features">
        <Features />
      </div>
      <div id="music">
        <MusicSection />
      </div>
      <div id="reviews">
        <ReviewCarousel />
      </div>
      {/* <ParallaxSection /> */}
    </div>
  );
};

export default Home;
