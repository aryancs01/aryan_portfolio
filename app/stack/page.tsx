import Express from "../(components)/(icons)/Express";
import Javascript from "../(components)/(icons)/Javascript";
import NextIcon from "../(components)/(icons)/NextjsIcon";
import NodejsIcon from "../(components)/(icons)/NodejsIcon";
import PrismaIcon from "../(components)/(icons)/PrismaIcon";
import ReactIcon from "../(components)/(icons)/ReactIcon";
import TailwindIcon from "../(components)/(icons)/TailwindIcon";
import TypescriptIcon from "../(components)/(icons)/TypescriptIcon";
import VsIcon from "../(components)/(icons)/VSIcon";

export default function Contact() {
    return <div className="w-full mt-10 font-mono mb-10">
        <div>
            <h3 className="text-2xl">Stack</h3>
        </div>
        <div className="mt-16 md:p-0 p-2">
            <h4 className="text-4xl">What I <span className="text-slate-400">use</span></h4>
        </div>
        <div className="flex justify-around mt-3 md:pl-0 pl-2">
            <div className="flex flex-col gap-3">
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <NextIcon size="xsm"/>
                    <h4>Next.js</h4>
                </div>
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <TypescriptIcon size="xsm"/>
                    <h4>Typescript</h4>
                </div>
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <Javascript size="xsm"/>
                    <h4>Javascript</h4>
                </div>
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <PrismaIcon size="xsm"/>
                    <h4>Prisma</h4>
                </div>
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <ReactIcon size="xsm"/>
                    <h4>React.js</h4>
                </div>
            </div>
            <div className="flex flex-col  gap-3">
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <Express size="xsm"/>
                    <h4>Express.js</h4>
                </div>
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <NodejsIcon size="xsm"/>
                    <h4>Nodejs</h4>
                </div>
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <TailwindIcon size="xsm"/>
                    <h4>TailwindCSS</h4>
                </div>
                <div className="flex md:text-2xl text-md gap-2 items-center">
                    <VsIcon size="xsm"/>
                    <h4>VS Code</h4>
                </div>
            </div>
        </div>
    </div>
}