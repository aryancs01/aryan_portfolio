"use client"
export default function Control(){
    const scrollToHome = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToStack = () => {
        document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };
    return <div className="fixed bottom-5 left-1/2  transform -translate-x-1/2 rounded-xl md:text-xl text-md p-4 rounded-t-lg shadow-lg flex md:gap-7 gap-4 bg-[#282626]">
            <button onClick={scrollToHome} className="hover:text-[#83c1f0f7]">
                Home
            </button>
            <button onClick={scrollToProjects} className="hover:text-[#83c1f0f7]">
                Projects
            </button>
            <button onClick={scrollToAbout} className="hover:text-[#83c1f0f7]">
                About
            </button>
            <button onClick={scrollToStack} className="hover:text-[#83c1f0f7]">
                Stack
            </button>
            <button onClick={scrollToContact} className="hover:text-[#83c1f0f7]">
                Contact
            </button>
        </div>
}