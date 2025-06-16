import { spaceTourismData } from "../data"
import Image from "next/image";

export default function Titan() {
    const titanData = spaceTourismData[0].destinations[3];
    
 return (
        <div className="lg:mx-10 lg:p-8 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-3 lg:items-center lg:justify-center md:flex md:flex-col md:gap-5 md:items-center md:justify-center md:py-5">
            <div className="lg:ml-15 lg:flex lg:justify-center  rounded-full overflow-hidden md:flex md:justify-center md:w-100 md:h-100 md:mr-0">
                <Image
                    src={titanData.images.webp}
                    alt={titanData.name}
                    width={350}
                    height={50}
                    className="w-auto h-auto"
                />
            </div>
            <div className="lg:py-3 lg:px-1 lg:mr-6 lg:w-[80%] lg:flex lg:flex-col lg:items-stretch lg:gap-4 md:justify-center md:items-center md:px-2 md:mt-25 md:ml-15 md:w-2/3">
                <div>
                    <h1 className="lg:text-6xl text-slate-50 uppercase md:text-8xl ">{titanData.name}</h1>
                </div>
                <div className="border-b-2 border-slate-100 lg:pb-8 md:pb-9">
                    <p className="text-slate-300 lg:text-lg lg:text-start md:text-xl md:text-center">{titanData.description}</p>
                </div>
                <div className="lg:flex lg:justify-center lg:gap-[50%] lg:items-center mt-4 md:flex md:items-center md:gap-10">
                    <p className="lg:flex lg:flex-col gap-0.5 text-slate-400 text-lg md:text-2xl">
                        <span className="text-slate-400">Avg. distance: </span>
                        <span className="text-slate-50">{titanData.distance}</span>
                    </p>
                    <p className="lg:flex lg:flex-col gap-0.5 text-slate-400 text-lg md:text-2xl">
                        <span className="text-slate-400">Avg. distance: </span>
                        <span className="text-slate-50">{titanData.distance}</span>
                    </p>
                </div>

            </div>
            
            
        </div>
    )
}