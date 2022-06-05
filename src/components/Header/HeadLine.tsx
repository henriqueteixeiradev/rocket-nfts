import { TheBestArtists } from './TheBestArtists'
import { art_icon } from 'svg/art_logo'

export function HeadLine() {
  return (
    <div
      className={`
      mt-10
      flex
      w-full
      flex-col
      gap-4
      px-6
      md:mx-auto
      md:mt-20
      md:max-w-[1277px]
      md:flex-row-reverse
      md:justify-end
      md:gap-10
    `}
    >
      <div
        className={`
          flex
          w-full
      `}
      >
        <h1
          className={`
          text-3xl
          font-bold
          text-white
          md:text-4xl
          lg:text-5xl
      `}
        >
          Descubra a verdadeira arte digital e colecione diversas
          <span className="ml-2 text-color_logo">NFTs</span>
        </h1>

        <div
          className={`
          hidden
          md:block
        `}
        >
          {art_icon}
        </div>
      </div>
      <div
        className={`
          flex
          w-full
          flex-col
          md:w-[440px]
      `}
      >
        <p
          className={`
          text-white
          opacity-70
      `}
        >
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </p>
        <TheBestArtists />
      </div>
    </div>
  )
}
