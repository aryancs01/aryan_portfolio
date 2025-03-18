import AboutMe from "./(components)/AboutMe";
import Contact from "./(components)/Contact";
import Control from "./(components)/Control";
import MyPage from "./(components)/MyPage";
import Projects from "./(components)/Projects";
import Skills from "./(components)/Skills";
const project1skills: string[] = ["Next.js", "Typescript", "Prisma", "WebSocket", "Postgres", "Express.js"]
const project2skills: string[] = ["Next.js", "Typescript", "Prisma", "Postgres", "Express.js"]

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <MyPage />
      <Projects
        header="Personal Project"
        title="Drawnect"
        description="Real-time collaborative drawing application where users can create and connect shapes via WebSocket"
        skills={project1skills}
        imgSRC="./drawnectProject.png"
        github="http://github.com/aryancs01/drawnect"

      />
      <Projects
        header="Personal Project"
        title="Paytm"
        description="Digital payment system ensuring secure atomic transactions between banks and users, including P2P transfers."
        skills={project2skills}
        imgSRC="./paytmProject.png"
        github="http://github.com/aryancs01/PaytmFullStack"

      />
      <AboutMe />
      <Skills />
      <Contact />
      <div id="marquee-container">
        <span id="marquee-text">Open to opportunities! Let&apos;s build something amazing together</span>
      </div>
      <div className="mt-28">
        <Control/>
      </div>

    </div>
  );
}
