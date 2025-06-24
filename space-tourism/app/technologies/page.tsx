'use client'

import NavBar from "../NavBar"
import LaunchVehicle from "./LaunchVehicle"
import SpaceCapsule from "./SpaceCapsule"
import SpacePort from "./SpacePort"
import { useState } from "react"


const spaceTechComponents = {
    LaunchVehicle: <LaunchVehicle />,
    SpaceCapsule: <SpaceCapsule />,
    SpacePort: <SpacePort />
    
}


export default function TechnologiesPage(){
    const [CurrentTechnology, setCurrentTechnology] = useState(() => LaunchVehicle);

    return (
        <div className="wrapper-tech">
         <main className="flex flex-col gap-1">
            <div>
                <NavBar />
            </div>
            <div>
                <h1 className="ml-[9%] mt-10 p-4 text-3xl text-slate-100 uppercase"><span className="text-slate-600">03</span> Space Launch 101</h1>
            </div>
            <div className=" relatvie flex flex-row items-center justify-center">
                <div className=" absolute flex flex-col justify-center gap-3 -bottom-5 left-30 ">
                    <button onClick={() => setCurrentTechnology(() => LaunchVehicle)} className=" rounded-full w-15 h-15 border-2 border-slate-200 bg-transparent text-2xl text-slate-200 focus:bg-slate-100 focus:text-slate-900 ">1</button>
                    <button onClick={() => setCurrentTechnology(() => SpaceCapsule)} className=" rounded-full w- h-15 border-2 border-slate-200 bg-transparent text-2xl text-slate-200 focus:bg-slate-100 focus:text-slate-900">2</button>
                    <button onClick={() => setCurrentTechnology(() => SpacePort)} className=" rounded-full w15-15 h-15 border-2 border-slate-200 bg-transparent text-2xl text-slate-200 focus:bg-slate-100 focus:text-slate-900">3</button>
                </div>
                <div>
                    <CurrentTechnology />
                </div>
            </div>
            
         </main>
        </div>
    )
}