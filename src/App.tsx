import { FaGithub } from 'react-icons/fa6'
import Text, { TextLink } from './components/text.tsx'

function App() {
  return (
    <div className='min-h-screen flex flex-col w-full'>
      <header className='fixed w-full px-10 py-4 border-b border-gray-300/40'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Text size='xl'>Cheerbot</Text>
            <Text size='xs'>Right words for your messages</Text>
          </div>
          <div className='w-12 h-12 flex justify-center items-center border border-gray-300/40 rounded-lg duration-300 hover:scale-110 hover:shadow-lg'>
            <FaGithub className='text-3xl' />
          </div>
        </div>
      </header>
      <main className='grow p-10 mt-[5.3rem] h-full'>
        <div className='grid xl:grid-cols-12 lg:grid-cols-10 gap-10 h-full'>
          <div className='col-span-full lg:col-span-4 xl:col-span-6 rounded-lg border border-white/50 h-full'>
            h
          </div>
        </div>
      </main>
      <footer className='w-full px-10 py-4 border-t border-gray-300/40'>
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
