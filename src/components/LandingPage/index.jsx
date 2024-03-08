import React from "react";
import ExpenseCard from "../ExpenseCard";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <section className="max-w-1535 mx-auto md:py-10">
      <Hero />
      <ExpenseCard />
    </section>
  );
};

export default LandingPage;
