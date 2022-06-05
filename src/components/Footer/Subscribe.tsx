export function Subscribe() {
  return (
    <form>
      <div
        className={`
          flex
      `}
      >
        <input
          className={`
                    h-12
                    w-full
                    border-0
                    bg-black
                    px-4
                    text-white
                    outline-none
                    placeholder:text-subtitle_color
                `}
          type="text"
          placeholder="E-mail"
        />
        <button
          className={`
                    flex
                    h-12
                    w-[92px]
                    items-center
                    justify-center
                    bg-white
                    text-base
                    font-bold
                    transition
                    hover:bg-color_logo
                    hover:text-white
                `}
        >
          Enviar
        </button>
      </div>
    </form>
  )
}