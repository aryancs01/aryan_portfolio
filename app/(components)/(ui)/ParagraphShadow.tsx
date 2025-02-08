import Link from "next/link";

export default function ParagraphShadow({ children,redirectTo }: { children: React.ReactNode; redirectTo:string }) {
    return <Link
        href={`${redirectTo}`}
        className="w-full text-lg text-left font-bold inline-block px-3 py-2 text-white rounded-lg 
shadow-none hover:shadow-[5px_5px_rgba(255,255,255,0.4),_10px_10px_rgba(255,255,255,0.3),_15px_15px_rgba(255,255,255,0.2),_20px_20px_rgba(255,255,255,0.1),_25px_25px_rgba(255,255,255,0.05)] 
hover:translate-y-[-5px] transition-all ease-in-out duration-300 "
    >
        {children}
    </Link>
}