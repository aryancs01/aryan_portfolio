interface ButtonProps {
    text:string;
    size:"md"|"lg";
    onclick?:()=>void
}

const sizeDiff = {
    "lg":"px-8 py-2",
    "md":"px-4 py-1"
}
export default function Button({text,size,onclick}:ButtonProps){
    return (
        <button onClick={onclick} className={`hover:-rotate-2 outline-none border-none ${(size==="lg")?"hover:shadow-[6px_6px_0px_0px_rgba(218,223,225)]":"hover:shadow-[4px_4px_0px_0px_rgba(218,223,225)]"} hover:bg-[#7b00fee1] bg-[#7C00FE] ${sizeDiff[size]} rounded-md text-xl transition-all ease-in-out font-sans`}>{text}</button>
    )
}