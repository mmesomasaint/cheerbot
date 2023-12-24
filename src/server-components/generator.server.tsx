import { CohereClient } from 'cohere-ai'

const cohere = new CohereClient({
  token: 'kTgRTN0S3ZJS4674O1WF3hkVZbyI2aR3rGjGAWGo',
})

export default async function Generator({ prompt }: { prompt: string }) {
  const generate = await cohere.generate({
    prompt: prompt,
  })

  return (
    <textarea
      placeholder='Your generated text...'
      readOnly
      title='Your generated text'
      value={`${generate}`}
      className='p-4 placeholder:text-black/60 w-full h-full bg-transparent border border-black/20 rounded-md'
    />
  )
}
