import React from "react";

const Hero = () => {
  return (
    <section className="bg-slate-50 rounded-md shadow-xl min-h-screen md:h-80vh">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center md:h-full">
        <div className="w-full md:w-1/2 p-10 text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-6xl leading-none text-primary">
            Spend Smarter <br className="md:hidden" /> Save More
          </h1>
          <p className="mb-10 text-xl md:text-3xl font-medium">
            Simple way to manage personal finances
          </p>
          <button className="btn btn-green">Get started</button>
        </div>
        <div className="w-full md:w-1/2 text-center inline h-1/2 md:h-full">
          <img className="w-full md:max-h-full" src="/Group.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
