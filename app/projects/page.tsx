import Image from "next/image";

export default function Contact() {
    return <div className="w-full mt-10 font-mono mb-10">
        <div className="md:mb-10 mb-7">
            <h3 className="text-2xl md:pl-0 pl-2">Projects</h3>
        </div>
        <div className="w-full md:h-[450px] h-[300px] md:p-0 p-4 md:hover:p-3 md:hover:opacity-90 transition-all ease-in-out">
            <div className="w-full flex justify-between md:text-lg text-sm md:tracking-normal tracking-tighter">
                <h4 className="font-semibold text-gray-400">FullStack Application</h4>
                <p className="text-gray-400">Feb 2025</p>
            </div>
            <div className="w-full">
                <Image
                    className="w-full h-full object-cover"
                    src={"/paytmProject.png"}
                    width={400}
                    height={400}
                    quality={100}
                    alt="My Image"
                />
            </div>
            <div className="flex justify-between mt-2">
                <h4 className="font-semibold md:text-xl text-lg">Paytm-FullStack</h4>
                <a href="https://github.com/aryancs01/PaytmFullStack" target="_blank" className="text-green-400">Github</a>
            </div>
        </div>
        <div className="w-full md:mt-10 mt-2 md:h-[450px] h-[300px] md:p-0 p-4 md:hover:p-3 md:hover:opacity-90 transition-all ease-in-out">
            <div className="w-full flex justify-between md:text-lg text-sm md:tracking-normal tracking-tighter">
                <h4 className="font-semibold text-gray-400">FullStack Application</h4>
                <p className="text-gray-400">Jan 2025</p>
            </div>
            <div className="w-full">
                <Image
                    className="w-full h-full object-cover"
                    src={"/drawnectProject.png"}
                    width={400}
                    height={400}
                    quality={100}
                    alt="My Image"
                />
            </div>
            <div className="flex justify-between mt-2">
                <h4 className="font-semibold text-xl">Drawnect</h4>
                <a href="https://github.com/aryancs01/drawnect" target="_blank" className="text-green-400">Github</a>
            </div>
        </div>
        <div className="md:text-3xl text-xl md:mt-12 ">
            <h3> <span className="text-gray-400">Project</span> list</h3>
        </div>
        <div className="md:p-0 p-3">
            <div className="border-2 mt-3 md:text-lg text-sm border-gray-200 p-5 flex flex-col gap-2 rounded-md ">
                <div className="flex justify-between hover:shadow-md hover:shadow-white p-2 transition-all ease-in-out">
                    <h4>My Portfolio</h4>
                    <h4 className="text-slate-400">2025</h4>
                </div>
                <div className="flex justify-between hover:shadow-md hover:shadow-white p-2 transition-all ease-in-out md:tracking-normal tracking-tighter">
                    <h4>Drawnnect: Draw, Shape, and Connect!</h4>
                    <h4 className="text-slate-400">2025</h4>
                </div>
                <div className="flex justify-between hover:shadow-md hover:shadow-white p-2 transition-all ease-in-out md:tracking-normal tracking-tighter">
                    <h4>Paynect: Your Wallet, Your Way!</h4>
                    <h4 className="text-slate-400">2025</h4>
                </div>
            </div>
        </div>


    </div>
}