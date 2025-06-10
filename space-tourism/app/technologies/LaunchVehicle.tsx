import { spaceTourismData } from "../data"
import Image from "next/image"

export default function LaunchVehicle(){
    const LaunchVehicle = spaceTourismData[0].technology[0]
    
    return (
        <div className=" ml-[20%] mr-0 my-5 grid grid-cols-[1fr_auto]">
            <div className="px-2 w-130 flex flex-col justify-center gap-2">
                <h1 className="uppercase text-2xl text-slate-400 my-2">The Terminology...</h1>
                <h1 className="uppercase text-3xl text-slate-200 font-light mb-3">{LaunchVehicle.name}</h1>
                <p className="text-slate-300 text-lg">{LaunchVehicle.description}</p>
            </div>
            <div className="py-4 pl-4 flex justify-end items-center ">
                <Image 
                    src={LaunchVehicle.images.portrait}
                    alt="Launch Vehicle"
                    width={500}
                    height={500}
                    className="Object-cover w-[900px] h-[500px]"
                />
            </div>
        </div>
    )
}