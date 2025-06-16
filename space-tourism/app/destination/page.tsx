'use client';

import { useState } from "react";
import NavBar from "../NavBar";
import Mars from "./mars";
import Europa from "./europa";
import Titan from "./titan";
import Moon from "./moon";

const spaceComponents = {
    Moon: <Moon />,
    Mars: <Mars />,
    Europa: <Europa />,
    Titan: <Titan />
}

export default function Destination() {
   const [CurrentComponent, setCurrentDestination] = useState(() => Moon);
   
   

    return (
      <div className="wrapper-destination">
        <main className="relative lg:flex lg:flex-col lg:space-between ">
          <NavBar />
          <div className="absolute top-35 left-3 px-10">
            <h1 className="text-3xl text-slate-50 uppercase text-center mt-10 md:text-4xl"><span className="text-slate-500">01</span> Pick your destination</h1>
          </div>
          <div className="lg:mt-15 lg:pt-20 relative md:grid md:grid-rows-[auto_1fr] md:gap-5">
            <div className="absolute lg:top-[18%] lg:right-[22%] lg:flex lg:gap-5 md:top-[53%] md:gap-8 md:right-[27%]">
              <button onClick={() => setCurrentDestination(() => Moon)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold md:text-3xl">Moon</button>
              <button onClick={() => setCurrentDestination(() => Mars)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold md:text-3xl">Mars</button>
              <button onClick={() => setCurrentDestination(() => Europa)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold md:text-3xl">Europa</button>
              <button onClick={() => setCurrentDestination(() => Titan)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold md:text-3xl">Titan</button>
            </div>
            <div id="component-container">
              <CurrentComponent/>
            </div>
          </div>
        </main>
      </div>
    )
}