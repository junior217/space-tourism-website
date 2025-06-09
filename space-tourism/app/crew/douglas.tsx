import { spaceTourismData } from "../data"
import Image from "next/image"

export default function Douglas() {
    const crewDouglas = spaceTourismData[0].crew[0]

    return (
        <div className="bg-inherit">
           <h1>{crewDouglas.name}</h1>
        </div>
    )
}