import React from "react";
import arrayDestruct from "../assets/portfolio/securesign.png";
import installNode from "../assets/portfolio/api.png";
import navbar from "../assets/portfolio/rustss.png";
import reactParallax from "../assets/portfolio/authn.jpg";
import reactSmooth from "../assets/portfolio/skillup.png";
import reactWeather from "../assets/portfolio/jwt.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "SecureSign",
      src: arrayDestruct,
      githubLink: "https://github.com/ankitkaushik990/SecureSign.git",
    },
    {
      id: 2,
      name: "AuthGuardian",
      src: reactParallax,
      githubLink: "https://github.com/ankitkaushik990/AuthGuardian.git",
    },
    {
      id: 3,
      name: "Rust D'App",
      src: navbar,
      githubLink:
        "https://github.com/ankitkaushik990/final-todo-DApp-Solana.git",
    },
    {
      id: 4,
      name: "Skill-Up",
      src: reactSmooth,
      githubLink: "https://github.com/ankitkaushik990/Skill-Up-QuesTech.git",
    },
    {
      id: 5,
      name: "Rust-API's",
      src: installNode,
      githubLink: "https://github.com/ankitkaushik990/rust-crud-core-APi-s.git",
    },
    {
      id: 6,
      name: "JWT impl",
      src: reactWeather,
      githubLink:
        "https://github.com/ankitkaushik990/JWT-Bullqueue-Redis-App-impl..git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, name, src, githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold">
                  {name}
                </button>
                <button>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-blue-500"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
