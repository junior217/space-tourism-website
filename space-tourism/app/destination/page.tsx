'use client';

import { spaceTourismData } from "../data"
import { useRouter } from "next/navigation"
import Link from "next/link";
import Moon from "./moon";

export default function Destination() {
    
   

    return (
        <>
          <div>
            <Moon />
          </div>
        </>
    )
}