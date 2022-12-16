import './styles/main.css'
import { MagnifyingGlassPlus}  from 'phosphor-react'

import logoImg from './assets/logo-esports.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="imagem de logo" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16 '>
        <a className='relative rounded-lg' href=''>
            <img src="/game1.png" alt="" />

            <div className='w-full pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
        </a>
        <a className='relative rounded-lg' href=''>
            <img src="/game1.png" alt="" />

            <div className='w-full pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
        </a>

        <a className='relative rounded-lg' href=''>
            <img src="/game1.png" alt="" />

            <div className='w-full pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
        </a>
        <a className='relative rounded-lg' href=''>
            <img src="/game1.png" alt="" />

            <div className='w-full pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
        </a>
        <a className='relative rounded-lg' href=''>
            <img src="/game1.png" alt="" />

            <div className='w-full pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
        </a>
        <a className='relative rounded-lg' href=''>
            <img src="/game1.png" alt="" />

            <div className='w-full pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          
          <button className='py-3 px-7 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default App
