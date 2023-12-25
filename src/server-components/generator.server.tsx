import { CohereClient } from 'cohere-ai'
import { Suspense } from 'react'
import Text from '../components/text.tsx'

type PropTypes = {
  prompt: string
}

const cohere = new CohereClient({
  token: 'kTgRTN0S3ZJS4674O1WF3hkVZbyI2aR3rGjGAWGo',
})

export default async function Generate({ prompt }: PropTypes) {
  const generate = await cohere.generate({
    prompt: prompt,
  })

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <article className='p-4 w-full h-full bg-transparent border border-black/20 rounded-md'>
        <Text size='xs'>
          {generate ? `${generate}` : 'Something went wrong. Please try again.'}
        </Text>
      </article>
    </Suspense>
  )
}
