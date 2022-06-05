import Image from 'next/image'

interface CardArtistsProps {
  image: string
  alt: string
  name: string
  description: string
}

export function CardArtist({
  image,
  alt,
  name,
  description
}: CardArtistsProps) {
  return (
    <div
      className={`
        group
        flex
        h-[220px]
        w-[200px]
        cursor-pointer
        flex-col
        items-center
        justify-center
        gap-8
        bg-card_color
        transition
        hover:bg-color_logo
        md:h-[150px]
        md:w-[350px]
        md:flex-row
    `}
    >
      <div
        className={`
          flex
          items-center
          justify-center
      `}
      >
        <Image src={image} alt={alt} width={86} height={86} quality={100} />
      </div>
      <div
        className={`
          flex
          flex-col
          items-center
          justify-center
      `}
      >
        <b
          className={`
            text-xl
            text-white
            transition
            group-hover:text-color_input
        `}
        >
          {name}
        </b>
        <small
          className={`
            text-xl
            text-color_logo
            transition
            group-hover:text-white
        `}
        >
          {description}
        </small>
      </div>
    </div>
  )
}
