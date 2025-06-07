// import Image from "next/image";
// import Link from "next/link";
// import Router from "next/router";

export default function Home() {
  return (
    <main className="p-10 flex flex-row items-center justify-center gap-10">
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-slate-50 font-serif">So, you want to travel to</h2>
      <h1 className="text-lg text-slate-50 font-serif">Space</h1>
      <p className="text-base text-slate-50 font-serif ">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div className="w-[100px] h-[100px] bg-slate-50 rounded-full flex justify-center items-center ">
      <h1>Explore</h1>
    </div>
    
    </main>
  );
}
