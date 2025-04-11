"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { Menu, X } from 'lucide-react'
import { useScroll } from '@/contexts/scroll'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollTo } = useScroll()
  return (
    <header className='sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm'>
      <div className='container flex justify-between items-center py-4 px-4 md:px-6'>
        <Link href='/' className='cursor-pointer'>
          <Image
            src="/logogd-nobg.png"
            alt='Silhueita de um guaiamum na cor preta, à direita o letreiro Guaiamum Digital'
            width={200}
            height={75}
            className='w-40 md:w-48 lg:w-56'
          />  
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden md:block'>
          <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink onClick={() => scrollTo('start')} className={navigationMenuTriggerStyle()}>
                  GuaiaDelivery App
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink onClick={() => scrollTo('contact')} className={navigationMenuTriggerStyle()}>
                  Contato
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2 rounded-md hover:bg-gray-100'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white border-t'>
          <div className='container py-4 px-4 flex flex-col gap-2'>
            <p 
              className='w-full px-4 py-2 hover:bg-gray-50 rounded-md'
                onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollTo('start')
                }}
            >
              GuaiaDelivery App
            </p>
            <p 
              className='w-full px-4 py-2 hover:bg-gray-50 rounded-md'
                          onClick={() => {
                              setIsMobileMenuOpen(false)
                              scrollTo('contact')
                          }}
            >
              Contato
            </p>
          </div>
        </div>
      )}
    </header>
  )
}