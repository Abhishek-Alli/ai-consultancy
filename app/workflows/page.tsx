import Navbar from '../../components/Navbar'
import WorkflowsSection from '../../components/WorkflowsSection'
import Footer from '../../components/Footer'

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900">Automation Library</h1>
        <p className="text-gray-600 mt-4 text-lg">Download ready-to-use n8n workflows</p>
      </div>

      <WorkflowsSection />
      
      <Footer />
    </main>
  )
}