import NavBar from "../NavBar"
import Douglas from "./douglas"

export default function CrewPage(){
    return (
        <div className="wrapper-crew font-inherit">
         <main className="flex flex-col">
            <div>
                <NavBar />
            </div>
            <div className="ml-20 py-5">
                <h1 className="text-2xl text-left text-slate-100 mt-10 uppercase"> <span className="text-slate-600">02 </span> Meet Your Crew</h1>
            </div>
            <div>
                <Douglas />
            </div>
            
         </main>
        </div>
    )
}