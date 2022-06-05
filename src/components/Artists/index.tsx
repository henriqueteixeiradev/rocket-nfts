import { GaleryArtists } from './GaleryArtists'

export function Artists() {
  return (
    <div
      className={`
      flex
      w-full
      flex-col
      px-6
      pb-16
      md:mx-auto
      md:mt-20
      md:max-w-[1277px]
      md:pb-20
    `}
    >
      <h2
        className={`
          text-3xl
          font-bold
          text-white
      `}
      >
        Melhores <span className="text-color_logo">Artistas</span>
      </h2>

      <GaleryArtists />
    </div>
  )
}
