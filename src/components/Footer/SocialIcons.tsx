import Link from 'next/link'
import { instagran, youtube, twitter, gmail } from 'svg/social_icons'

export function SocialIcons() {
  return (
    <ul
      className={`
      mt-14
      flex
      gap-12
  `}
    >
      {[instagran, youtube, twitter, gmail].map((item, i) => (
        <li key={i}>
          <Link href="#">
            <a data-social="hover">{item}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
