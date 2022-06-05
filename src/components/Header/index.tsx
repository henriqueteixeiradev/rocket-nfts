import { HeadLine } from './HeadLine'
import { Gallery } from 'components/Gallery'
import { TopHeader } from 'components/TopHeader'

export function Header() {
  return (
    <section
      data-bg="header"
      className={`
        flex
        h-[1000px]
        w-full
        flex-col
    `}
    >
      <TopHeader />
      <HeadLine />
      <Gallery />
    </section>
  )
}
