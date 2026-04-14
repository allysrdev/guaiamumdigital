"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useScroll } from '@/contexts/scroll'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollTo } = useScroll()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 border-b border-black/5' : 'bg-transparent py-6'
            }`}
        >
            <div className='container mx-auto max-w-7xl flex justify-between items-center px-6 md:px-12'>
                <Link href='/' className='cursor-pointer group'>
                    <Image
                        src="/logogd-nobg.png"
                        alt='Guaiamum Digital Logo'
                        width={180}
                        height={60}
                        className='w-32 md:w-40 transition-opacity duration-300 group-hover:opacity-80'
                    />  
                </Link>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center gap-10'>
                    <button 
                        onClick={() => scrollTo('start')} 
                        className="text-sm font-medium tracking-tight text-foreground/60 hover:text-foreground transition-colors"
                    >
                        Início
                    </button>
                    <button 
                        onClick={() => scrollTo('services')} 
                        className="text-sm font-medium tracking-tight text-foreground/60 hover:text-foreground transition-colors"
                    >
                        Serviços
                    </button>
                    <button 
                        onClick={() => scrollTo('process')} 
                        className="text-sm font-medium tracking-tight text-foreground/60 hover:text-foreground transition-colors"
                    >
                        Processo
                    </button>
                    <button 
                        onClick={() => scrollTo('contact')} 
                        className="ml-4 px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-semibold tracking-tight hover:scale-105 transition-transform active:scale-95"
                    >
                        Consultoria
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden p-2 text-foreground'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='absolute top-full left-0 w-full bg-white dark:bg-black border-b border-black/5 md:hidden h-screen overflow-hidden'
                    >
                        <div className='flex flex-col items-center gap-8 pt-20 px-6'>
                            <button 
                                className='text-2xl font-medium'
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    scrollTo('start')
                                }}
                            >
                                Início
                            </button>
                            <button 
                                className='text-2xl font-medium'
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    scrollTo('services')
                                }}
                            >
                                Serviços
                            </button>
                            <button 
                                className='text-2xl font-medium'
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    scrollTo('process')
                                }}
                            >
                                Processo
                            </button>
                            <button 
                                className='mt-4 w-full py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl text-lg font-bold'
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    scrollTo('contact')
                                }}
                            >
                                Iniciar Projeto
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
