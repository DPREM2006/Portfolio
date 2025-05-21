import React from "react";
export default function About() {
  return (
    <div
      id="About"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="relative flex justify-center items-center mx-auto w-60 h-60 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 filter blur-3xl opacity-70"></div>
            <img
              src="\Images\Profilepic.jpg"
              alt="Profile image"
              className="relative rounded-full border-4 border-white w-60 h-60 object-cover shadow-lg transform hover:scale-110 transition duration-300"
            />
          </div>
          <h1 className="text-5xl font-bold font-sans bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent pb-3">
            Hi,I am D. Prem
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hi, I'm a computer science student with a strong interest in web development. I'm proficient in building responsive and modern websites, and I'm constantly learning and improving through hands-on projects.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="bg-white shadow-md mb-16 p-6 rounded-md">
            <h1 className="text-3xl font-semibold mb-10">
              Professional Journey
            </h1>

            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <p className="text-lg text-gray-600">
                My journey in web development began in 2023 during my B.tech, where I learned the basics of HTML and CSS. Initially, I didn't have much interest in the field, but everything changed in 2025 when I was introduced to full-stack development.

              </p>
              <p className="text-lg text-gray-600">
                Since then, I've been actively exploring and building web applications, and I'm now focused on becoming a skilled and confident web developer.
              </p>
              <p className="text-lg text-gray-600">
                I've worked with technologies like HTML, CSS, JavaScript, React, Tailwind CSS, NodeJS, MongoDB and MySQL, and I enjoy building clean, responsive, and functional websites.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Beyond Coding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-700 font-semibold">
                Open source Contribution
              </h3>
              <p className="text-lg text-gray-800">
                I am actively contributing to open source softwares and projects on github
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-700 font-semibold">
                Visual Storytelling
              </h3>
              <p className="text-lg text-gray-800">
                I use drawing and design to communicate ideas clearly and creatively in projects and interfaces.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-700 font-semibold">
                Team Collaboration
              </h3>
              <p className="text-lg text-gray-800">
                I enjoy working with teams, contributing to design discussions, documentation, and feedback cycles.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-700 font-semibold">
                Continuous learning
              </h3>
              <p className="text-lg text-gray-800">
                I keep updating my knowledge to stay current in web development.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 py-12 px-5 text-white rounded-xl text-center">
          <h3 className="text-4xl text-white font-semibold mb-5">
            Code Repository
          </h3>
          <p className="text-xl text-white mx-auto mb-5">
            You can review my development work on my GitHub profile
          </p>

          <a
            href="https://github.com/DPREM2006"
            className="inline-block bg-white text-indigo-800 px-8 py-3 rounded-xl font-semibold hover:opacity-80 transition-color duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
