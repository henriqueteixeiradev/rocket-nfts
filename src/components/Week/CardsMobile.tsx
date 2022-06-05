import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from './Card'
import { cardsWeek } from 'mock/cardsWeek'

import 'swiper/css'
import 'swiper/css/pagination'

export function CardsMobile() {
  return (
    <div
      className={`
      my-8
    `}
    >
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
      >
        {cardsWeek.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`
                flex
                w-full
                items-center
                justify-center
            `}
            >
              <Card
                title={item.title}
                url={item.url}
                alt={item.alt}
                author={item.author}
                image={item.image}
                price={item.price}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
