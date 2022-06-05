import { Artists } from 'components/Artists'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { MetricsInfos } from 'components/MetricsInfos'
import { Week } from 'components/Week'

export default function Home() {
  return (
    <main
      className={`
        bg-body_background
    `}
    >
      <Header />
      <MetricsInfos />
      <Week />
      <Artists />
      <Footer />
    </main>
  )
}
