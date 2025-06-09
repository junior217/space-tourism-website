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
                <Douglas />
            </div>
            <div className="flex justify-center items-end mb-10 mt-5">
                <button onClick={() => setCurrentCrewMember(() => Douglas)}>1</button>
                <button onClick={() => setCurrentCrewMember(() => Mark)}>2</button>
                <button onClick={() => setCurrentCrewMember(() => Victor)}>3</button>
                <button onClick={() => setCurrentCrewMember(() => Anousheh)}>4</button>
            </div>
            
         </main>
        </div>
    )
}