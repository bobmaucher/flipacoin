import { Helmet } from 'react-helmet'
import Coin from './Coin'
import PageWrapper from './PageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Flip a Coin</title>
        <meta name="description" content="Flip a coin online instantly. Get heads or tails with one click using this fun, interactive coin flipper!" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Flip a Coin</h1>
      <Coin />
    </PageWrapper>
  )
}