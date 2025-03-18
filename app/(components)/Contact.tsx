import { Chakra_Petch, Playwrite_IN, Playwrite_DE_Grund } from "next/font/google";
import Arrow from "./(icons)/Arrow";
import Link from "next/link";
const playwrite_ar = Playwrite_DE_Grund({
    weight: "400",
})

export default function Contact() {
    return <div id="contact" className="mt-14 bg-[#323232] md:p-6 p-2 rounded-xl">
        <div className={`${playwrite_ar.className} md:text-3xl text-xl`}>
            <h4 className="font-bold">Got an idea?</h4>
        </div>
        <div>
            <h5 className="text-gray-400 md:text-lg text-md mt-2">Contact Me</h5>
        </div>
        <div className="flex flex-col gap-4 mt-4">
        <div className="w-full flex flex-col justify-center items-center gap-6 md:pb-0 pb-2">
                <div className="flex gap-5 items-center md:w-lg w-[300px]">
                    <Arrow />
                    <a className="w-full" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=aryansaxenacs@gmail.com" target="_blank">
                        <button className="w-full text-xl relative px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
    hover:shadow-[5px_5px_rgba(255,255,255,0.4),_10px_10px_rgba(255,255,255,0.3),_15px_15px_rgba(255,255,255,0.2)]
    transition-all duration-300 ease-in-out shadow-[2px_2px_rgba(255,255,255,0.6),_4px_4px_rgba(255,255,255,0.4),_6px_6px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                            Email
                        </button>
                    </a>
                </div>
                <div className="flex gap-5 items-center md:w-lg w-[300px]">
                    <Arrow />
                    <Link className="w-full" href="https://www.github.com/aryancs01" target="_blank">
                        <button className="w-full text-xl relative px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
    hover:shadow-[5px_5px_rgba(255,255,255,0.4),_10px_10px_rgba(255,255,255,0.3),_15px_15px_rgba(255,255,255,0.2)]
    transition-all duration-300 ease-in-out shadow-[2px_2px_rgba(255,255,255,0.6),_4px_4px_rgba(255,255,255,0.4),_6px_6px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                            Github
                        </button>
                    </Link>
                </div>
                <div className="flex gap-5 items-center md:w-lg w-[300px]">
                    <Arrow />
                    <Link className="w-full" href="https://www.linkedin.com/in/aryan-saxena12/" target="_blank">
                        <button className="w-full text-xl relative px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
    hover:shadow-[5px_5px_rgba(255,255,255,0.4),_10px_10px_rgba(255,255,255,0.3),_15px_15px_rgba(255,255,255,0.2)]
    transition-all duration-300 ease-in-out shadow-[2px_2px_rgba(255,255,255,0.6),_4px_4px_rgba(255,255,255,0.4),_6px_6px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                            Linkedin
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
}