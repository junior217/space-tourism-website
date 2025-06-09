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
         <main className="flex flex-col">
            <div>
                <NavBar />
            </div>
            <div className="ml-60 py-4">
                <h1 className="text-2xl text-left text-slate-100 mt-10 uppercase"> <span className="text-slate-600">02 </span> Meet Your Crew</h1>
            </div>
            <div>
                <CurrentCrewMember />
            </div>
            <div className="flex gap-3.5 justify-left items-center mb-15 mt-0 ml-[20%]">
                <button onClick={() => setCurrentCrewMember(() => Douglas)} className="rounded-full w-[20px] h-[20px] bg-slate-600 focus:bg-slate-100"></button>
                <button onClick={() => setCurrentCrewMember(() => Mark)} className="rounded-full w-[20px] h-[20px] bg-slate-600 focus:bg-slate-100"></button>
                <button onClick={() => setCurrentCrewMember(() => Victor)} className="rounded-full w-[20px] h-[20px] bg-slate-600 focus:bg-slate-100"></button>
                <button onClick={() => setCurrentCrewMember(() => Anousheh)} className="rounded-full w-[20px] h-[20px] bg-slate-600 focus:bg-slate-100"></button>
            </div>
            
         </main>
        </div>
    )
}