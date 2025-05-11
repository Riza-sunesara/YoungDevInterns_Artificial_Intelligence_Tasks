import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Predict from "./Predict";

const Home = () => {
  return (
    <article className="min-h-screen w-full  px-2 flex flex-col gap-14 mx-auto">
      <Hero />
      <Predict />
      <Category />
    </article>
  );
};


export default Home;
