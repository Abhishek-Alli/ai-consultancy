'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Workflows', href: '#workflows' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
