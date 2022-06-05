import Image from 'next/image'
import Link from 'next/link'
import { arrow } from 'svg/icons_week'

interface CardProps {
  title: string
  url: string
  author: string
  price: number
  image: string
  alt: string
}

export function Card({ title, url, author, price, image, alt }: CardProps) {
  return (
    <div
      data-week="grid"
      className={`
        flex
        w-full
        max-w-[346px]
        flex-col
        gap-4
    `}
    >
      <div
        className={`
          flex
          w-full
          justify-between
      `}
      >
        <h3
          className={`
          text-2xl
          font-bold
          text-white
        `}
        >
          {title}
        </h3>
        <Link href={url}>
          <a
            className={`
              hover:text-color_logo
          `}
          >
            {arrow}
          </a>
        </Link>
      </div>

      <div
        className={`
          flex
          w-full
          justify-between
      `}
      >
        <h4
          className={`
            text-base
            text-white
            opacity-30
        `}
        >
          {author}
        </h4>
        <small
          className={`
            text-base
            text-color_logo
        `}
        >
          {price} RKT
        </small>
      </div>

      <div
        className={`
          h-[207px]
          w-full
      `}
      >
        <Image
          src={image}
          alt="Imagem"
          width={317}
          height={208}
          quality={100}
        />
      </div>
    </div>
  )
}
