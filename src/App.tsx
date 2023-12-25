import { FaGithub } from 'react-icons/fa6'
import Text, { TextLink } from './components/text.tsx'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Generator from './Generator.tsx'
import { useState } from 'react'

const theOccassion = [
  { label: 'Christmas' },
  { label: 'New Year' },
  { label: 'Christmas & New Year' },
  { label: 'Birthday' },
  { label: 'Halloween' },
  { label: 'Easter' },
  { label: 'Thanksgiving' },
  { label: 'Lent' },
  { label: 'Sunday' },
  { label: 'Graduation' },
  { label: 'Matriculation' },
]

const theRelationship = [
  { label: 'Brother' },
  { label: 'Sister' },
  { label: 'Uncle' },
  { label: 'Aunt' },
  { label: 'Parent' },
  { label: 'Friend' },
  { label: 'Best Friend' },
  { label: 'Teacher' },
  { label: 'Enemy' },
]

function App() {
  const [prompt, setPrompt] = useState<string>('')

  const createPrompt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const elements = e.currentTarget
    const form = new FormData(elements)
    const occassion = form.get('occassion')
    const relationship = form.get('relationship')

    setPrompt(`Generate a [${occassion}] message for your [${relationship}] [name] from the heart.`)
  }

  return (
    <div className='min-h-screen flex flex-col w-full'>
      <header className='fixed w-full px-10 py-4 border-b border-gray-300/20'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Text size='xl'>Cheerbot</Text>
            <Text size='xs'>Right words for your messages</Text>
          </div>
          <div className='w-12 h-12 flex justify-center items-center border border-gray-300/20 rounded-lg duration-300 hover:scale-110 hover:shadow-lg'>
            <FaGithub className='text-3xl' />
          </div>
        </div>
      </header>
      <main className='grow w-full p-10 mt-[5.3rem] bg-white/50 flex flex-col'>
        <div className='grid xl:grid-cols-12 lg:grid-cols-10 gap-20 grow w-full'>
          <form onSubmit={createPrompt} className='col-span-full lg:col-span-4 xl:col-span-5 h-full flex flex-col justify-start items-start gap-8'>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              name='occassion'
              options={theOccassion}
              sx={{ width: '100%' }}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label='Occassion'
                  helperText='Please select an occassion'
                  color='warning'
                />
              )}
            />
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              name='relationship'
              options={theRelationship}
              sx={{ width: '100%' }}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label='Relationship'
                  helperText='Please select relationship between you and the recipient'
                  color='warning'
                />
              )}
            />
            <Button type='submit' sx={{ width: '100%' }} variant='contained'>
              Generate
            </Button>
          </form>
          <div className='col-span-full md:col-span-7'>
            <Generator prompt={prompt} />
          </div>
        </div>
      </main>
      <footer className='w-full px-10 py-4 border-t border-gray-300/20'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Text size='xs'>Made with ❤️ by</Text>
            <TextLink to='https://github.com/mmesomasaint'>
              Mmesoma Saint
            </TextLink>
          </div>
          <div className=''>
            <Text size='xs'>&copy; 2023</Text>
            <Text size='sm'>Cheerbot</Text>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
