import React from "react";

const Template1 = () => {
  return (
    <div className=" h-auto- m-4">
      <div className="border border-gray-900 p-20 max-w-[1425px]">
        {/* header (profile) */}
        <header>
          <div className="flex justify-between items-center">
            <img
              src="https://randomuser.me/api/portraits/men/94.jpg"
              alt="avatar"
              className="absolute mb-6 w-60 h-60 bg-gray-300 rounded-full"
            />

            <div>
              <div
                className="bg-cover bg-no-repeat rounded-full h-52 w-52"
                style={{ backgroundImage: "url(../bootstrap/dog.jpg)" }}
              ></div>
            </div>
            <div className="grid justify-items-end">
              <h1 className="text-7xl font-extrabold">DAHYE JI</h1>
              <p className="text-xl mt-5">Aspiring Front-End Developer</p>
            </div>
          </div>
        </header>
        {/* detailed info */}
        <main className="flex gap-x-10 mt-10">
          <div className="w-2/6">
            {/* contact details */}
            <strong className="text-xl font-medium">Contact Details</strong>
            <ul className="mt-2 mb-5 pb-2 border-b-[2px]">
              <li className="px-2 mt-1">
                <strong className="mr-1">Phone </strong>
                <a href="tel:+821023456789" className="block">
                  +82 10 2345 6789
                </a>
              </li>
              <li className="px-2 mt-1">
                <strong className="mr-1">E-mail </strong>
                <a href="mailto:" className="block">
                  aspiringfe@helloworld.com
                </a>
              </li>
              <li className="px-2 mt-1">
                <strong className="mr-1">Location</strong>
                <span className="block">Seoul, South Korea</span>
              </li>
            </ul>
            {/* github stats */}
            {/* skills */}
            <strong className="text-xl font-medium">Skills</strong>
            <ul className="mt-2 pb-2 border-b-[2px] mb-5">
              <li className="px-2 mt-1">HTML</li>
              <li className="px-2 mt-1">CSS</li>
              <li className="px-2 mt-1">JavaScript</li>
              <li className="px-2 mt-1">React</li>
              <li className="px-2 mt-1">Node.js</li>
            </ul>
            <strong className="text-xl font-medium">Further Education</strong>
            <ul className="mt-2 pb-2 border-b-[2px] mb-5">
              <li className="px-2 mt-1">Like Lion Frontend School</li>
              <li className="px-2 mt-1">Udemy</li>
              <li className="px-2 mt-1">Freecodecamp</li>
            </ul>
            {/* what I'm learning these days */}
            <strong className="text-xl font-medium">Currently learning</strong>
            <ul className="mt-2 pb-2 border-b-[2px] mb-5">
              <li className="px-2 mt-1">About Web Accessibility</li>
              <li className="px-2 mt-1">and User Experience</li>
            </ul>
            <strong className="text-xl font-medium">
              Interests &amp; Hobbies
            </strong>
            <ul className=" pb-2 border-b-[2px] mt-2">
              <li className="px-2 mt-1">Sustainability</li>
              <li className="px-2 mt-1">New technologies</li>
              <li className="px-2 mt-1">Blogging on dev.to</li>
              <li className="px-2 mt-1">Investment</li>
              <li className="px-2 mt-1">Travel</li>
            </ul>
          </div>
          {/* info */}
          <div className="w-4/6">
            <section>
              {/* about me */}
              <h2 className="text-2xl pb-1 border-b-[2px] font-semibold">
                About
              </h2>
              <p className="mt-4 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus deserunt modi qui. Dolorum aliquid quasi velit
                cupiditate officia magnam impedit, sapiente hic, eaque quaerat
                ullam fugiat reprehenderit voluptates odit! Error. Tempore fuga
                iusto eveniet omnis impedit repellat ab repellendus nesciunt
                similique. Iure voluptates, enim nesciunt tempora amet earum,
                porro rem ad et sequi corrupti neque quidem? Debitis quo
                quibusdam nemo. Nam doloremque perferendis tempora asperiores,
                ullam praesentium et, voluptas pariatur illo aliquid similique,
                fugiat repellendus ipsa necessitatibus minus hic culpa quasi.
                Sed voluptate itaque accusantium earum cupiditate ipsa neque
                magnam!
              </p>
            </section>
            <section>
              {/* work experiences */}
              <h2 className="text-2xl mt-6 pb-1 border-b-[2px] font-semibold">
                Work Experiences
              </h2>
              <ul className="mt-2">
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Company Name</strong>2019-2021
                  </p>
                  <p className="flex justify-between text-base">
                    Job title<small>location</small>
                  </p>
                  <p className="text-justify text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, expedita exercitationem, cum quisquam laboriosam
                    voluptas aut libero officiis quae natus laborum explicabo,
                    labore nobis porro ad et soluta deleniti. Rerum?
                    Voluptatibus id officiis adipisci eligendi provident minima
                    sed. Ullam aliquid, fuga nisi modi amet quasi, quod veniam
                    eos sit culpa distinctio rem a tempora ad autem soluta
                    rerum, doloremque quas?
                  </p>
                </li>
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Company Name</strong>2014-2019
                  </p>
                  <p className="flex justify-between text-base">
                    Job title<small>location</small>
                  </p>
                  <p className="text-justify text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus nemo fugiat neque tempore consectetur nihil alias
                    ullam esse corporis fugit deserunt maxime, numquam eos
                    repellendus, deleniti quae at fuga repudiandae! Perspiciatis
                    odit nobis sunt! Natus ea reiciendis enim! Itaque possimus
                    eaque perspiciatis architecto reiciendis laboriosam voluptas
                    corporis unde ducimus quis aliquid, distinctio dolorum quo
                    ullam a at, fugit veniam optio.
                  </p>
                </li>
              </ul>
            </section>
            <section>
              {/* education */}
              <h2 className="text-2xl mt-6 pb-1 border-b-[2px] font-semibold">
                Education
              </h2>
              <ul className="mt-2">
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Hello Univerisity</strong>
                    2022-2019
                  </p>
                  <p className="flex justify-between text-sm">
                    Digital marketing<small>GPA 4.0</small>
                  </p>
                </li>
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">World Univerisity</strong>
                    2022-2019
                  </p>
                  <p className="flex justify-between text-sm">
                    Fashion Design<small>GPA 3.8</small>
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </main>
        {/* short lines to introduce myself */}
      </div>
    </div>
  );
};

export default Template1;
