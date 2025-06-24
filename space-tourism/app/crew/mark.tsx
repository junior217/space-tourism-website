import { spaceTourismData } from "../data"
import Image from "next/image"

export default function Mark() {
    const crewMark = spaceTourismData[0].crew[1]

    return (
           <main className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-0.5 lg:mx-30 lg:mb-10 lg:mt-5 md:grid md:grid-rows-[1fr_auto] md:gap-10">
                <div className="lg:flex lg:flex-col lg:gap-2 lg:w-120 lg:justify-center lg:ml-30 md:flex md:flex-col md:gap-3 md:justify-center md:items-center md:text-center md:w-2/3 md:mx-auto">
                    <h1 className="text-[32px] text-slate-600">{crewMark.role}</h1>
                    <h2 className="text-[56px] text-slate-100">{crewMark.name}</h2>
                    <p className="text-[18px] text-slate-100 font-extralight">{crewMark.bio}</p>
                </div>
                <div className="relative lg:flex lg:justify-center lg:items-center lg:overflow-hidden lg:mr-20 md:flex md:justify-center md:items-center md:mt-20 md:mb-5 md:pt-10 ">
                    <Image src={crewMark.images.webp} alt={crewMark.name} width={350} height={350}  />
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0d0d1c] pointer-events-none" />
                </div>
           </main>

    )
}