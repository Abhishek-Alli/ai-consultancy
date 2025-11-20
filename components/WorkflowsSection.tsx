'use client'

import { Download, FileJson, ArrowRight, Bot, Share2 } from 'lucide-react'

const WorkflowsSection = () => {
  
  // 1. ADD YOUR WORKFLOWS HERE
  const workflows = [
    {
      id: 1,
      title: 'Email Marketing Campaign',
      description: 'An n8n workflow that scrapes video URLs from TikTok profiles using generic HTML nodes. perfect for content aggregation.',
      tags: ['n8n', 'Scraping', 'Automation'],
      // 2. Make sure your JSON file is in the 'public/workflows' folder with this exact name
      downloadUrl: 'Email Marketing Campaign.json', 
      difficulty: 'Intermediate'
    }
    
  ]

  const handleDownload = (url: string, filename: string) => {
    // Creates a temporary link to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${filename}.json`); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="workflows" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Automation Workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse my library of pre-built n8n automation agents. Download them directly and import them into your own n8n instance.
          </p>
        </div>

        {/* Workflows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <div 
              key={workflow.id} 
              className="card p-6 flex flex-col justify-between animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-50 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <Bot className="w-8 h-8" />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    workflow.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    workflow.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {workflow.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {workflow.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {workflow.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {workflow.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handleDownload(workflow.downloadUrl, workflow.title)}
                className="w-full btn-secondary flex items-center justify-center gap-2 group-hover:bg-primary-600 group-hover:text-white group-hover:border-transparent"
              >
                <Download className="w-4 h-4" />
                Download JSON
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkflowsSection