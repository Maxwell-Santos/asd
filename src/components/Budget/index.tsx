import budget_img from '../../assets/budget.svg'
import { ButtonAction } from '../ButtonAction'

export function Budget() {

  return (
    <section className='max-[425px]:p-0'>
      <div id="budget" className='flex items-center gap-5 relative'>
        <div className="flex-[1]">
          <h2>processo de orçamento</h2>

          <p className='text-white'>
            O valor exato vai depender da sua copy e do tipo de página que você quer. Por exemplo, uma copy mais longa e uma página com animações vai ser mais cara do que uma copy menor e uma página mais simples. Por isso, o melhor caminho é clicar no botão abaixo para marcarmos uma call.
          </p>
          <ButtonAction text="Fazer orçamento" blue isBudget/>
        </div>

        <div className='flex-[.8] hidden sm:block'>
          <img src={budget_img} alt="figura de uma moça assinando contrato" loading='lazy'/>
        </div>
      </div>
    </section>
  )
}
