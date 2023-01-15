export function GameBanner() {
    return(
        <a className='relative rounded-lg' href=''>
        <img src="/game1.png" alt="" />

        <div className='w-full pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>League of Legends</strong>
          <span className='text-zinc-300 text-sm block'>4 anuncios</span>
        </div>
    </a>
    );
}