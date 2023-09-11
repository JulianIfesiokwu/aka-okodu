import React from "react";

const Home = () => {
  return (
    <>
      <section className="w-full bg-home bg-blue-500 bg-center bg-cover bg-top bg-no-repeat h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 p-8 text-white">
          <h1 className="text-5xl font-bold text-center font-title mb-2">
            Aka Okodu
          </h1>
          <p className="text-center text-xl md:text-3xl w-3/5 font-main">
            Official website
          </p>
        </div>
      </section>
      <section className="bg-blue-500 bg-home bg-blue-500"></section>
    </>
  );
};

export default Home;
