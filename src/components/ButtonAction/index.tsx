import './background-animate.css'

interface ButtonActionProps {
  text: string,
  isBudget?: boolean,
  blue?: boolean,
}

export function ButtonAction({ text, isBudget, blue }: ButtonActionProps) {
  const defaultStyle = "bg-button-primary hover:bg-button-primary-h text-button-primary text-lg font-bold p-4 px-5 rounded-xl transition-all"

  if (isBudget && !blue) {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
        className={`${defaultStyle} flex justify-between items-center w-full mt-10`}>
        <span>{text}</span>
        <img src="./arrow.svg" alt="flecha para a direita" width={24} />
      </a>
    )

  } else if (isBudget && blue) {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
        className="bg-budget-end hover:bg-budget-end-h text-button-primary text-lg p-4 px-5 rounded-xl transition-all items-center max-[425px]:w-full font-bold">
        {text}
      </a>

    )

  } else {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
        className={`button-action ${defaultStyle} text-center w-full sm:w-fit hover:-translate-y-1`}>
        <span>{text}</span>
      </a>
    )
  }
}
