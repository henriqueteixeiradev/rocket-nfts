import { Card } from './Card'
import { cardsWeek } from 'mock/cardsWeek'

export function CardsDesktop() {
  return (
    <div
      className={`
        relative
        mt-28
        flex
        h-[750px]
        w-full
        items-center
        justify-center
    `}
    >
      <div
        className={`
          relative
          flex
          w-full
          flex-col
          justify-between
          gap-20
      `}
      >
        {cardsWeek.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            url={item.url}
            alt={item.alt}
            author={item.author}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

      <div
        className={`
            absolute
            min-h-full
            w-[1px]
            bg-card_color
        `}
      />
    </div>
  )
}
