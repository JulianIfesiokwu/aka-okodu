import React from "react";

const MemberCard = ({ personsName, img, title }) => {
  return (
    <article className="flex flex-col items-center justify-between mb-6 p-2 md:p-4 bg-white rounded mb-4 w-5/12 sm:w-3/12 md:w-2/12">
      <div className="img-container mb-4">
        <img src={img} className="rounded w-full object-contain" alt="" />
      </div>
      <h3 className="text-xl text-center font-bold mb-1 font-title text-red-600">
        {personsName}
      </h3>
      <p className="font-main text-center">{title}</p>
    </article>
  );
};

export default MemberCard;
