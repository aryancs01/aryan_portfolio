"use client"
import { Chakra_Petch, Playwrite_IN,Playwrite_DE_Grund } from "next/font/google";
import Arrow from "./(icons)/Arrow";
import TrippleLines from "./(icons)/TrippleLines";
import Plane from "./(icons)/Plane";
import Music from "./(icons)/Music";
import Button from "./(ui)/Button";
const chakra = Chakra_Petch({
    subsets: ["latin"],
    weight: "400",
    style: "italic"
})
const playwrite = Playwrite_IN({
    weight: "400"
})
const playwrite_ar = Playwrite_DE_Grund({
    weight: "400",
})
export default function MyPage() {
    return <div id="home" className="mt-10">
        <div className="flex gap-3 items-center md:justify-start justify-center">
            <img src="./star.webp" alt="" className="w-5 h-5" />
            <h4 className={`text-3xl ${chakra.className}`}>
                Aryan Saxena
            </h4>
        </div>
        <div className={`flex gap-5 items-center mt-5 text-lg text-gray-400 ${playwrite.className}`}>
            <h5>Discuss</h5>
            <Arrow />
            <h5>Build</h5>
            <Arrow />
            <div className="text-[#A6B4FC] h-10 relative flex">
                <h4>Ship</h4>
                <div className="absolute left-12 bottom-5">
                    <TrippleLines />
                </div>
            </div>
        </div>
        <div className="mt-8">
            <div className={`,md:text-4xl text-2xl tracking-wide  ${playwrite_ar.className}`}>
                <div className="flex items-center relative mb-6 font-extrabold">Hello there! I'm 
                    <div className="bg-[#7C00FE] font-extrabold px-3 py-2 -rotate-2 ml-3">Aryan Saxena</div>
                    <div className="absolute -top-7 right-80 md:block hidden">
                        <Music/>
                    </div>
                </div>
                <h4 className="font-bold md:mt-0 mt-12">I build scalable and efficient web applications</h4>
            </div>

            <div className={`mt-4 ml-2 text-lg flex justify-between tracking-wide ${playwrite_ar.className}`}>
                I build scalable web applications with Next.js, backend systems, and databases.,,, <br/> 
                Passionate about crafting secure and efficient solutions that make an impact.
                <div className="mr-10">
                    <Plane/>
                </div>
            </div>
        </div>
        <div className="mt-7 flex gap-3 items-center md:mb-0 mb-24">
            <Arrow/>
            <Button text="Let's Talk"
                    size="lg"
                    onclick={()=>{
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
            />
        </div>
    </div>
}