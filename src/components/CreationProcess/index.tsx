import creation from '../../assets/Visual data-cuate.svg'
import { ButtonAction } from '../ButtonAction'

export function CreationProcess() {

  return (
    <section id="creation-process">
      <h2 className="text-center uppercase text-title-p font-black">processo de criação</h2>

      <div className="flex items-center gap-10 flex-wrap">
        <div className='flex-1 hidden md:block'>
          <img src={creation} alt="figura de moça mexendo em gráficos" loading='lazy'/>
        </div>

        <div className='flex-1 mt-10'>
          <ol>
            <li>
              Numa conversa, vamos discutir sobre o que você espera do site, alguma inspiração, sessões e quem é o seu público alvo.
              <span>01</span>
            </li>
            <li>
              Eu procuro figuras e imagens que têm o mesmo contexto que o seu público alvo, e você também pode trazer algumas referências para incluir no seu site.
              <span>02</span>
            </li>
            <li>
              E por fim, vou desenvolver um design UNICO e EXCLUSIVO, para você, com toda a estrutura criada por mim.
              <span>03</span>
            </li>
          </ol>

          <ButtonAction text='Fazer orçamento' isBudget/>
        </div>
      </div>
    </section>
  )
}
