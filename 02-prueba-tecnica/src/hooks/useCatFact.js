import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'

export const useCatFact = () => {
  const [fact, setFact] = useState('')

  const getFactAndUpdate = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(getFactAndUpdate, [])

  return { fact, getFactAndUpdate }
}