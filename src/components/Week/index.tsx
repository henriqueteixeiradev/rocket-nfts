import { CardsDesktop } from './CardsDesktop'
import { CardsMobile } from './CardsMobile'

export function Week() {
  return (
    <div
      className={`
        mx-auto
        mt-20
        flex
        w-full
        max-w-[1277px]
        flex-col
        px-6
    `}
    >
      <h2
        className={`
          text-3xl
          font-bold
          text-white
      `}
      >
        <span className="text-color_logo">Populares</span> da semana
      </h2>

      <div
        className={`
        block
        md:hidden
      `}
      >
        <CardsMobile />
      </div>

      <div
        className={`
        hidden
        md:block
      `}
      >
        <CardsDesktop />
      </div>
    </div>
  )
}
