import { Chakra_Petch, Playwrite_IN, Playwrite_DE_Grund } from "next/font/google";
import Image from "next/image";
import profile from "@/public/profile.jpg"
const chakra = Chakra_Petch({
    subsets: ["latin"],
    weight: "400",
    style: "italic"
})
const playwrite_ar = Playwrite_DE_Grund({
    weight: "400",
})

export default function AboutMe() {
    return <div id="about" className="mt-14 bg-[#323232] p-6 flex md:flex-row flex-col-reverse rounded-xl">
        <div>
            <div className={`${playwrite_ar.className}`}>
                <h4 className="text-3xl font-bold mb-3 md:mt-0 mt-3">About Me</h4>
            </div>
            <div className={`${chakra.className} mt-5 text-xl md:tracking-wide tracking-tight md:w-[600px] w-80`}>
                <p>Full-stack developer with expertise in Next.js, Backend development, and Databases. Built Drawnect, a
                    real-time collaborative canvas app, and developed a digital payment system inspired by Paytm, featuring atomic
                    transactions, webhook services, and security mechanisms. Passionate about crafting scalable and efficient solutions
                    that make an impact.
                </p>
            </div>
            <div className="mt-5 text-gray-500 text-lg">
                <p>Currently, I&apos;m in Jaipur, Rajasthan</p>
            </div>
        </div>
        <div className="flex justify-center">
            {/* <img className="w-[800px] h-[300px] rounded-full object-fill" src="./profile.jpg" alt="" /> */}
            <Image
                src={profile}
                alt="aryan"
                className="rounded-lg text-center"
                width={300}
                height={150}
                quality={100}
            />
        </div>
    </div>
}