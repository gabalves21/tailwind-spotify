import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward, Repeat, Shuffle, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
            <div className='w-3 h-3 bg-green-500 rounded-full'/>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <HomeIcon/>
              Home
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Search/>
              Search
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Library/> 
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniversário</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Wedding</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock Pesado</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Red Hot Chili Peppers</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sad hits</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funkmaster</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Classic BR</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>RockNRoll</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Marília Medonça</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Pagodinho</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Underground 90'</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1 hover:bg-black/80'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1 hover:bg-black/80'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-4xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'> 
              <img src="/capa.png" width={104} height={104} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong>Unlimited Love</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play fill="bg-black"  />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
              <img src="/capa.png" width={104} height={104} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong>Unlimited Love</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play fill="bg-black"  />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
              <img src="/capa.png" width={104} height={104} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong>Unlimited Love</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play fill="bg-black"  />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
              <img src="/capa.png" width={104} height={104} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong>Unlimited Love</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play fill="bg-black"  />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
              <img src="/capa.png" width={104} height={104} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong>Unlimited Love</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play fill="bg-black"  />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
              <img src="/capa.png" width={104} height={104} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong>Unlimited Love</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play fill="bg-black"  />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Gabriel Alves</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="/capa.png" className='w-full' width={120} height={120} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Red Hot Chili Peppers, Foo Fighters, Offspring and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="/capa.png" className='w-full' width={120} height={120} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Red Hot Chili Peppers, Foo Fighters, Offspring and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="/capa.png" className='w-full' width={120} height={120} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Red Hot Chili Peppers, Foo Fighters, Offspring and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="/capa.png" className='w-full' width={120} height={120} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Red Hot Chili Peppers, Foo Fighters, Offspring and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="/capa.png" className='w-full' width={120} height={120} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Red Hot Chili Peppers, Foo Fighters, Offspring and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <img src="/capa.png" width={56} height={56} alt="Capa do album Unlimited Love da banda Red Hot Chili Peppers" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Black Summer</strong>
            <span className='text-xs text-zinc-400'>Red Hot Chili Peppers</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle fill="bg-zinc-100" size={20} className='text-zinc-200'/>
            <SkipBack fill="bg-zinc-100" size={20} className='text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black'>
                <Play fill="bg-black"  />
            </button>
            <SkipForward fill="bg-zinc-100" size={20} className='text-zinc-200'/>
            <Repeat fill="bg-zinc-100" size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-500'>3:52</span>
          </div>
        </div>
        <div className='flex imtes-center gap-4'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  )
}
