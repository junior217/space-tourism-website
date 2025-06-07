import { spaceTourismData } from "../data"

export default function Moon() {
    const moonData = spaceTourismData[0].destinations[0];
    
    return (
        <div>
            <h1 className="text-4xl text-slate-50">{moonData.name}</h1>
        </div>
    )
}