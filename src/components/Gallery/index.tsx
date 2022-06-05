import Image from 'next/image'
import { gallery_1, gallery_2 } from 'mock/gallery'

export function Gallery() {
  return (
    <div
      className={`
        mx-auto
        mt-8
        flex
        w-full
        flex-col
        pl-6
        md:max-w-[1277px]
        md:pr-6
    `}
    >
      <div
        data-gallery-webkit="scroll"
        data-gallery="scroll"
        className={`
        img
        pb-2
      `}
      >
        {gallery_1.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={307.13}
            height={197.98}
          />
        ))}
      </div>

      <div
        data-gallery-webkit="scroll"
        data-gallery="scroll"
        className={`
          img
          mt-14
          pb-2
      `}
      >
        {gallery_2.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            width={307.13}
            height={197.98}
          />
        ))}
      </div>
    </div>
  )
}
