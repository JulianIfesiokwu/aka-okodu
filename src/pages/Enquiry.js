import React from "react";

const Enquiry = () => {
  return (
    <>
      <section className="w-full bg-enquiry bg-blue-500 bg-center bg-cover bg-top bg-no-repeat h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 p-8 text-white">
          <h1 className="text-5xl font-bold text-center font-title mb-2">
            Contact Us
          </h1>
          <p className="text-center text-xl md:text-3xl w-3/5 font-main">
            Like to get to know us better?
          </p>
        </div>
      </section>
      <section className="md:w-4/5 m-auto p-8 rounded md:flex sm:flex-col md:flex-row md:items-stretch md:justify-center">
        <div className="md:w-1/2 bg-blue-500 p-4 text-white rounded-t md:rounded-none md:rounded-l lg:p-8 flex flex-col">
          <article className="w-full flex flex-col justify-center mb-4">
            <h2 className="text-2xl font-bold mb-2 font-title">Get In Touch</h2>
            <p className="font-main ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              libero voluptates? Sed sequi soluta unde hic voluptatum tenetur
              atque error.
            </p>
          </article>
          <article className="w-full flex flex-col justify-center mb-4">
            <h3 className="text-xl font-bold mb-2 font-title">
              Send Us an email
            </h3>
            <p className="font-main">juliebabe@gmail.com</p>
          </article>
          <article className="w-full flex flex-col justify-center mb-4">
            <h3 className="text-xl font-bold mb-2 font-title">Office</h3>
            <p className="font-main">
              2 Ayinde Street, Ikate, Suru-lere, Lagos.
            </p>
          </article>
          <article className="w-full flex flex-col justify-center mb-4 ">
            <h3 className="text-xl font-bold mb-2 font-title">Phone</h3>
            <p className="font-main">0818 369 4484</p>
          </article>
        </div>
        <form className="md:w-1/2 bg-slate-100 p-4 rounded-b md:rounded-r lg:p-8 flex flex-col">
          <h2 className="text-2xl font-bold mb-2 font-title text-[#000033]">
            Message Us
          </h2>
          <input
            type="text"
            className="w-full mb-4 p-2 rounded"
            placeholder="Your name"
          />
          <input
            type="email"
            className="w-full mb-4 p-2 rounded"
            placeholder="Your email"
          />
          <textarea
            className="w-full mb-4 p-2 rounded"
            rows="8"
            placeholder="Your message"
          />
          <button className="w-full p-4 bg-blue-500 text-white font-bold text-lg rounded">
            Send Your message
          </button>
        </form>
      </section>
    </>
  );
};

export default Enquiry;
