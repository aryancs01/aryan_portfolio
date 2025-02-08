import Link from "next/link";
import NextIcon from "./(icons)/NextjsIcon";

export default function Footer() {

    return <div className="flex flex-col gap-3">
        <div className="flex justify-around mt-8 border-t-4 border-gray-600 pt-2">
            <div className="pt-6">
                <p>© 2025 Aryan</p>
                <p className="flex gap-2">Built using <NextIcon size="xsm"/></p>
                <p>Jaipur, India</p>
            </div>
            <div className="flex flex-col">
                <div className="text-center">
                    Sitemap
                </div>
                <div className="flex justify-between gap-16">
                    <div>
                        <Link className="block" href={"/"}>Home</Link>
                        <Link className="block" href={"/projects"}>projects</Link>
                        <Link className="block" href={"/blogs"}>Blogs</Link>
                        <Link className="block" href={"/stack"}>Stack</Link>
                        <Link className="block" href={"/contact"}>Contact</Link>
                    </div>
                    <div>
                        <Link className="block" href={"https://www.linkedin.com/in/aryan-saxena12/"} target="_blank">LinkedIn</Link>
                        <Link className="block" href={"https://github.com/aryancs01"} target="_blank">Github</Link>
                    </div>
                </div>

            </div>

        </div>
        <div>
            <div className="relative overflow-hidden border-t-2 border-b-2 p-1 mb-10">
                <div className="whitespace-nowrap animate-marquee">
                    <span className="mr-10 text-white">
                        So, what do you think? Let&apos;s build something amazing together!
                    </span>
                </div>
            </div>
        </div>
    </div>
}