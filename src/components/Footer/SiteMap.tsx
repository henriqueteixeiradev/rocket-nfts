import Link from 'next/link'

export function SiteMap() {
  return (
    <div
      className={`
        flex
        w-full
        items-center
        justify-between
        gap-4
    `}
    >
      <div>
        <b
          className={`
            font-bold
            text-white
        `}
        >
          Empresa
        </b>
        <ul
          className={`
            mt-2
        `}
        >
          {[1, 2, 3, 4].map((item) => (
            <li key={item}>
              <Link href="#">
                <a
                  className={`
                    text-white
                    opacity-30
                    hover:underline
                `}
                >
                  Link 1
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <b
          className={`

            font-bold
            text-white
        `}
        >
          Mapa
        </b>
        <ul
          className={`
            mt-2
        `}
        >
          {[1, 2, 3, 4].map((item) => (
            <li key={item}>
              <Link href="#">
                <a
                  className={`
                    text-white
                    opacity-30
                    hover:underline
                `}
                >
                  Link 1
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <b
          className={`

            font-bold
            text-white
        `}
        >
          Links
        </b>
        <ul
          className={`
            mt-2
        `}
        >
          {[1, 2, 3, 4].map((item) => (
            <li key={item}>
              <Link href="#">
                <a
                  className={`
                    text-white
                    opacity-30
                    hover:underline
                `}
                >
                  Link 1
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
