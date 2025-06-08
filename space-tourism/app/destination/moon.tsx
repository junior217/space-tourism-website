import { spaceTourismData } from "../data"
import Image from "next/image";

export default function Moon() {
    const moonData = spaceTourismData[0].destinations[0];
    
    return (
        <div className="mx-10 p-8 grid grid-cols-[1fr_1fr] gap-3 items-center justify-center">
            <div className="ml-25 flex justify-center  rounded-full overflow-hidden">
                <Image
                    src={moonData.images.webp}
                    alt={moonData.name}
                    width={250}
                    height={250}
                    className="w-auto h-auto"
                />
            </div>
            <div className="py-3 px-1 mr-6 w-100 flex flex-col gap-4">
                <div>
                    <h1 className="text-6xl text-slate-50 uppercase ">{moonData.name}</h1>
                </div>
                <div>
                    <p className="text-slate-300 text-lg">{moonData.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="flex flex-row gap-0.5 text-slate-400 text-lg">
                        <span className="text-slate-400">Avg. distance: </span>
                        <span className="text-slate-50">{moonData.distance}</span>
                    </p>
                    <p className="text-slate-400 text-lg">
                        <span className="text-slate-400">Avg. distance: </span>
                        <span className="text-slate-50">{moonData.distance}</span>
                    </p>
                </div>

            </div>
            
            
        </div>
    )
}