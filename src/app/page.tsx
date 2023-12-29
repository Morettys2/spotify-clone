import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react'

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
          <h2 className='text-semibold text-3xl mt-10'>Made for João Pedro Moretti</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'></div>
          
          <div className='bg-white/5 p-3 rounded flex flex-row'>
          <a href='' className='bg-white/5 p-3 rounded flex flex-row'>
  <Image src="/album.jpg" className='w-60 p-3' width={120} height={120} alt="Capa do album post malone" />
</a>

<a href='' className='bg-white/5 p-3 rounded flex flex-row'>
  <Image src="/album.jpg" className='w-60 p-3' width={120} height={120} alt="Capa do album post malone" />
</a>

<a href='' className='bg-white/5 p-3 rounded flex flex-row'>
  <Image src="/album.jpg" className='w-60 p-3' width={120} height={120} alt="Capa do album post malone" />
</a>

<a href='' className='bg-white/5 p-3 rounded flex flex-row'>
  <Image src="/album.jpg" className='w-60 p-3' width={120} height={120} alt="Capa do album post malone" />
</a>

<a href='' className='bg-white/5 p-3 rounded flex flex-row'>
  <Image src="/album.jpg" className='w-60 p-3' width={120} height={120} alt="Capa do album post malone" />
</a>

          </div>
        </main>
      </div>
      <div>
        <footer className='bg-zinc-800 border-zic-700 p-6'>
          footer
        </footer>
      </div>
    </div>
  )
}
