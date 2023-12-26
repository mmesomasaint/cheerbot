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

  useEffect(() => {
    setLoading(true)

    const generate = async () => {
      const response = await cohere.generate({ prompt })
      const generations = response.generations
      setMessage(`${generations[0].text}`)
    }
    
    prompt && generate()
    setLoading(false)
  }, [prompt])

  return (
    <article className='p-4 w-full h-full bg-transparent border border-black/20 rounded-md'>
      <Text size='sm' copy>
        {loading ? 'Loading...' : message ? `${message}` : 'Something went wrong. Please try again.'}
      </Text>
    </article>
  )
}
