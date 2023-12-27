import Text, { TextLink } from './components/text.tsx'
import Generator from './Generator.tsx'
import { Button, Autocomplete, TextField } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import { useState } from 'react'

const theOccassion = [
  { label: 'Christmas' },
  { label: 'Boxing Day' },
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
  const [formData, setFormData] = useState<{
    occassion: string | null
    relationship: string | null
  }>({
    occassion: null,
    relationship: null,
  })

  const setOccassion = (occassion: string) =>
    setFormData({ ...formData, occassion })
  const setRelationship = (relationship: string) =>
    setFormData({ ...formData, relationship })

  const createPrompt = () => {
    setPrompt(
      `Generate a short '${formData.occassion}' message for me. This message should be from me to my '${formData.relationship}' called [recipients-name]. This message should feel natural and from the heart. Please do not ask me your usual questions like 'please tell me if you want anything more?' or 'do you want me to generate more?'. I want this message to be unique and special.`
    )
  }

  return (
    <div className='min-h-screen flex flex-col w-full'>
      <header className='z-30 fixed w-full md:px-10 px-5 py-4 bg-[#242424]'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Text size='xl' faded>
              Cheerbot
            </Text>
            <Text size='xs' faded>
              Right words for your messages
            </Text>
          </div>
          <div className='w-12 h-12 flex justify-center items-center border border-gray-300/20 rounded-lg duration-300 hover:scale-110 hover:shadow-lg'>
            <GitHub sx={{fontSize: 38}} />
          </div>
        </div>
      </header>
      <main className='grow w-full md:p-10 px-5 py-16 mt-[5.3rem] bg-white flex flex-col'>
        <div className='grid xl:grid-cols-12 md:grid-cols-10 lg:gap-20 md:gap-10 gap-20 grow w-full'>
          <div className='col-span-full md:col-span-4 xl:col-span-5 h-full flex flex-col justify-start items-start md:gap-8 gap-4'>
            <Autocomplete
              disablePortal
              id='occassion-box'
              onChange={(_: any, newValue: any) => setOccassion(newValue.label)}
              options={theOccassion}
              sx={{ width: '100%' }}
              isOptionEqualToValue={(option, value) => option === value}
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
              id='relationship-box'
              value={formData.relationship}
              onChange={(_: any, newValue: any) =>
                setRelationship(newValue.label)
              }
              options={theRelationship}
              sx={{ width: '100%' }}
              isOptionEqualToValue={(option, value) => option.label === value}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label='Relationship'
                  helperText='Please select relationship between you and the recipient'
                  color='warning'
                />
              )}
            />
            <Button
              type='button'
              disabled={!(formData.occassion && formData.relationship)}
              onClick={createPrompt}
              sx={{ width: '100%', backgroundColor: '#242424' }}
              variant='contained'
            >
              Generate
            </Button>
          </div>
          <div className='col-span-full xl:col-span-7 md:col-span-6'>
            <Generator prompt={prompt} />
          </div>
        </div>
      </main>
      <footer className='w-full md:px-10 px-5 py-4 border-t border-gray-300/20'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Text size='xs' faded>
              Made with ❤️ by
            </Text>
            <TextLink to='https://github.com/mmesomasaint'>
              Mmesoma Saint
            </TextLink>
          </div>
          <div className=''>
            <Text size='xs' faded>
              &copy; 2023
            </Text>
            <Text size='sm' faded>
              Cheerbot
            </Text>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
