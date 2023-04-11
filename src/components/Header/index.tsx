import { useState, useEffect } from "react"
import { Link } from 'react-scroll'

export function Header() {

  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(screen.width)
    })
    setWidth(screen.width)
  }, [])

  const linkStyle = "ml-2 p-1 px-3 hover:bg-accent/50 transition-all rounded-md text-center"

  const [open, setOpen] = useState(false)

  return (
    <>
      {
        width <= 640 ? (
          <MobileHeader open={open} setOpen={setOpen} />
        ) : (

          <header
            className={`${width <= 900 && 'flex flex-row-reverse'} 
          w-full p-3 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 text-base
          `}>
            <a
              href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
              className="bg-button-primary hover:bg-button-primary-h text-white p-2 px-3 rounded-md ml-auto w-fit block cursor-pointer">conversar</a>

            <nav className={`-z-10 ${width > 900 && 'absolute inset-0 w-full'} flex items-center justify-center`}>
              <Link to="creation-process" className={linkStyle} offset={-74}>processo de criação</Link> 
              <Link to="services" className={linkStyle} offset={-74}>serviços</Link>
              <Link to="projects" className={linkStyle} offset={-74}>projetos</Link>
              <Link to="budget" className={linkStyle} offset={-74}>orçamento</Link>
            </nav>
          </header>
        )
      }
    </>
  )
}

function MobileHeader({ open, setOpen }: any) {
  const linkStyle = "w-full p-2 rounded-lg text-center text-white text-lg first-letter:uppercase"

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto block m-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>


      <header className={`fixed ${open ? 'right-0' : '-right-full'} transition-all duration-500 w-full max-w-[300px] top-0 bottom-0 h-[100svh] z-[9999] bg-aside-mobile shadow-md flex flex-col justify-center items-center p-5`}>

        <button
          onClick={() => setOpen(!open)}
          className="self-end text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-2 w-full mt-auto">
          <Link offset={-50} to="creation-process" className={linkStyle}>processo de criação</Link>
          <Link offset={-50} to="services" className={linkStyle}>serviços</Link>
          <Link offset={-50} to="projects" className={linkStyle}>projetos</Link>
          <Link offset={-50} to="budget" className={linkStyle}>orçamento</Link>
        </nav>
        <a
          href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
          className="bg-[#038bfa] hover:[#0075d4] text-white p-2 px-3 rounded-md w-full text-center block cursor-pointer mt-auto">
          conversar
        </a>
      </header>

    </>

  )
}