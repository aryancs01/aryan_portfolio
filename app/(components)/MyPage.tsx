import Image from "next/image";
import ButtonShadow from "./(ui)/ButtonShadow";
import ParagraphShadow from "./(ui)/ParagraphShadow";
import Link from "next/link";
import PrismaIcon from "./(icons)/PrismaIcon";
import NodejsIcon from "./(icons)/NodejsIcon";
import Postgresssql from "./(icons)/PostgresSQLIcon";
import Express from "./(icons)/Express";
import TypescriptIcon from "./(icons)/TypescriptIcon";
import Javascript from "./(icons)/Javascript";
import NextIcon from "./(icons)/NextjsIcon";

export default function MyPage() {
    return <div className="w-full mt-10 font-mono mb-11">
        <div className="flex md:flex-row flex-col gap-7 items-center">
            <div className="w-28 h-28">
                <Image
                    className="w-full h-full object-cover rounded-full"
                    src={"/me.jpg"}
                    width={112}
                    height={112}
                    quality={100}
                    alt="My Image"
                />
            </div>
            <div className="flex flex-col ">
                <h4 className="text-2xl font-semibold md:text-left text-center">Aryan Saxena</h4>
                <h4 className="text-xl text-slate-200 animate-slideLeft">FullStack Developer</h4>
            </div>
        </div>
        <div className="mt-6 md:p-0 p-2">
            <div className="flex gap-2 md:text-2xl md:flex-row flex-col text-xl  tracking-tighter">
                <h4 className="text-gray-400  ">I build</h4>
                <h4 className="animate-slideDown md:underline underline-offset-4 decoration-wavy decoration-red-300">Full-Stack Web Applications</h4>
            </div>
            <div className="mt-2">
                <h4 className="md:text-xl text-lg opacity-95 text-transparent bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text">Hey, I&apos;m Aryan Saxena, a full-stack web developer from Jaipur, India. I&apos;m currently pursuing my Bachelor of Technology in Computer Science.</h4>
            </div>
            <div className="mt-2 hidden md:block">
                <h4 className="md:text-xl text-lg opacity-95 text-transparent bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text">I enjoy learning new things and have made it a habit to explore something new every month. On this website, you&apos;ll find articles on my projects and notes on the things I&apos;ve learned and insights into my experience with technologies like <span className="underline underline-offset-4 decoration-wavy decoration-red-500 font-bold text-white">Next.js</span> . I love building fast and scalable web applications, and  Next.js has been a key part of my development stack. Besides coding, I enjoy listening to hip-hop.</h4>
            </div>
        </div>
        <div className="mt-4 flex gap-3 items-center md:p-0 p-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="text-slate-400">Available for Work</div>
        </div>
        <div className="mt-4 w-1/2 md:p-0 p-2">
            <ButtonShadow redirectTo="/contact">{"Contact Me"}</ButtonShadow>
        </div>
        <div className="mt-14 w-full flex flex-col gap-5">
            <div className="w-full flex justify-between px-4 md:text-2xl text-xl">
                <h4>Projects</h4>
                <Link href={"/projects"}>All &rarr;</Link>
            </div>
            <ParagraphShadow redirectTo="/projects">
                <div className="md:pl-5">
                    <h4 className="md:text-2xl text-md tracking-tighter">Drawnnect: Draw, Shape, and Connect!</h4>
                    <h4 className="pl-2 text-gray-400 text-md tracking-tighter">Nextjs, Typescript, WebSocket, Expressjs, Postgresssql</h4>
                </div>
            </ParagraphShadow>
            <ParagraphShadow redirectTo="/projects">
                <div className=" md:pl-5">
                    <h4 className="md:text-2xl text-md tracking-tighter">Paynect: Your Wallet, Your Way!</h4>
                    <h4 className="pl-2 text-gray-400 text-md tracking-tighter">Nextjs, NextAuth ,Typescript, Expressjs, Postgresssql</h4>
                </div>
            </ParagraphShadow>
        </div>
        <div className="mt-14">
            <div className="w-full flex justify-between px-4 md:text-2xl text-xl">
                <h4>Stack</h4>
                <Link href={"/stack"}>All &rarr;</Link>
            </div>
            <div className="flex flex-wrap gap-5 pt-4 items-center justify-center sm:justify-start">
                <div className="relative group">
                    <NextIcon size="lg" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Next.js
                    </span>
                </div>
                <div className="relative group">
                    <Javascript size="lg" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        JavaScript
                    </span>
                </div>
                <div className="relative group">
                    <TypescriptIcon size="lg" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        TypeScript
                    </span>
                </div>
                <div className="relative group">
                    <Express size="lg" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Express.js
                    </span>
                </div>
                <div className="relative group">
                    <Postgresssql size="lg" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        PostgreSQL
                    </span>
                </div>
                <div className="relative group">
                    <NodejsIcon size="lg" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Node.js
                    </span>
                </div>
                <div className="relative group">
                    <PrismaIcon size="lg" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Prisma
                    </span>
                </div>
                <div className="flex font-bold text-2xl">...</div>
            </div>
        </div>
    </div>
}