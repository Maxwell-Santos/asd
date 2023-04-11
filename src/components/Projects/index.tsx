import { useEffect, useState } from "react"
import contentProjects from "./projects.json"

export function Projects() {

  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(screen.width)
    })
    setWidth(screen.width)
  }, [])


  return (
    <section id="projects">
      <h2 className="uppercase text-title-p font-black text-center">projetos</h2>
      {
        width >= 640 ? (
          <div className="grid grid-cols-1 grid-rows-auto md:grid-cols-2 md:grid-rows-2 gap-3 mt-10">
            {
              contentProjects.map(item => (
                <ProjectDesktopLayout
                  title={item.title}
                  img={item.img}
                  link={item.link}
                  info={item.info}
                />
              )
              )}
          </div>
        ) : (
          <div className="flex flex-col gap-10 mt-10">
            {
              contentProjects.map(item => (
                <ProjectMobileLayout
                  title={item.title}
                  img={item.img}
                  link={item.link}
                  info={item.info}
                />
              )
              )}
          </div>
        )
      }
    </section>
  )
}


type ProjectProps = {
  title: string,
  img: string,
  link: string,
  info: string
}
const ProjectDesktopLayout = ({ title, img, link, info }: ProjectProps) => {
  return (
    <a href={link}>
      <div className="group relative rounded-xl text-transparent overflow-hidden cursor-pointer md:h-[400px] max-[425px]:h-[200px]">
        <div className="w-full h-full absolute inset-0 bg-black/20 group-hover:bg-black/90 transition-all duration-300"></div>

        <img src={img} alt={"img do projeto" + title} className="object-cover w-full h-full" loading='lazy' />
        <h4 className="
        uppercase font-extrabold text-3xl absolute group-hover:bottom-[40%] left-5 bottom-20 bg-clip-text
        bg-white group-hover:bg-gradient-to-r group-hover:to-[#00b679] group-hover:from-[#0098EF] group-hover:text-4xl transition-all duration-500 drop-shadow-sm
        ">
          {title}
        </h4>

        <span className="text-gray-200 font-light z-50 absolute -bottom-full group-hover:bottom-10 left-5 right-5 transition-all duration-500">
          {info}
        </span>
      </div>
    </a>
  )
}

const ProjectMobileLayout = ({ title, img, link, info }: ProjectProps) => {
  return (
    <div className="flex flex-col w-full rounded-xl border overflow-hidden">
      <img src={img} alt={"img do projeto" + title} className="object-cover w-full h-full border-b" loading='lazy' />

      <div className="p-5 flex flex-col gap-3">
        <h4 className="uppercase bg-gradient-to-r to-[#0046f7] from-[#03C988] font-black text-2xl w-fit bg-clip-text text-transparent">{title}</h4>

        <p className="text-base">{info}</p>

        <a href={link} className="mt-6 p-2 py-3 bg-accent text-white font-semibold text-lx text-center rounded-lg uppercase">ver projeto</a>
      </div>
    </div>
  )
}
