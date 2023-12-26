import { CohereClient } from 'cohere-ai'
import { useEffect, useState } from 'react'
import Text from './components/text.tsx'

type PropTypes = {
  prompt: string
}

const cohere = new CohereClient({
  token: 'kTgRTN0S3ZJS4674O1WF3hkVZbyI2aR3rGjGAWGo',
})

export default function Generator({ prompt }: PropTypes) {
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const getRandomNumber = (LIMIT: number) => {
    // Use Math.random() to generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();
  
    // Multiply by LIMIT and floor the result to get a whole number within the desired range
    const randomNumber = Math.floor(randomDecimal * LIMIT);
  
    return randomNumber;
  }

  const removeEndingPhrase = (str: string) => {
    const phraseToRemove = 'would you like me to generate a different message';
    const endingPunctuation = /[\.\?!]$/; // Regular expression to match ending punctuation
  
    // Check if the string ends with the phrase (ignoring case and ending punctuation)
    if (str.toLowerCase().endsWith(phraseToRemove.toLowerCase()) ||
        str.toLowerCase().endsWith(phraseToRemove.toLowerCase() + endingPunctuation)) {
      return str.slice(0, -phraseToRemove.length - String(endingPunctuation).length);
    } else {
      return str; // Return the original string if the phrase is not found
    }
  }

  useEffect(() => {
    const generate = async () => {
      setLoading(true)
      const response = await cohere.generate({ prompt })
      const generations = response.generations
      const generatedMsg = generations[getRandomNumber(generations.length)].text
      setMessage(`${removeEndingPhrase(generatedMsg)}`)
    }
    
    prompt && generate().then(() => setLoading(false))
  }, [prompt])

  return (
    <article className='p-4 w-full h-full bg-transparent border border-black/20 rounded-md'>
      <Text size='sm' copy>
        {loading ? 'Loading...' : message ? `${message}` : 'Your generated message goes here.'}
      </Text>
    </article>
  )
}
