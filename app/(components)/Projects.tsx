import { Chakra_Petch, Playwrite_IN, Playwrite_DE_Grund } from "next/font/google";
import Button from "./(ui)/Button";
import Link from "next/link";
const chakra = Chakra_Petch({
    subsets: ["latin"],
    weight: "400",
    style: "italic"
})
const playwrite_ar = Playwrite_DE_Grund({
    weight: "400",
})


export default function Projects({header,title,description,skills,imgSRC,github}:{header:string; title:string; description:string; skills:string[]; imgSRC:string; github:string;}) {
    return (
        <div id="projects" className="group flex pointer-events-auto justify-between bg-[#323232] md:pt-10 p-2 md:pl-10  md:h-[400px] h-[380px] mt-10 rounded-xl">
            <div>
                <h5 className={`${chakra.className} text-gray-400`}>{header}</h5>
                <div className={`mt-3 mb-5 ${playwrite_ar.className} text-3xl `}>
                    <h3 className="font-extrabold">{title}</h3>
                </div>
                <p className="w-80  font-mono md:tracking-wide tracking-tighter text-lg ">{description}</p>
                <div className="flex gap-2 w-[300px] flex-wrap mt-4">
                    {skills.map((text, index) => (
                        <div key={index} className="bg-black px-2 py-1 rounded-lg">{text}</div>
                    ))}
                </div>
                <div className="mt-4">
                    <Link href={`${github}`} target="_blank">
                    <Button
                        text="Github"
                        size="md"
                    />
                    </Link>
                </div>

            </div>
            <div className="ml-10 md:block hidden">
                <img className="group-hover:-rotate-3 transition-transform duration-300 pointer-events-auto rounded-lg h-[350px]" src={`${imgSRC}`} alt="" />
            </div>

        </div>
    )
}