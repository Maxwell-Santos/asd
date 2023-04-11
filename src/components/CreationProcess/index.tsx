import creation from '../../assets/creation-process/creation.svg'
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
              Numa conversa, vamos discutir sobre o que você espera do site, inspirações, sessões do site e quem é o seu público alvo.
              <span>01</span>
            </li>
            <li>
              Você traz algumas referências para incluir no seu site, como imagens. E eu também procuro alguma como inspiração para o processo criativo.
              <span>02</span>
            </li>
            <li>
              Até o momento estava acumulando informações, e agora começarei o desenvolvimento da página de fato do um design <strong className='text-title-s'>ÚNICO</strong> e <strong className='text-title-s'>EXCLUSIVO.</strong>
              <span>03</span>
            </li>
          </ol>

          <ButtonAction text='Fazer orçamento' isBudget/>
        </div>
      </div>
    </section>
  )
}
