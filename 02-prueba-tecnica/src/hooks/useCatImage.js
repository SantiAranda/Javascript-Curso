import { useEffect, useState } from 'react'
const CAT_ENDPOINT_IMG = 'https://cataas.com/cat/says/'
const IMG_STYLE = '?fontSize=50&fontColor=red&json=true'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(`${CAT_ENDPOINT_IMG}${threeFirstWords}${IMG_STYLE}`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })

  }, [fact])

  return { imageUrl }
}