import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './components/otro.jsx'

export function App() {
  const { fact, getFactAndUpdate } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleCLick = async () => {
    getFactAndUpdate()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleCLick}>Refrescar</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`image using three word for ${fact}`} />}
      </section>

      <Otro />
    </main>
  )
}