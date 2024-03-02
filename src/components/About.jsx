import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          "I am an experienced software developer with a year of hands-on
          experience specializing in crafting robust and scalable backend
          systems. Proficient in Node.js and MongoDB, I excel in creating
          dynamic and performant applications. Additionally, I have expertise in
          React for frontend development, focusing on building efficient user
          interfaces. Passionate about delivering exceptional user experiences,
          I am committed to staying updated with the latest technologies and
          techniques in software development.
        </p>

        <br />

        <p className="text-xl">
          "With a solid foundation in Node.js, MongoDB, and React, I possess a
          comprehensive understanding of modern software development
          technologies. Throughout my experience, I've honed my skills in
          creating backend systems that meet the evolving needs of users.
          Committed to efficiency and innovation, I am eager to tackle new
          challenges and contribute to cutting-edge projects in the field of
          software development.
        </p>
      </div>
    </div>
  );
};

export default About;
