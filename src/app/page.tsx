import Image from "next/image";
// import Page from "./Profile/page";

export default function Home() {
  return (
    <>
      <h1 className="mb-5">CV Gen</h1>
      {/* <Page /> */}
      <a href="/builder" className="bg-blue-500 hover:bg-blue-700 font-bold p-2 px-4 rounded m-5">Builder Page</a>
      <a href="/profile" className="bg-blue-500 hover:bg-blue-700 font-bold p-2 px-4 rounded m-5">Profile Page</a>
    </>

  );
}
