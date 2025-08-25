'use client'

import { Workflow, Zap, Brain, BarChart3, Settings, Users } from 'lucide-react'

const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Workflow,
      title: 'AI-Powered Workflows',
      description: 'Design and implement intelligent automation workflows that adapt and learn from your business processes.',
      features: ['Machine Learning Integration', 'Predictive Analytics', 'Smart Decision Making']
    },
    {
      icon: Zap,
      title: 'n8n Workflow Automation',
      description: 'Build robust, scalable automation workflows using n8n to connect your tools and streamline operations.',
      features: ['API Integrations', 'Custom Triggers', 'Error Handling']
    },
    {
      icon: Brain,
      title: 'Custom AI Tool Integration',
      description: 'Seamlessly integrate cutting-edge AI tools and APIs into your existing business infrastructure.',
      features: ['OpenAI Integration', 'Custom Models', 'Real-time Processing']
    },
    {
      icon: BarChart3,
      title: 'Business Process Optimization',
      description: 'Analyze and optimize your business processes for maximum efficiency and cost savings.',
      features: ['Process Mapping', 'Performance Metrics', 'Continuous Improvement']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Connect disparate systems and create unified workflows that eliminate manual data entry.',
      features: ['API Development', 'Data Synchronization', 'Webhook Management']
    },
    {
      icon: Users,
      title: 'Team Training & Support',
      description: 'Comprehensive training and ongoing support to ensure your team maximizes automation benefits.',
      features: ['Workshop Sessions', 'Documentation', '24/7 Support']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive AI consultancy and automation services to transform your business operations. Each service is tailored to your specific needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how my AI consultancy services can help you automate, optimize, and scale your operations. I'm passionate about helping businesses succeed through intelligent automation.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
