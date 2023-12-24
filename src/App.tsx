import { FaGithub } from 'react-icons/fa6'
import Text from './components/text.tsx'

function App() {
  return (
    <>
      <header className='px-10 py-4 border-b border-gray-300/70'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Text size='xl'>Cheerbot</Text>
            <Text size='sm'>Right words for your messages</Text>
          </div>
          <div className='w-12 h-12 flex justify-center items-center border border-gray-300/70 rounded-lg duration-300 hover:scale-110 hover:shadow-lg'>
            <FaGithub className='text-3xl' />
          </div>
        </div>
      </header>
    </>
  )
}

export default App
