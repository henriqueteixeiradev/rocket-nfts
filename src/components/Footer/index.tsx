import Link from 'next/link'
import { SiteMap } from './SiteMap'
import { SocialIcons } from './SocialIcons'
import { Subscribe } from './Subscribe'
import { logo } from 'svg/logo'

export function Footer() {
  return (
    <section
      className={`
        flex
        flex-col
        bg-card_color
        px-6
        py-20
    `}
    >
      <div
        className={`
          mx-auto
          flex
          w-full
          flex-col
          md:max-w-[1277px]
      `}
      >
        {logo}

        <div
          className={`
            flex
            w-full
            flex-col
            border-subtitle_color
            md:mt-14
            md:flex-row
            md:border-y-[1.5px]
            md:px-6
            lg:px-16
        `}
        >
          <div
            className={`
              flex
              h-full
              w-full
              flex-col
              gap-6
              border-subtitle_color
              md:min-w-[280px]
              md:border-r-[1.5px]
              md:py-16
              md:pr-16
              lg:min-w-[400px]
          `}
          >
            <h2
              className={`
                mt-4
                text-2xl
                text-white
            `}
            >
              Fique por dentro de
              <span
                className={`
                  mx-2
                  text-color_logo
              `}
              >
                todas as novidades
              </span>
            </h2>

            <Subscribe />
          </div>
          <div
            className={`
              hidden
              w-full
              items-center
              justify-center
              md:flex
              md:px-4
              lg:px-16
          `}
          >
            <SiteMap />
          </div>
        </div>

        <div
          className={`
            justify-centers
            flex
            w-full
            flex-col
            items-center
        `}
        >
          <SocialIcons />

          <Link href="#">
            <a
              className={`
                mt-20
                text-white
                transition
                hover:text-color_logo
                hover:underline
            `}
            >
              www.rocketseat.com.br
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
