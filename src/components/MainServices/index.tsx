import { DesingConversion } from "./DesingConversion";

export function MainServices() {

  return (
    <section id="services">
      <h2 className="text-center uppercase text-title-p font-black">principais serviços</h2>

      <div className="flex gap-0 md:gap-2 mt-10 flex-col md:flex-row">
        <article className="flex-[1.2] bg-gradient-to-b from-green-400 to-green-600 article">
          <h4>E-commerce</h4>

          <p>
            O E- commerce é uma página de vendas, onde você coloca seus produtos, preços, img, descrição e o seu cliente pode efetuar a compra online.
            <br />
            A vantagem de ter sua loja online, é que a pessoa consegue te achar de qualquer lugar, e saber todas as informações nesserárias para ela pode fazer a compra.
          </p>
        </article>
        <article className="flex-1 bg-gradient-to-b from-orange-300 to-orange-400 article">
          <h4>Portfólio</h4>

          <p>
            O Portifólio, é um site que você coloca suas experiências, e tudo mais, afim de vender sua imagem, é muito comum, pessoas como: empresário, advogado, autônomo, terem portifólio.
          </p>
        </article>
      </div>

      <div className="flex gap-0 md:gap-2 flex-col md:flex-row">
        <article className="flex-1 bg-gradient-to-b from-teal-500 to-teal-600 article">
          <h4>Cardápio Online</h4>

          <p>
            Cardápio online para delivery ou não.
            <br />
            Por exemplo: você tem uma pizzaria que possue muitos sabores de pizza, ao invés de pagar uma taxa para o ifood, e ter seu negócio no meo de muitos. Eu desenvolvo o seu cardápio pessoal.
          </p>
        </article>
        <article className="flex-[1.2] bg-gradient-to-b from-violet-400 to-violet-500 article">
          <h4>Página institucional</h4>

          <p>
            Páginas institucionais, são páginas com as informações da sua empresa.
            <br />
            Área de contato, links de redes sociais, alguns exemplos do seu trabalho e outras coisas que definirmos na reunião de escopo do projeto.
          </p>
        </article>
      </div>

      <DesingConversion />
    </section>
  )
}
