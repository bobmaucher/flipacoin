import { useEffect, useState } from 'react'
import './CoinFlip.css'
import { GiFoxHead, GiFoxTail } from 'react-icons/gi'

export default function Coin({ forcedResult = null, autoFlip = false }) {
  const [result, setResult] = useState(forcedResult)
  const [flipping, setFlipping] = useState(autoFlip)
  const [flipClass, setFlipClass] = useState('')

  const flipCoin = () => {
    setFlipClass('flip-coin')
    setFlipping(true)
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'heads' : 'tails'
      setResult(outcome)
      setFlipping(false)
      setFlipClass('')
    }, 1000)
  }

  useEffect(() => {
    if (autoFlip && !result) {
      flipCoin()
    }
  }, [autoFlip])

  const renderIcon = () => {
    if (flipping) {
      return (
        <div className="flex flex-col items-center space-y-2">
          <GiFoxHead size={48} />
          <GiFoxTail size={48} />
        </div>
      )
    }

    if (result === 'heads') return <GiFoxHead size={84} />
    if (result === 'tails') return <GiFoxTail size={84} />

    return (
      <div className="flex flex-col items-center text-lg font-semibold space-y-1">
        <span className="flex items-center space-x-2">
          <GiFoxHead size={32} />
          <span>Heads</span>
        </span>
        <span className="flex items-center space-x-2">
          <GiFoxTail size={32} />
          <span>Tails</span>
        </span>
      </div>
    )
  }

  return (
    <>
      <div className={`coin ${flipClass}`}>
        {renderIcon()}
      </div>

      <div className="mt-4 h-8 text-2xl font-bold text-gray-700 flex items-center justify-center">
        <span className={`${flipping || !result ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          {result === 'heads' ? 'Heads!' : result === 'tails' ? 'Tails!' : ''}
        </span>
      </div>

    <button
      onClick={flipCoin}
      className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
      disabled={flipping}
      >
      {flipping ? 'Flipping...' : 'Flip Coin'}
    </button>

    </>
  )
}