import { spaceTourismData } from "../data"
import Image from "next/image";

export default function Titan() {
    const titanData = spaceTourismData[0].destinations[3];
    
    return (
        <div className="mx-10 p-8 grid grid-cols-[1fr_1fr] gap-3 items-center justify-center">
            <div className="ml-15 flex justify-center  rounded-full overflow-hidden">
                <Image
                    src={titanData.images.webp}
                    alt={titanData.name}
                    width={350}
                    height={50}
                    className="w-auto h-auto"
                />
            </div>
            <div className="py-3 px-1 mr-6 w-100 flex flex-col gap-4">
                <div>
                    <h1 className="text-6xl text-slate-50 uppercase ">{titanData.name}</h1>
                </div>
                <div className="border-b-2 border-slate-100 pb-8">
                    <p className="text-slate-300 text-lg">{titanData.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="flex flex-col gap-0.5 text-slate-400 text-lg">
                        <span className="text-slate-400">Avg. distance: </span>
                        <span className="text-slate-50">{titanData.distance}</span>
                    </p>
                    <p className="flex flex-col gap-0.5 text-slate-400 text-lg">
                        <span className="text-slate-400">Avg. distance: </span>
                        <span className="text-slate-50">{titanData.distance}</span>
                    </p>
                </div>

            </div>
            
            
        </div>
    )
}