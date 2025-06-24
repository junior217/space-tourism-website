'use client'

import NavBar from "../NavBar"
import Douglas from "./douglas"
import Mark from "./mark"
import Victor from "./victor"
import Anousheh from "./anousheh"
import { useState } from "react"


const crewComponents = {
    Douglas: <Douglas />,
    Mark: <Mark />,
    Victor: <Victor />,
    Anousheh: <Anousheh />
};

export default function CrewPage(){

    const [CurrentCrewMember, setCurrentCrewMember] = useState(() => Douglas);
    return (
        <div className="wrapper-crew font-inherit">
         <main className="lg:flex lg:flex-col md:relative">
            <div>
                <NavBar />
            </div>
            <div className="lg:ml-60 py-4 md:ml-25">
                <h1 className="lg:text-2xl lg:text-left text-slate-100 lg:mt-10 uppercase md:text-xl"> <span className="text-slate-600">02 </span> Meet Your Crew</h1>
            </div>
            <div className="md:my-10">
                <CurrentCrewMember />
            </div>
            <div className="lg:flex lg:gap-3.5 lg:justify-left lg:items-center lg:mb-15 lg:-mt-10 lg:ml-[18%] md:flex md:gap-2 md:absolute md:top-[46%] md:left-[49%]">
                <button onClick={() => setCurrentCrewMember(() => Douglas)} className="rounded-full lg:w-[20px] lg:h-[20px] bg-slate-600 focus:bg-slate-100 md:w-[10px] md:h-[10px]"></button>
                <button onClick={() => setCurrentCrewMember(() => Mark)} className="rounded-full lg:w-[20px] lg:h-[20px] bg-slate-600 focus:bg-slate-100 md:w-[10px] md:h-[10px]"></button>
                <button onClick={() => setCurrentCrewMember(() => Victor)} className="rounded-full lg:w-[20px] lg:h-[20px] bg-slate-600 focus:bg-slate-100 md:w-[10px] md:h-[10px]"></button>
                <button onClick={() => setCurrentCrewMember(() => Anousheh)} className="rounded-full lg:w-[20px] lg:h-[20px] bg-slate-600 focus:bg-slate-100 md:w-[10px] md:h-[10px]"></button>
            </div>
            
         </main>
        </div>
    )
}