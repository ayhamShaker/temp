"use client";

import React, { useState } from "react";

type TTabs = "Profile" | "Blog" | "Projects";

const page = () => {
  const [profileTab, setProfileTab] = useState<TTabs>("Profile");

  return (
    <main className="w-fit mt-20 mb-20">
      <div className="px-5 lg:p-0 lg:grid grid-cols-1 lg:grid-cols-3 m-auto lg:w-11/12 xl:w-9/12">
        <div>
          {/* profile card */}
          <div className="relative col-span-1  bg-gray-800 border border-gray-700 rounded-xl shadow overflow-hidden mb-5">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover opacity-20"
                src="https://randomuser.me/api/portraits/men/94.jpg"
                alt="Background"
              />
            </div>
            <div className="relative flex justify-center">
              <a href="#">
                <div className="relative mt-4">
                  <img
                    className="w-28 h-28 lg:w-40 lg:h-40 rounded-full p-1 object-cover bg-clip-border bg-gradient-to-t from-white to-blue-500"
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    alt="Profile"
                  />
                </div>
              </a>
            </div>
            <div className="relative p-5 z-10 text-center">
              <a href="#">
                <h5 className="mb-1 text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Ayham Shaker
                </h5>
                <h3 className="mb-5 text-sm lg:text-xl tracking-tight text-white dark:text-white opacity-80">
                  Developer
                </h3>
              </a>
              <p className="mb-3 font-normal text-white dark:text-white">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </p>
              <div className="justify-center lg:justify-normal inline-flex gap-2 gap-y-3 flex-wrap">
                <div className="border-2 bg-slate-300 font-semibold text-center p-0.5 rounded-lg">
                  ayhaham
                </div>
                <div className="border-2 bg-slate-300 font-semibold text-center p-0.5 rounded-lg">
                  ayhamad
                </div>
                <div className="border-2 bg-slate-300 font-semibold text-center p-0.5 rounded-lg">
                  ayhamq 12
                </div>
                <div className="border-2 bg-slate-300 font-semibold text-center p-0.5 rounded-lg">
                  ayhaasd 12e m
                </div>
                <div className="border-2 bg-slate-300 font-semibold text-center p-0.5 rounded-lg">
                  ayhamd sa
                </div>
                <div className="border-2 bg-slate-300 font-semibold text-center p-0.5 rounded-lg">
                  ayham
                </div>
                <div className="border-2 bg-slate-300 font-semibold text-center p-0.5 rounded-lg">
                  ayham
                </div>
              </div>
              <a
                href="#"
                className="mt-5 justify-center inline-flex w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600  dark:bg-blue-500 dark:hover:bg-blue-600 "
              >
                Download CV
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* about me card */}
          <div className=" h-fit col-start-1 bg-gray-800 border border-gray-700 rounded-xl shadow overflow-hidden mb-5">
            <div className="md:w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-7 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                about me
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits: Go to this step by step guideline process
                on how to certify for your weekly benefits: Go to this step by
                step guideline process on how to certify for your weekly
                benefits:
              </p>
              <a
                href="#"
                className="flex font-medium items-center text-blue-300 hover:underline"
              >
                my email@email.com
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-300 hover:underline"
              >
                my website.com
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* information card */}
          <div className="col-start-1 bg-gray-800 border border-gray-700 rounded-xl shadow overflow-hidden mb-5 ">
            <div className=" md:w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                  information
                </h5>
              </div>
              <div className="">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className=" flex  justify-between py-3 sm:py-4">
                    <p className=" flex text-sm font-medium text-gray-900 truncate dark:text-white">
                      Location
                    </p>
                    <p className=" flex relative text-sm text-gray-500 truncate dark:text-gray-400">
                      Oman
                    </p>
                  </li>
                  <li className=" flex  justify-between py-3 sm:py-4">
                    <p className=" flex text-sm font-medium text-gray-900 truncate dark:text-white">
                      Experience
                    </p>
                    <p className=" flex relative text-sm text-gray-500 truncate dark:text-gray-400">
                      Years
                    </p>
                  </li>
                  <li className=" flex  justify-between py-3 sm:py-4">
                    <p className=" flex text-sm font-medium text-gray-900 truncate dark:text-white">
                      Availability
                    </p>
                    <p className=" flex relative text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </li>
                  <li className=" flex  justify-between py-3 sm:py-4">
                    <p className=" flex text-sm font-medium text-gray-900 truncate dark:text-white">
                      Relocation
                    </p>
                    <p className=" flex relative text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* hero */}
        <div className="lg:col-start-2 lg:row-start-1 lg:pl-5 lg:col-end-5">
          {/* Navbar */}
          <div className="w-full ">
            <ul
              className=" text-sm mb-5  rounded-r-lg font-medium text-center text-gray-500 divide-x divide-gray-200  flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
              id="fullWidthTab"
              data-tabs-toggle="#fullWidthTabContent"
              role="list"
            >
              <li className="w-full ">
                <button
                  id="Profile-tab"
                  data-tabs-target="#Profile"
                  type="button"
                  role="tab"
                  aria-controls="Profile"
                  aria-selected="true"
                  className="inline-block w-full text-xl p-4  rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  onClick={() => setProfileTab("Profile")}
                >
                  Profile
                </button>
              </li>
              <li className="w-full">
                <button
                  id="Blog-tab"
                  data-tabs-target="#Blog"
                  type="button"
                  role="tab"
                  aria-controls="Blog"
                  aria-selected="false"
                  onClick={() => setProfileTab("Blog")}
                  className="inline-block  text-xl w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  Blog
                </button>
              </li>
              <li className="w-full">
                <button
                  id="Projects-tab"
                  data-tabs-target="#Projects"
                  type="button"
                  role="tab"
                  aria-controls="Projects"
                  aria-selected="false"
                  onClick={() => setProfileTab("Projects")}
                  className="inline-block rounded-r-lg text-xl w-full p-4  bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
          {/* profile */}
          <div className=" w-full">
            {/* Cards education */}
            <div id="fullWidthTabContent" className="">
              <div
                className={` bg-white  md:p-4 rounded-2xl dark:bg-gray-800 ${
                  profileTab === "Profile" ? "" : "hidden"
                }`}
                id="Profile"
                role="tabpanel"
                aria-labelledby="Profile-tab"
              >
                <div className=" rounded-3xl">
                  <h3 className=" flex pl-8 md:pl-3 md:pt-4 font-semibold text-2xl  text-gray-900 px-5 pt-5  dark:text-white">
                    Education
                  </h3>
                </div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8 ">
                    <h4 className="text-xl mt-6  ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cards experience */}
            <div id="fullWidthTabContent" className="">
              <div
                className={` bg-white  md:p-4 md:mt-5 rounded-2xl dark:bg-gray-800 ${
                  profileTab === "Profile" ? "" : "hidden"
                }`}
                id="Profile"
                role="tabpanel"
                aria-labelledby="Profile-tab"
              >
                <div className=" rounded-3xl">
                  <h3 className=" flex pl-8 md:pl-3 md:pt-4 font-semibold text-2xl  text-gray-900 px-5 pt-5  dark:text-white">
                    experience
                  </h3>
                </div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8 ">
                    <h4 className="text-xl mt-6  ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-[1px] border-opacity-35 border-white m-auto"></div>
                <div className=" max-w-screen-xl text-gray-900  dark:text-white">
                  <div className="m-8">
                    <h4 className="text-xl mt-6 ">
                      {" "}
                      Full-time Software Engineer
                    </h4>

                    <div className=" w-2/3 flex justify-between m-2 mb-1 opacity-60">
                      <p>Google Mountain View</p>
                      <p>CA Jul </p>
                      <p>2020 - Present</p>
                    </div>
                    <div className="mt-2 text-base pb-5  ">
                      Developed and maintained web applications using React,
                      Node.js, and Python. Worked with a team of engineers to
                      deliver high-quality software on time and within budget.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog */}
          <div
            className={`p-4  bg-white rounded-lg md:p-8  dark:bg-gray-800 grid-rows ${
              profileTab === "Blog" ? "" : "hidden"
            }`}
            id="Blog"
            role="tabpanel"
            aria-labelledby="Blog-tab"
          >
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">English</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Arabic</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Sweden</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Spain</span>
              </li>
            </ul>
          </div>
          {/* Projects */}
          <div
            className={`p-4 bg-white rounded-lg dark:bg-gray-800  ${
              profileTab === "Projects" ? "" : "hidden"
            }`}
            id="Projects"
            role="tabpanel"
            aria-labelledby="Projects-tab"
          >
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span>ReadmeGen</span>
                  <svg
                    data-accordion-icon=""
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className=" hidden"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. A nam mollitia error magnam
                    delectus ex alias placeat saepe atque, dolore necessitatibus
                    fugit libero quasi tempora, accusantium deleniti voluptatem
                    animi debitis.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Project link
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>PanDiv</span>
                  <svg
                    data-accordion-icon=""
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Project link
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span>Cv</span>
                  <svg
                    data-accordion-icon=""
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more Blog these technologies:
                  </p>
                  <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Project link
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
