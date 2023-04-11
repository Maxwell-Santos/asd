export function BackTop() {

  return (
    <button
      onClick={() => scrollTo(0, 0)}
      className="fixed bottom-5 right-4 bg-button-primary hover:bg-button-primary-h hover:-translate-y-1 transition-all p-2 px-3 rounded-full aspect-square z-50 shadow-md text-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}
