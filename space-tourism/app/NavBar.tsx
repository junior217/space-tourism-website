import Link from 'next/link';
import { CircleStarSVG, StraightLineSVG } from './components/SvgImg';
export default function NavBar() {
  return (
    <nav className="relative mt-5 w-fill flex items-center justify-between py-8 text-white">
      <div className='ml-15 w-[50px] h-[50px] flex items-center justify-center'>
      <CircleStarSVG/>
      </div>
      <div className='absolute left-[300px] flex items-center justify-center lg:hidden'>
      <StraightLineSVG />
      </div>
      <div className="w-2xl flex space-x-4 justify-center items-center py-6 bg-gradient-to-r bg-slate-300 backdrop-blur-md opacity-90 text-slate-100">
        <Link href="/" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white'>00 Home</Link>
        <Link href="/destination" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white'>01 Destinations</Link>
        <Link href="/crew" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white'>02 Crew</Link>
        <Link href="/technologies" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white'>03 Technology</Link>
      </div>
    </nav>
  );
}

