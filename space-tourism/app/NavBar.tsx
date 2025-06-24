import Link from 'next/link';
import { CircleStarSVG, StraightLineSVG } from './components/SvgImg';
export default function NavBar() {
  return (
    <nav className="relative lg:mt-5 lg:w-fill lg:flex lg:items-center lg:justify-between py-8 text-white sm:grid md:grid md:grid-cols-[1fr_auto] md:gap-1 sm:gap-4">
      <div className='ml-15 lg:w-[50px] lg:h-[50px] flex items-center justify-center md:w-[45px] md:h-[45px] md:flex md:items-center md:justify-center '>
      <CircleStarSVG/>
      </div>
      <div className='lg:visible absolute lg:left-[300px] lg:flex lg:items-center lg:justify-center md:invisible sm:invisible'>
      <StraightLineSVG />
      </div>
      <div className="lg:w-2xl lg:flex lg:space-x-4 lg:justify-center lg:items-center lg:py-6 bg-gradient-to-r bg-slate-300 backdrop-blur-md opacity-90 text-slate-100 md:space-x-1 md:w-2xl md:flex md:justify-center md:items-center sm:space-x-2 sm:w-full sm:flex sm:justify-center sm:items-center md:py-3">
        <Link href="/" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white md:text-xl'>00 Home</Link>
        <Link href="/destination" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white md:text-xl'>01 Destinations</Link>
        <Link href="/crew" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white md:text-xl'>02 Crew</Link>
        <Link href="/technologies" className='text-white font-se px-1.5 font-serif hover:text-white hover:font-bold focus:border-b-2 focus:border-b-white md:text-xl'>03 Technology</Link>
      </div>
    </nav>
  );
}

