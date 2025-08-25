'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Linkedin, Github, Send, Phone } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using a simple mailto approach for now
      // In production, you'd want to use a service like EmailJS, Formspree, or your own API
      const mailtoLink = `mailto:alliabhishek138@gmail.com?subject=GAINAI.ONLINE Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
      
      window.open(mailtoLink, '_blank')
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'alliabhishek138@gmail.com',
      href: 'mailto:alliabhishek138@gmail.com',
      color: 'bg-primary-100 text-primary-600 hover:bg-primary-200'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 8010350307',
      href: 'https://wa.me/918010350307?text=Hi! I\'d like to discuss AI automation services.',
      color: 'bg-accent-100 text-accent-600 hover:bg-accent-200'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8010350307',
      href: 'tel:+918010350307',
      color: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Abhishek Alli',
      href: 'https://www.linkedin.com/in/abhishek-alli',
      color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Abhishek-Alli',
      href: 'https://github.com/Abhishek-Alli',
      color: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Talk About Your AI Automation Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI and automation? Get in touch with me to discuss your requirements and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm passionate about helping businesses leverage AI and automation to streamline their operations. Whether you need custom workflows, process optimization, or AI integration, let's discuss how I can help you achieve your goals.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${method.color}`}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{method.title}</p>
                    <p className="text-gray-700">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Response */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
              <p className="text-sm text-gray-600">
                I typically respond within 2-4 hours during business hours. For urgent inquiries, feel free to call or WhatsApp me directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your AI automation needs, project requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      ✗ There was an error sending your message. Please try again or contact me directly via email.
                    </p>
                  </div>
                )}
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  By sending this message, you agree to our{' '}
                  <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
