import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic, LayoutList, Laptop2, Volume, Maximize2, } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex item-center gap-2'>
            <div className='w-3 h-3 bg-white  rounded-full' />
            <div className='w-3 h-3 bg-white  rounded-full' />
            <div className='w-3 h-3 bg-white  rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>Sertanejo</a>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>Eletronica</a>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>White Girls</a>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>Funk</a>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>Pagode</a>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 1</a>
            <a href='' className='tex-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 2</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h2 className='text-semibold text-2xl mt-10'>Good Afernoon</h2>

          <div className='grid grid-cols-3 gap-4 m-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album post malone" />
              <strong>Hollywoods Bleeding</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album post malone" />
              <strong>Hollywoods Bleeding</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album post malone" />
              <strong>Hollywoods Bleeding</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album post malone" />
              <strong>Hollywoods Bleeding</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album post malone" />
              <strong>Hollywoods Bleeding</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album post malone" />
              <strong>Hollywoods Bleeding</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
          </div>
          <h2 className='text-semibold text-2xl mt-10'>Made for João Pedro Moretti</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'></div>

          <div className='bg-white/5 p-3 rounded flex hover:bg-yellow-50/10 flex-row justify-between'>

            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full p-3' width={120} height={120} alt="Capa do album post malone" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Post Malone</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full p-3' width={120} height={120} alt="Capa do album post malone" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-400'>Post Malone</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full p-3' width={120} height={120} alt="Capa do album post malone" />
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-400'>Post Malone</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full p-3' width={120} height={120} alt="Capa do album post malone" />
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-400'>Post Malone</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full p-3' width={120} height={120} alt="Capa do album post malone" />
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-400'>Post Malone</span>
            </a>

          </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-zic-700 p-6 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image src="/album.jpg" width={56} height={56} alt="Capa do album post malone" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Chimal</strong>
            <span className='text-xs text-zinc-400'>Post Malone</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white/20 text-black'>
              <Play size={20} className='text-zinc-200' />
            </button>

            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>

          <div className='flex items-center gap-2 '>
          </div>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='bg-zinc-200 w-40 h-1 rounded-full'>
            </div>
            <span className='text-xs text-zinc-400'>0:31</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Mic size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
          </div>
          <Maximize2 size={20} />
          
        </div>
      </footer>
    </div>
  )
}
