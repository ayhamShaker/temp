import React from "react";

const Template11 = () => {
  return (
    <div className="m-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="bg-gray-600 w-full lg:w-auto p-5">
        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/men/94.jpg"
            alt="avatar"
            className="border-white border-8 rounded-full w-40 h-40 mx-auto mt-5"
          />
          <h1 className="text-xl mt-9 text-white">
            Contact
            <p className="border border-white w-8 mt-3 mb-5 opacity-60 mx-auto"></p>
            <p>asdasdasd@gmail.co,.</p>
            <p className="mt-3">Location: Lorem ipsut consectetur.</p>
            <p className="mt-3">0123456789</p>
          </h1>
        </div>

        <div className="mt-10">
          <h1 className="text-xl text-white">
            Education
            <p className="border border-white w-8 mt-3 mb-5 opacity-60 mx-auto"></p>
            <ol className="list-disc ml-7">
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>d asd asd</li>
              <li>dsad r adipiatque totam saepe!</li>
              <li>sadr adipi sicing elit. Doloribus atque totam saepe!</li>
            </ol>
          </h1>
        </div>

        <div className="mt-10">
          <h1 className="text-xl text-white">
            Skills
            <p className="border border-white w-8 mt-3 mb-5 opacity-60 mx-auto"></p>
            <ol className="list-disc ml-7">
              <li>d asd asd asda sdasd</li>
              <li>d asd asd</li>
              <li>dsad r adipiatque t</li>
              <li>sadr adipi sicing elit.</li>
            </ol>
          </h1>
        </div>
      </div>

      <div className="col-span-3">
        <div className="bg-cyan-400 p-10 text-center">
          <img
            src="https://randomuser.me/api/portraits/men/94.jpg"
            alt="logo"
            className="m-auto w-24 h-24 pb-5"
          />
          <h1 className="text-5xl">Full Name</h1>
          <p className="border border-black w-60 m-auto mt-3 opacity-60"></p>
          <p className="text-3xl opacity-55 mt-3">Work Title</p>
        </div>

        <div className="p-5">
          <div className="mt-9">
            <h2 className="text-3xl">Experience</h2>
            <p className="border border-black w-10 mt-3 mb-5 opacity-40"></p>
            <div>
              <h3 className="text-lg">Title</h3>
              <p className="border border-black w-40 mt-3 mb-5 opacity-40"></p>
              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                illum esse ut debitis, quasi nisi quo optio alias repellat
                delectus ipsa. Mollitia, accusamadipisicing elit.
              </p>
            </div>
            <div>
              <h3 className="text-lg">Title</h3>
              <p className="border border-black w-40 mt-3 mb-5 opacity-40"></p>
              <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                illum esse ut debitis, quasi nisi quo optio alias repellat
                delectus ipsa. Mollitia, accusamadipisicing elit.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl">Language</h2>
            <p className="border border-black w-16 mt-3 mb-5 opacity-40"></p>
            <ol className="list-disc ml-7">
              <li>d asd asd aserunt? dasda sdsadsa</li>
              <li>d asd asd asda</li>
              <li>d loem8</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template11;
