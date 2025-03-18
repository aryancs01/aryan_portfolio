export default function Skills() {
  return (
    <div id="stack" className="mt-8 sm:mt-14 flex flex-col gap-3 sm:gap-4">
      <div className="flex justify-center">
        <Skill text="Next.js" />
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        <Skill text="Express.js" />
        <Skill text="Typescript" />
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        <Skill text="Tailwind" />
        <Skill text="Prisma" />
        <Skill text="Postgres" />
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        <Skill text="Mongo" />
        <Skill text="React.js" />
        <Skill text="Node.js" />
        <Skill text="Git" />
      </div>
    </div>
  )
}

function Skill({ text }: { text: string }) {
  return (
    <div className="px-3 py-1 sm:px-4 sm:py-2 bg-[#7C00FE] hover:bg-[#7b00fee1] hover:shadow-[3px_3px_0px_0px_rgba(218,223,225)] sm:hover:shadow-[6px_6px_0px_0px_rgba(218,223,225)] active:bg-[#7b00fee1] active:shadow-[3px_3px_0px_0px_rgba(218,223,225)] text-white rounded-xl text-base sm:text-xl">
      {text}
    </div>
  )
}

