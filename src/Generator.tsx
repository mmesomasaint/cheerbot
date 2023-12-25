import { CohereClient } from 'cohere-ai'
import { Suspense, useEffect, useState } from 'react'
import Text from './components/text.tsx'

type PropTypes = {
  prompt: string
}

const cohere = new CohereClient({
  token: 'kTgRTN0S3ZJS4674O1WF3hkVZbyI2aR3rGjGAWGo',
})

export default function Generator({ prompt }: PropTypes) {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const generate = async () => {
      const response = await cohere.generate({ prompt })
      setMessage(`${response}`)
    }

    generate()
  }, [prompt])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <article className='p-4 w-full h-full bg-transparent border border-black/20 rounded-md'>
        <Text size='xs'>
          {message ? `${message}` : 'Something went wrong. Please try again.'}
        </Text>
      </article>
    </Suspense>
  )
}
