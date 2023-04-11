import img from '../../assets/hero/Revenue.gif'
import { ButtonAction } from '../ButtonAction'
export function Hero() {

  const texto1 = "Seja diferente dos iguais e venha alavancar sua empresa com com um site rápido e exclusivo da sua marca. Aumente seu lucro sem aumentar o esforço"

  const texto2 = "De todas as vantagens de ter um site, aumentar o lucro com o menor esforço, fica no topo, e meu papel é te proporcionar isso pelo melhor preço"

  const texto3 = "A empresa que tem um site, está na frente e muito na do mercado. Mas isso pode parecer muito difícil e caro de conquistar. Eu vou te mostrar como é fácil ficar na frente dos demais"

  return (
    <section id="hero" className='flex items-center relative'>
      <div className='flex-1 flex flex-col'>
        <h1>Tenha uma empresa que <span>CONVERTE</span></h1>
        <p>
          {texto1}
        </p>

        <ButtonAction text="Começar a sua agora" />
        
      </div>
      <div className='flex-1 max-[600px]:hidden'>
        <img src={img} alt="homem no meio do tornado de ideias" loading="lazy" />
      </div>

      <span className='hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </section>
  )
}
