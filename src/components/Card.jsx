import React from "react";

const Card = (p) => {
  return (
    <div className="rounded-xl shadow-lg shadow-gray-300-200 p-10 mt-10 justify-center">
      <img className="w-32 h-32" src={p.image} alt="" />
      <p>{p.title}</p>
      <p>{p.desc}</p>

      <p>Design Tools I Use</p>
      <ul>
        {p.tools.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

//
//     title: "Brand Design",
//     icon: "",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     tools: ["Figma", "Adobe XD", "Adobe Illustrator"],
