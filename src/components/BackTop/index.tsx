export function BackTop() {

  return (
   <button
   onClick={() => scrollTo(0,0)}
   className="fixed bottom-5 right-4 bg-button-primary hover:bg-button-primary-h hover:-translate-y-1 transition-all p-2 px-3 rounded-full aspect-square z-50 shadow-md"
   >
    <img src="./double-arrow.svg" alt="seta para cima" width={20} className="-rotate-90"/>
   </button>
 )
}
