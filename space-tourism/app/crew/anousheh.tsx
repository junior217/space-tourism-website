import { spaceTourismData } from "../data"
import Image from "next/image"

export default function Anousheh() {
    const crewAnoush = spaceTourismData[0].crew[3]

    return (
           <main className="grid grid-cols-[1fr_auto] gap-0.5 mx-30 mb-10 mt-5">
                <div className="flex flex-col gap-2 w-120 justify-center ml-30">
                    <h1 className="text-[32px] text-slate-100">{crewAnoush.role}</h1>
                    <h2 className="text-[56px] text-slate-100">{crewAnoush.name}</h2>
                    <p className="text-[18px] text-slate-100 font-extralight">{crewAnoush.bio}</p>
                </div>
                <div className="flex justify-center items-center overflow-hidden mr-20">
                    <Image src={crewAnoush.images.webp} alt={crewAnoush.name} width={350} height={350} />

                </div>
           </main>

    )
}