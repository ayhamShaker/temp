import React from "react";

const Template2 = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className=" relative mx-auto max-w-7xl py-20 px-6 lg:py-24">
        <div className="relative">
          {/* <!-- Your Name --> */}
          <h1 className="relative z-10 font-extrabold text-4xl mb-1">
            Jonathan Lewis
          </h1>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-4 xl:gap-24  ">
            {/* <!-- Your Title --> */}
            <h2 className="text-2xl">Professional Title</h2>

            <div className="grid-3 xl:grid-3 mt-5 gap-4 border-t-2 border-gray-300 pt-4 lg:col-span-3 lg:flex lg:justify-between">
              <div className="flex items-center">
                {/* <!-- Contact 1 Icon --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>

                {/* <!-- Contact 1 --> */}
                <div className="ml-3">
                  <p className="mb-0 text-sm font-semibold">Email</p>
                  <p className="mb-0">
                    <a
                      href="mailto:support@resumewind.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      support@resumewind.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                {/* <!-- Contact 2 Icon --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  ></path>
                </svg>

                {/* <!-- Contact 2 --> */}
                <div className="ml-3">
                  <p className="mb-0 text-sm font-semibold">GitHub</p>
                  <p className="mb-0">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/username
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                {/* <!-- Contact 3 Icon --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                  ></path>
                </svg>

                {/* <!-- Contact 3 --> */}
                <div className="ml-3">
                  <p className="mb-0 text-sm font-semibold">Website</p>
                  <p className="mb-0">
                    <a
                      href="https://resumewind.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      resumewind.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[-3rem] -left-12 h-40 w-40 rounded-full bg-orange-400 lg:top-[-3.5rem] lg:h-[13rem] lg:w-[13rem]"></div>
        </div>

        <div className="grid-3 mt-12 items-start gap-10 lg:mt-24 lg:gap-24 ">
          {/* <!-- Work Experience --> */}
          <div className="lg:col-span-2">
            <h3 className=" font-semibold text-2xl pb-2 border-b border-b-slate-950">
              Work Experience
            </h3>

            {/* <!-- Work Experience 1 --> */}
            <div className="grid-3 gap-x-6">
              <div>
                {/* <!-- Company 1 --> */}
                <h4 className="mb-1 lg:mb-2 mt-4 text-xl">Company Name 1</h4>
                <p className="mb-1 text-sm">
                  <a
                    href="https://resumewind.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    companywebsite.com
                  </a>
                </p>
                <p className="text-sm">Sept. 2021 - Present</p>
              </div>

              <div className="lg:col-span-2">
                {/* <!-- Job Title 1 --> */}
                <h4 className="mb-4 text-xl mt-3">Job Title 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer a imperdiet urna. Praesent eu posuere magna, in
                  suscipit quam. Here is an example of an
                  <a
                    href="https://resumewind.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    external link
                  </a>
                  .
                </p>
                <p>
                  Mauris ullamcorper neque in ultrices mollis. Sed justo eros,
                  mollis sed odio id, finibus gravida enim. Aenean pharetra ante
                  elit, sit amet accumsan felis suscipit vitae. Vestibulum ante
                  ipsum primis.
                </p>
                <ul>
                  <li>Cras in erat bibendum, rhoncus nisl ac, luctus tortor</li>
                  <li>Vivamus volutpat nunc non quam dapibus</li>
                  <li>Nulla molestie odio odio, ut congue dui</li>
                </ul>
              </div>
            </div>

            {/* <!-- Work Experience 2 --> */}
            <div className="grid-3 mt-8 gap-x-6 lg:mt-12">
              <div>
                {/* <!-- Company 2 --> */}
                <h4 className="mb-1 lg:mb-4">Company Name 2</h4>
                <p className="mb-1 text-sm">
                  <a
                    href="https://resumewind.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    companywebsite.com
                  </a>
                </p>
                <p className="text-sm">Oct. 2019 - Sept. 2021</p>
              </div>

              <div className="lg:col-span-2">
                {/* <!-- Job Title 2 --> */}
                <h4 className="mb-4">Job Title 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer a imperdiet urna. Praesent eu posuere magna, in
                  suscipit quam. Here is an example of an
                  <a
                    href="https://resumewind.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    external link
                  </a>
                  .
                </p>
                <p>
                  Mauris ullamcorper neque in ultrices mollis. Sed justo eros,
                  mollis sed odio id, finibus gravida enim. Aenean pharetra ante
                  elit, sit amet accumsan felis suscipit vitae. Vestibulum ante
                  ipsum primis.
                </p>
                <ul>
                  <li>Cras in erat bibendum, rhoncus nisl ac, luctus tortor</li>
                  <li>Vivamus volutpat nunc non quam dapibus</li>
                  <li>Nulla molestie odio odio, ut congue dui</li>
                </ul>
              </div>
            </div>

            {/* <!-- Work Experience 3 --> */}
            <div className="grid-3 mt-8 lg:mt-12">
              <div>
                {/* <!-- Company 3 --> */}
                <h4 className="mb-1 lg:mb-4">Company Name 3</h4>
                <p className="mb-1 text-sm">
                  <a
                    href="https://resumewind.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    companywebsite.com
                  </a>
                </p>
                <p className="text-sm">Jan. 2016 - Oct. 2019</p>
              </div>

              <div className="lg:col-span-2">
                {/* <!-- Job Title 3 --> */}
                <h4 className="mb-4">Job Title 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer a imperdiet urna. Praesent eu posuere magna, in
                  suscipit quam. Here is an example of an
                  <a
                    href="https://resumewind.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    external link
                  </a>
                  .
                </p>
                <p>
                  Mauris ullamcorper neque in ultrices mollis. Sed justo eros,
                  mollis sed odio id, finibus gravida enim. Aenean pharetra ante
                  elit, sit amet accumsan felis suscipit vitae. Vestibulum ante
                  ipsum primis.
                </p>
                <ul>
                  <li>Cras in erat bibendum, rhoncus nisl ac, luctus tortor</li>
                  <li>Vivamus volutpat nunc non quam dapibus</li>
                  <li>Nulla molestie odio odio, ut congue dui</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            {/* <!-- Profile --> */}
            <h3>Profile</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              semper sapien ligula, vestibulum eleifend erat pellentesque quis.
              Suspendisse potenti. Mauris et malesuada nisl, eu tempus nisi.
            </p>

            {/* <!-- Skills --> */}
            <h3 className="mt-12 lg:mt-16">Skills</h3>

            {/* <!-- Skills 1 --> */}
            <h4>Programming Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>

            {/* <!-- Skills 2 --> */}
            <h4 className="mt-8">Libraries &amp; Frameworks</h4>
            <ul>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Next.js</li>
              <li>Gatsby.js</li>
            </ul>

            {/* <!-- Education --> */}
            <h3 className="mt-12 lg:mt-16">Education</h3>
            <h4 className="mb-1">Name Of University</h4>
            <p className="mb-1">Enter Your Degree</p>

            {/* <!-- References --> */}
            <h3 className="mt-12 lg:mt-16">References</h3>

            {/* <!-- Reference 1 --> */}
            <h4 className="mb-1">Reference Name 1</h4>
            <p>Reference Title 1</p>

            {/* <!-- Reference 2 --> */}
            <h4 className="mt-8 mb-1">Reference Name 2</h4>
            <p className="mb-1">Reference Title 2</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Template2;
