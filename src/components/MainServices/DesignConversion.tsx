import conversion from '../../assets/conversion/conversion.svg'
import { ButtonAction } from '../ButtonAction'

export function DesignConversion() {
  return (
    <div className="mt-10 flex gap-10 justify-between items-center">
      <div className="flex-[1.2] md:max-w-[550px] flex flex-col">

        <h3
          className="uppercase text-title-p text-2xl sm:text-4xl font-extrabold">
          Desing Pensado em <br /> <span className="text-title-s">conversão</span>
        </h3>

        <p className='mt-6'>
          Um design de site pensado para conversão é como uma trilha bem sinalizada que leva o usuário diretamente ao objetivo, transformando visitantes em clientes fiéis.
        </p>

        <ButtonAction text={'Fazer orçamento'} isBudget/>
      </div>

      <div className="flex-1 hidden md:block">
        <img src={conversion} alt="gráfico verde com tendêcia de alta" loading='lazy'/>
      </div>

    </div>
  )
}