'use client'

import { ArrowRight, Zap, Brain, TrendingUp } from 'lucide-react'

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI Consultancy &{' '}
              <span className="text-gradient">Automation</span>{' '}
              Services
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Hi, I'm Abhishek Alli. I help companies automate tasks, integrate AI, and streamline business workflows using n8n and custom AI solutions. Passionate about data analysis and process optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-flex items-center"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-secondary"
              >
                View My Work
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                <span className="text-sm text-gray-600">500+ Workflows Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-gray-600">50+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Workflow Engine</h3>
                    <p className="text-sm text-gray-500">Processing...</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Data extraction completed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">AI analysis in progress</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-400">Report generation</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent-50 rounded-xl p-4 border border-accent-200">
                <TrendingUp className="w-6 h-6 text-accent-600" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-50 rounded-xl p-4 border border-primary-200">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
