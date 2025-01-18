/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react'

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }

        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)

        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-[#FBEBB5]">
            <div className="flex items-center justify-between">
                {/* Center Section (Navigation Links) */}
                <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
                    <NavLinks />
                </div>

                {/* Right Section (Icons) */}
                <div className="flex mr-3 items-center space-x-5">
                    <NavIcons />
                    {/* Hamburger Menu - Visible only on mobile */}
                    <button className="md:hidden p-2" onClick={toggleMenu}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="pt-4 pb-2 space-y-2 text-center">
                    <NavLinks mobile />
                </div>
            </div>
        </nav>
    )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
    const linkClass = mobile
        ? "block py-2 text-sm font-medium"
        : "text-sm font-medium text-center"

    return (
        <>
            <Link className={linkClass} href="/">
                <p>Home</p>
            </Link>
            <Link className={linkClass} href="/Shop">
                <p>Shop</p>
            </Link>
            <Link className={linkClass} href="/About">
                <p>About</p>
            </Link>
            <Link className={linkClass} href="/Contact">
                <p>Contact</p>
            </Link>
        </>
    )
}

function NavIcons() {
    return (
        <>
            <button className="p-2">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
            </button>
            <button className="p-2">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </button>
            <button className="p-2">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
            </button>
            <button className="p-2">
                <a href="/Cart"><ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span></a>
            </button>
        </>
    )
}
export default NavBar; 
