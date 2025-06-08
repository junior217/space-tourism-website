// import Router from "next/router";


export default function Home() {
  return (
    <main className="bg-[url('/destination/background-destination-mobile.jpg') bg-cover bg-no-repeat h-screen my-40 px-20 grid grid-cols-[1fr_auto] gap-10">
    <div className="w-150 flex flex-col gap-5">
      <h2 className="text-3xl text-slate-50">So, you want to travel to</h2>
      <h1 className=" text-6xl text-slate-50 uppercase">Space...</h1>
      <p className=" text-xl text-slate-50 ">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div className="w-80 h-80 bg-slate-50 rounded-full flex justify-center items-center ">
      <h1 className="text-4xl uppercase">Explore</h1>
    </div>
    
    </main>
  );
}
