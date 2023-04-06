import sections from './sections.json'

import presencaOnline from '../../assets/presenca-online.gif'
import infoCliente from '../../assets/info-cliente.gif'
import aumentoVendas from '../../assets/aumento-vendas.gif'
import credibilidade from '../../assets/credibilidade.gif'
import marketing from '../../assets/marketing.gif'

import { ButtonAction } from '../ButtonAction'

import { useEffect } from 'react'

import '@splidejs/react-splide/css'

import Rellax from 'rellax'

export function Sections() {
  const section_content = [ presencaOnline, infoCliente, aumentoVendas, credibilidade, marketing ]

  //verifica se é impar ou par o index do elemento
  //uso essa informação para ir alternando a direção do conteúdo da sessão
  /**
   *se for impar:
    a imagem fica na esquerda e o título é azul.
    se for par: 
    a imagem fica na direita e o título é verde.
   */
  const checkOddEven = (indexOfSection: number) => indexOfSection % 2 == 0

  useEffect(() => {
    new Rellax(".rellax")
  }, [])

  return (
    <>
      {
        sections.map((section, index) => (
          <section
            className={`${checkOddEven(index) && 'md:flex-row-reverse'}
                flex flex-col-reverse mt-20 text-center md:text-start md:m-0 md:flex-row  justify-between items-center md:h-screen md:max-h-[700px] bg-white gap-10
              `}
          >
            <div className='content'>
              <h3
                className={`${checkOddEven(index) ? 'text-title-p' : 'text-title-s'}
                font-bold text-3xl sm:text-4xl
                `}>
                {section.title}
              </h3>

              <p className='content-info'>{section.info1}</p>
              <p className='content-info'>{section.info2}</p>

              <div className='mt-10'>
                {index == 2 && <ButtonAction text='Começar agora' />}
              </div>
            </div>

            <div className='flex-1'>
              <img src={section_content[index]} alt="imagem da sessão" className='img-section' loading='lazy' />
            </div>
          </section>
        ))
      }
    </>
  )
}
