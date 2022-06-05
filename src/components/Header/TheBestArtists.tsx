import { theBestArtists } from 'mock/theBestArtists'

export function TheBestArtists() {
  return (
    <>
      <div
        className={`
        relative
        mt-4
        flex
    `}
      >
        {theBestArtists.map((item) => (
          <img
            data-avatar="nth"
            className={`
            h-[86px]
            w-[46px]
            object-cover
            md:w-[86px]
          `}
            key={item.id}
            src={item.image}
            alt={item.alt}
          />
        ))}
      </div>
      <div
        className={`
          ml-[115px]
          flex
          h-[85px]
          flex-col
          justify-end
          text-white
          md:ml-[155px]
      `}
      >
        <b>+10</b>
        <small>Artistas selecionados</small>
      </div>
    </>
  )
}
