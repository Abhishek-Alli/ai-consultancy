'use client'

import { ExternalLink, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react'

const ProjectsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const showProjectDetails = (projectTitle: string) => {
    alert(`Project Details: ${projectTitle}\n\nThis would show comprehensive project information including:\n- Technical architecture\n- Implementation timeline\n- Team composition\n- Challenges overcome\n- Results and metrics\n- Client testimonials\n- ROI analysis`)
  }

  const downloadCaseStudies = () => {
    alert('Case Studies Download\n\nThis would provide downloadable PDF case studies including:\n- Detailed project overviews\n- Technical specifications\n- Results and metrics\n- Client testimonials\n- Implementation insights\n\nFor now, please contact me directly for detailed case studies.')
  }

  const projects = [
    {
      title: 'E-commerce Automation Suite',
      description: 'Comprehensive automation solution for a leading e-commerce platform, including inventory management, customer support, and marketing automation.',
      industry: 'E-commerce',
      duration: '3 months',
      team: '5 people',
      results: ['40% reduction in manual tasks', 'Improved customer response time by 60%', 'Increased sales conversion by 25%'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Healthcare Data Processing',
      description: 'AI-powered workflow system for processing and analyzing patient data, ensuring HIPAA compliance and improving diagnostic accuracy.',
      industry: 'Healthcare',
      duration: '4 months',
      team: '3 people',
      results: ['99.9% data accuracy', 'Reduced processing time by 70%', 'Improved diagnostic speed by 50%'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Financial Services Automation',
      description: 'End-to-end automation for loan processing, risk assessment, and customer onboarding using advanced AI algorithms.',
      industry: 'Financial Services',
      duration: '5 months',
      team: '6 people',
      results: ['80% faster loan processing', 'Reduced operational costs by 35%', 'Improved customer satisfaction by 40%'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Manufacturing Process Optimization',
      description: 'Smart manufacturing workflow that monitors production lines, predicts maintenance needs, and optimizes resource allocation.',
      industry: 'Manufacturing',
      duration: '6 months',
      team: '4 people',
      results: ['Reduced downtime by 45%', 'Increased production efficiency by 30%', 'Saved $2M annually'],
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how I've helped businesses across various industries transform their operations through AI and automation. Each project demonstrates my commitment to delivering measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                {/* Industry Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium mb-4">
                  {project.industry}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">{project.duration}</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-sm text-gray-500">Team Size</p>
                    <p className="font-semibold text-gray-900">{project.team}</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-sm text-gray-500">ROI</p>
                    <p className="font-semibold text-gray-900">High</p>
                  </div>
                </div>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Button */}
                <button 
                  onClick={() => showProjectDetails(project.title)}
                  className="btn-secondary w-full inline-flex items-center justify-center"
                >
                  View More Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your automation needs and create a custom solution that drives real business results. I'm committed to helping you achieve your automation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Start Project Discussion
              </button>
              <button 
                onClick={downloadCaseStudies}
                className="btn-secondary"
              >
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
