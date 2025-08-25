'use client'

import { Brain, Mail, MessageCircle, Linkedin, Github, ArrowUp } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Workflows', href: '#workflows' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'AI-Powered Workflows',
    'n8n Automation',
    'Business Process Optimization',
    'Custom AI Integration',
    'System Integration',
    'Team Training'
  ]

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:alliabhishek138@gmail.com',
      label: 'Email',
      color: 'hover:bg-primary-100 hover:text-primary-600'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/918010350307?text=Hi! I\'d like to discuss AI automation services.',
      label: 'WhatsApp',
      color: 'hover:bg-accent-100 hover:text-accent-600'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/abhishek-alli',
      label: 'LinkedIn',
      color: 'hover:bg-blue-100 hover:text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/Abhishek-Alli',
      label: 'GitHub',
      color: 'hover:bg-gray-100 hover:text-gray-600'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AI Consultancy</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                I help companies automate tasks, integrate AI, and streamline business workflows using n8n and custom AI solutions. Passionate about data analysis and process optimization.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Abhishek Alli - AI Consultancy. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
      </button>
    </footer>
  )
}

export default Footer
