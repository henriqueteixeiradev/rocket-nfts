import Link from 'next/link'

export function Infos() {
  return (
    <div
      className={`
            flex
            w-full
            flex-col
            gap-4
            px-6
            md:h-full
            md:flex-row
            md:gap-20
            md:p-8
            lg:gap-40
            lg:p-16
        `}
    >
      <div
        className={`
              flex
              flex-col
              gap-7
          `}
      >
        <p
          className={`
                text-base
                text-white
                lg:text-lg
            `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          malesuada amet pretium lacus. Id
          <span
            className={`
                mx-2
                text-color_logo
              `}
          >
            potenti diam
          </span>
          et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris
          mattis nunc semper.
        </p>
        <Link href="#">
          <a
            className={`
                text-base
                font-bold
                text-white
                underline
                hover:bg-color_logo
                md:text-lg
              `}
          >
            Lorem ipsum
          </a>
        </Link>
      </div>

      <div
        className={`
              flex
              flex-col
              gap-7
          `}
      >
        <p
          className={`
                text-base
                text-white
                lg:text-lg
            `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          malesuada amet pretium lacus. Id
          <span
            className={`
                mx-2
                text-color_logo
              `}
          >
            potenti diam
          </span>
          et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris
          mattis nunc semper.
        </p>
        <Link href="#">
          <a
            className={`
                text-base
                font-bold
                text-white
                underline
                hover:bg-color_logo
                md:text-lg
              `}
          >
            Lorem ipsum
          </a>
        </Link>
      </div>
    </div>
  )
}
