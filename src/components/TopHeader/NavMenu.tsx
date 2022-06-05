import Link from 'next/link'
import { navLinks } from 'mock/navLinks'

export function NavMenu() {
  return (
    <nav
      className={`
        w-ful
        flex
        w-full
    `}
    >
      <ul
        className={`
          flex
          gap-6
      `}
      >
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <a
                className={`
                  text-white
                  transition
                  hover:text-color_logo
              `}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
