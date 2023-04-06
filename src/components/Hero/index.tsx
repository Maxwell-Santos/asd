import img from '../../assets/hero-img.svg'
import { ButtonAction } from '../ButtonAction'
export function Hero() {

  const texto1 = "Seja diferente dos iguais, e venha alavancar sua empresa com com um site rápdio e exclusivo da sua marca. Aumente seu lucro sem aumentar o esforço."

  const texto2 = "De todas as vantangens de ter um site, aumentar o lucro com o menor esforço, fica no topo, e meu papel é te proporcionar isso pelo melhor preço"

  const texto3 = "A empresa que tem um site, está na frente e muito na do mercado. Mas isso pode parecer muito dificíl e caro de conquistar. Eu vou te mostrar como é fácil ficar na frente dos demais"

  return (
   <section id="hero" className='flex items-center relative'>
    <div className='flex-1'>
      <h1>Tenha uma empresa que <span>CONVERTE</span></h1>
      <p> 
        {texto3}
      </p>

      <ButtonAction text="Começar agora" />
      
    </div>
    <div className='flex-1 max-[600px]:hidden'>
      <img src={img} alt="homem no meio do tornado de ideias" loading="lazy"/>
    </div>

    <span className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
      <img src="./double-arrow.svg" alt="" width={20} height={20} className="rotate-90 opacity-40"/>
    </span>
   </section>
 )
}
