import Image from 'next/image'

import { Infos } from './Infos'
import { Metrics } from './Metrics'

export function MetricsInfos() {
  return (
    <div
      className={`
      md:border-b-2
      md:border-subtitle_color
    `}
    >
      <div
        className={`
        relative
        mx-auto
        flex
        w-full
        flex-col
        md:h-[660px]
        md:max-w-[1277px]
        md:flex-row
        md:px-6
    `}
      >
        <div
          className={`
          mt-16
          flex
          w-full
          border-subtitle_color
          md:mt-0
          md:max-w-[200px]
          md:items-center
          md:border-r-2
      `}
        >
          <Metrics />
        </div>

        <div
          className={`
          flex
          w-full
          flex-col
          gap-4
          pt-8
          md:justify-between
          md:pt-0
      `}
        >
          <Infos />

          <div
            data-banner="banner"
            className={`
          flex
          h-96
          w-full
          md:h-[250px]
          lg:h-[300px]
        `}
          >
            <Image
              src="/img/banner.jpg"
              alt="Banner"
              width={7222}
              height={4694}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
