import React from "react";
import MemberCard from "../components/MemberCard";
import { executive, members, trustees } from "../data";

const Membership = () => {
  return (
    <>
      <section className="w-full bg-members bg-blue-500 bg-center bg-cover bg-top bg-no-repeat h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 p-8 text-white">
          <h1 className="text-5xl sm:text-4xl font-bold text-center font-title mb-2">
            Our Team
          </h1>
          <p className="text-center text-xl md:text-3xl w-3/5 font-main">
            As a result of our philosophy to be the most forward thinking
            company and our focus on understanding.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#f2f2f2] p-8">
        <article className="flex flex-wrap gap-4 items-center justify-center mb-8">
          <h2
            className="text-center text-blue-500 text-3xl md:text-4xl font-bold mb-4 font-title"
            id="board"
          >
            Board of Trustees
          </h2>
          <article className="flex flex-wrap gap-4 items-center justify-center">
            {trustees.map((person, index) => {
              const { title, img, executiveName } = person;
              return (
                <MemberCard
                  key={index}
                  title={title}
                  img={img}
                  personsName={executiveName}
                />
              );
            })}
          </article>
        </article>
        <article className="flex flex-wrap gap-4 items-center justify-center">
          <h2
            className="text-center  text-blue-500 text-3xl md:text-4xl font-bold mb-4 font-title"
            id="committee"
          >
            Executive Committee
          </h2>
          <article className="flex flex-wrap gap-4 items-center justify-center">
            {executive.map((person, index) => {
              const { title, img, executiveName } = person;
              return (
                <MemberCard
                  key={index}
                  title={title}
                  img={img}
                  personsName={executiveName}
                />
              );
            })}
          </article>
        </article>
        <article className="flex flex-wrap gap-4 items-center justify-center">
          <h2
            className="text-center text-blue-500 text-3xl md:text-4xl font-bold mb-4 font-title"
            id="distinguished"
          >
            Distinguished Members
          </h2>
          <article className="flex flex-wrap gap-4 items-stretch justify-center">
            {members.map((person, index) => {
              const { title, img, membersName } = person;
              return (
                <MemberCard
                  key={index}
                  title={title}
                  img={img}
                  personsName={membersName}
                />
              );
            })}
          </article>
        </article>
      </section>
    </>
  );
};

export default Membership;
