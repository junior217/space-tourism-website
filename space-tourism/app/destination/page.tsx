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
      
        <main 
        style={{
          backgroundImage: "url('/destination/background-destination-desktop.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
        className="relative flex flex-col space-between ">
          <NavBar />
          <div className="absolute top-20 left-3 px-10">
            <h1 className="text-2xl text-slate-50 uppercase text-center mt-10">01 Pick your destination</h1>
          </div>
          <div className="mt-15 pt-20 relative">
            <div className="absolute top-[18%] right-[32%] flex gap-5 mb-10">
              <button onClick={() => setCurrentDestination(() => Moon)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold">Moon</button>
              <button onClick={() => setCurrentDestination(() => Mars)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold">Mars</button>
              <button onClick={() => setCurrentDestination(() => Europa)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold">Europa</button>
              <button onClick={() => setCurrentDestination(() => Titan)} className="text-xl focus:border-b-2 focus:border-bg-slate-100 text-slate-100 text-semibold">Titan</button>
            </div>
            <div id="component-container">
              <CurrentComponent/>
            </div>
          </div>
        </main>
    )
}