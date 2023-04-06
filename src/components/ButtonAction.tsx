interface ButtonActionProps {
  text: string,
  isBudget?: boolean,
  blue?: boolean,
}

export function ButtonAction({ text, isBudget, blue }: ButtonActionProps) {
  const defaultStyle = "bg-button-primary hover:bg-button-primary-h text-button-primary text-lg font-bold p-3 px-5 rounded-xl transition-all"

  if (isBudget && !blue) {
    return (
      <button
        className={`${defaultStyle} flex justify-between items-center w-full mt-10`}>
        <span>{text}</span>
        <img src="./arrow.svg" alt="flecha para a direita" width={24}/>
      </button>
    )

  } else if (isBudget && blue){
    return(
      <button
        className={`bg-budget-end hover:bg-budget-end-h text-button-primary text-lg p-3 px-5 rounded-xl transition-all items-center max-[425px]:w-full font-bold`}>
        {text}
      </button>

    )
    
  } else {
    return (
      <button
        className={`${defaultStyle} text-center w-full sm:w-fit`}>
        <span>{text}</span>
      </button>
    )
  }
}
