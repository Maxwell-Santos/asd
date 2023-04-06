import { useRef } from "react"

export function Footer() {

  return (
    <>
    <footer>
      <div>
        <span className="block mb-4">
          autor: <strong>Maxwell Alves dos Santos</strong>
        </span>
        <span className="block">
          portfólio: <a href="https://maxwellads.vercel.app" className="underline">maxwellads.vercel.app</a>
        </span>
        <span className="block">
          email: <a href="mailto:max.coding011@gmail.com" className="underline">max.coding011@gmail.com</a>
        </span>
        <span className="block">
          telefone: (11) 97776-1749
        </span>
        <a
        href="https://www.freepik.com/author/stories"
        className="my-4 block underline"
        >
          Image by storyset on Freepik</a>
      </div>
      <div>
        {/* <div className="email-content">
          <img src="./email-icon.svg" alt="icon email" width={30} className="opacity-70 absolute left-2" />
          <input ref={ref} type="email" name="email" id="email" placeholder="exemplo@gmail.com"/>
          <button onClick={() => submitEmail()}><img src="./check-icon.svg" alt="icon check" width={20}/></button>
        </div> */}

        <div className="social-medias">

          <a href="https://www.instagram.com/this_maxwell/" className="media">
            <img src="./social-icons/insta-icon.svg" alt="icon instagram" width={24}/>
            <span>@this.maxwell</span>
          </a>

          <a href="https://www.linkedin.com/in/maxwell-santos-2ab722210/" className="media">
            <img src="./social-icons/linkedin-icon.svg" alt="icon linkedin" width={24}/>
            <span>Meu Linkedin</span>
          </a>
        
        </div>
      </div>

    </footer>

      <div className="bg-accent text-center p-2 text-sm">
        <span>
        &copy; Todos os direitos reservados ao <a href="https://maxwellads.vercel.app" className="underline">Maxwell A. dos Santos</a>
        </span>
      </div>
    </>

  )
}
