import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from './Home'
import Coin from './Coin'
import PageWrapper from './PageWrapper'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/heads"
        element={
          <>
            <Helmet>
              <title>Flip a Coin</title>
              <meta name="description" content="This coin landed on heads. Flip your own coin online with this fun virtual coin flipper!" />
            </Helmet>
            <PageWrapper>
              <h1 className="text-4xl font-bold mb-8">Flip a Coin</h1>
              <Coin forcedResult="heads" />
            </PageWrapper>
          </>
        }
      />
      <Route
        path="/tails"
        element={
          <>
            <Helmet>
              <title>Flip a Coin</title>
              <meta name="description" content="This coin landed on tails. Use this virtual coin flipper to make random decisions online." />
            </Helmet>
            <PageWrapper>
              <h1 className="text-4xl font-bold mb-8">Flip a Coin</h1>
              <Coin forcedResult="tails" />
            </PageWrapper>
          </>
        }
      />
      <Route
        path="/flip-a-coin"
        element={
          <>
            <Helmet>
              <title>Flip a Coin</title>
              <meta name="description" content="Instantly flip a coin online. This random coin flip auto-generates a heads or tails result." />
            </Helmet>
            <PageWrapper>
              <h1 className="text-4xl font-bold mb-8">Flip a Coin</h1>
              <Coin autoFlip />
            </PageWrapper>
          </>
        }
      />
    </Routes>
  )
}