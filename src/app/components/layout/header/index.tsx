'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import HeaderLink from './Navigation/HeaderLink'
import { headerData } from './Navigation/Menudata'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <>
      <header className={`fixed top-0 z-50 w-full`}>
        <div className='container p-3'>
          <nav
            className={`flex items-center py-3 px-4 justify-between ${
              sticky
                ? ' rounded-full shadow-sm bg-white/50 dark:bg-dark_black/50 backdrop-blur-lg'
                : null
            } `}>
            <div className='flex items-center'>
              <Logo />
            </div>
            <div className='hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-3xl py-3 px-1'>
              <ul className='flex gap-0 2xl:gap-1.5'>
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-1 xl:gap-4'>
              
              {/* ---------------------Get Started Button-------------------- */}
              <Link
                href='/contact'
                className='hidden sm:flex group bg-purple_blue text-white font-medium flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue'>
                <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-9'>
                 Get Started
                </span>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='transform translate-x-2 transition-transform duration-200 ease-in-out group-hover:-translate-x-24 group-hover:rotate-45'>
                  <rect
                    width='40'
                    height='40'
                    rx='20'
                    className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
                  />
                  <path
                    d='M15.832 15.3334H24.1654V23.6667'
                    className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                    strokeWidth='1.66667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.832 23.6667L24.1654 15.3334'
                    className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                    strokeWidth='1.66667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
              {/* ---------------------Light/Dark Mode button-------------------- */}
              <ThemeToggler />
              <div className='hidden max-lg:flex'>
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeMiterlimit='10'
                      strokeWidth='1.5'
                      d='M4.5 12h15m-15 5.77h15M4.5 6.23h15'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* ------------------------- Mobile sidebar starts ------------------------- */}
        {sidebarOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark_black shadow-lg transform transition-transform duration-300 max-w-xs ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold'>Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label='Close mobile menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='p-4'>
            <ul className='flex flex-col'>
              {headerData.map((item, index) => (
                <MobileHeader key={index} item={item} />
              ))}
              <div className='flex flex-col items-center gap-3 px-2 mt-2'>
                <Link
                  href='#book-call'
                  className='w-auto bg-purple_blue text-white font-medium flex flex-row items-center justify-center gap-2 py-2 px-5 rounded-full border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue'>
                  <span>Get Started</span>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='bg-white/20 rounded-full rotate-315'>
                    <path
                      d='M5 12H19M19 12L12 5M19 12L12 19'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header