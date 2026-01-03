'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import { SuccessfullLogin } from '@/components/Auth/AuthDialog/SuccessfulLogin'
import { FailedLogin } from '@/components/Auth/AuthDialog/FailedLogin'
import { UserRegistered } from '@/components/Auth/AuthDialog/UserRegistered'
import AuthDialogContext from '@/app/context/AuthDialogContext'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const { theme, setTheme } = useTheme()

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => setSticky(window.scrollY >= 50)

  const handleClickOutside = (event: MouseEvent) => {
    if (signInRef.current && !signInRef.current.contains(event.target as Node)) setIsSignInOpen(false)
    if (signUpRef.current && !signUpRef.current.contains(event.target as Node)) setIsSignUpOpen(false)
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && navbarOpen) setNavbarOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    document.body.style.overflow = isSignInOpen || isSignUpOpen || navbarOpen ? 'hidden' : ''
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  const authDialog = useContext(AuthDialogContext)

  return (
<header
  className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
    sticky ? 'shadow-lg h-[72px]' : 'bg-transparent h-[72px]'
  }`}
>
  {/* Overlay for readability */}
  <div
    className={`absolute inset-0 pointer-events-none ${
      sticky ? 'bg-black/10' : ''
    }`}
  ></div>

  <div className='relative container mx-auto max-w-6xl flex items-center justify-between py-3 px-6'>
    <Logo />
    <nav className='hidden lg:flex grow items-center justify-center gap-6'>
      {headerData.map((item, index) => (
        <HeaderLink key={index} item={item} />
      ))}
    </nav>
    <div className='flex items-center gap-3'>
      {/* Theme Toggle */}
      <button
        aria-label='Toggle theme'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='flex h-8 w-8 items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300'
      >
        <Icon icon='mdi:theme-light-dark' className='h-6 w-6' />
      </button>

      {/* Sign In */}
      <Link
        href='#'
        className='hidden lg:block border border-white bg-black/50 text-white px-4 py-1.5 rounded-md hover:bg-white hover:text-red-500 transition-all duration-300'
        onClick={() => setIsSignInOpen(true)}
      >
        Sign In
      </Link>

      {/* Sign Up */}
      <Link
        href='#'
        className='hidden lg:block bg-white text-red-500 px-4 py-1.5 rounded-md hover:bg-red-600 hover:text-white border border-white transition-all duration-300'
        onClick={() => setIsSignUpOpen(true)}
      >
        Sign Up
      </Link>

      {/* Mobile Menu */}
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className='block lg:hidden p-2 rounded-lg'
        aria-label='Toggle mobile menu'
      >
        <span className='block w-6 h-0.5 bg-white mb-1'></span>
        <span className='block w-6 h-0.5 bg-white mb-1'></span>
        <span className='block w-6 h-0.5 bg-white'></span>
      </button>
    </div>
  </div>

  {/* Gradient background */}
  {sticky && (
    <div className='absolute inset-0 bg-gradient animate-gradient-x -z-10'></div>
  )}

  <style jsx>{`
    @keyframes gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .bg-gradient {
      background: linear-gradient(90deg, #f8f8f8, #d1d1d1, #f8f8f8);
      background-size: 300% 100%;
      animation: gradient-x 10s ease infinite;
    }
  `}</style>
</header>


  )
}

export default Header
