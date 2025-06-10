// import Router from "next/router";
import NavBar from "./NavBar";

export default function Home() {
  return (
  <div className="wrapper">
    <div className="xl:py-4 md:py-4">
    <NavBar />
    </div>
    <main
    className="xl:mt-20  xl:py-4 xl:px-20 xl:grid xl:grid-cols-[1fr_auto] xl:gap-10 md:flex md:flex-col md:items-center md:justify-center md:px-25  md:mt-20 md:gap-5">
    <div className="xl:w-150 xl:flex xl:flex-col xl:gap-5 md:flex md:flex-col md:text-center md:gap-5">
      <h2 className="xl:text-3xl xl:text-slate-50 xl:text-left md:text-center md:text-5xl md:text-slate-50">So, you want to travel to</h2>
      <h1 className=" xl:text-6xl xl:text-slate-50 xl:text-left uppercase md:text-center md:text-8xl md:text-slate-50">Space...</h1>
      <p className=" xl:text-xl text-slate-50 xl:text-left md:text-center md:text-2xl md:text-slate-50">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div className="xl:w-80 xl:h-80 xl:bg-slate-50 rounded-full xl:flex xl:justify-center xl:items-center md:w-80 md:h-80 md:bg-slate-50 md:flex md:justify-center md:items-center md:mt-10">
      <h1 className="xl:text-4xl uppercase md:text-3xl">Explore</h1>
    </div>
    </main>
   </div>
  );
}
