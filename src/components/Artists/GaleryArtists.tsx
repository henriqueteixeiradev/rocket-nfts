import Link from 'next/link'
import { CardArtist } from './CardArtist'
import { artists } from 'mock/artists'
import { arrow } from 'svg/icons_cards_artists'

export function GaleryArtists() {
  return (
    <div
      className={`
        mx-auto
        mt-8
        flex
        w-full
        flex-col
    `}
    >
      <div
        data-gallery-webkit="scroll"
        data-gallery="scroll"
        className={`
        block
        pb-2
        md:hidden
      `}
      >
        {artists.map((item) => (
          <CardArtist
            key={item.id}
            alt={item.alt}
            description={item.description}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>

      <div
        className={`
          flex
          w-full
          flex-col
          items-center
          justify-center
      `}
      >
        <div
          className={`
          mt-28
          hidden
          w-full
          flex-wrap
          items-center
          justify-center
          gap-20
          md:flex
        `}
        >
          {artists.map((item) => (
            <CardArtist
              key={item.id}
              alt={item.alt}
              description={item.description}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>

        <Link href="#">
          <a
            className={`
              mt-14
              flex
              items-center
              gap-4
              text-white
              hover:underline
          `}
          >
            Ver todos os artistas <span>{arrow}</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
