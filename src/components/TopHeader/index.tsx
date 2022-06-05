import { ButtonConnect } from './ButtonConnect'
import { NavMenu } from './NavMenu'
import { hamburguer } from 'svg/icons_top_header'
import { logo } from 'svg/logo'

export function TopHeader() {
  return (
    <div
      className={`
        mt-4
        flex
        h-20
        w-full
        items-center
        justify-between
        px-6
        md:mx-auto
        md:mt-14
        md:max-w-[1277px]
    `}
    >
      <div>{logo}</div>

      <div
        className={`
          hidden
          md:block
      `}
      >
        <NavMenu />
      </div>

      <div
        className={`
          hidden
          md:block
      `}
      >
        <ButtonConnect />
      </div>

      <div
        className={`
          md:hidden
      `}
      >
        {hamburguer}
      </div>
    </div>
  )
}
