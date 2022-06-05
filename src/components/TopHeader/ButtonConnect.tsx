import { fox_icon } from 'svg/fox_icon'

export function ButtonConnect() {
  return (
    <button
      className={`
        justify-conter
        flex
        items-center
        gap-[15px]
        bg-white
        px-[14px]
        py-[10px]
        font-bold
        text-black
        transition
        hover:bg-color_logo
    `}
    >
      {fox_icon}Conectar carteira
    </button>
  )
}
