import ButtonShadow from "../(components)/(ui)/ButtonShadow";

export default function Contact() {
    return <div className="w-full mt-10 font-mono mb-10">
        <div>
            <h3 className="text-2xl">Contact</h3>
        </div>
        <div className="mt-10 md:p-0 p-2">
            <h4 className="md:text-3xl text-xl text-slate-400">Say <span className="text-white">Hey!</span></h4>
            <h4 className="mt-2 md:text-2xl text-lg">Looking to start a project and need that magical touch? Reach out.</h4>
            <div className="mt-4 flex gap-3 items-center">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="text-slate-400">Available for new opportunities</div>
            </div>
            <div className="w-full flex flex-col gap-5 mt-10 px-10">
                <ButtonShadow redirectTo="https://github.com/aryancs01">{"Github"}</ButtonShadow>
                <ButtonShadow redirectTo="https://www.linkedin.com/in/aryan-saxena12/">{"LinkedIn"}</ButtonShadow>
                <ButtonShadow redirectTo="https://x.com/aryan_dev__">{"Twitter"}</ButtonShadow>

            </div>
        </div>
    </div>
}