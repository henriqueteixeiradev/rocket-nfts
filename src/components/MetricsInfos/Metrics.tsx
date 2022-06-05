import { metrics } from 'mock/metrics'

export function Metrics() {
  return (
    <div
      className={`
        flex
        w-full
        justify-around
        px-6
        md:h-3/4
        md:flex-col
        md:items-start
        md:px-0
    `}
    >
      {metrics.map((item) => (
        <div
          className={`
            align-center
            flex
            flex-col
            items-center
            justify-center
        `}
          key={item.id}
        >
          <b
            className={`
            text-3xl
            text-white
            md:text-5xl
          `}
          >
            {item.metric}
          </b>
          <small
            className={`
            text-base
            text-white
            opacity-30
            md:text-xl
          `}
          >
            {item.label}
          </small>
        </div>
      ))}
    </div>
  )
}
