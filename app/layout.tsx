import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Consultancy & Automation Services',
  description: 'We help companies automate tasks, integrate AI, and streamline business workflows using n8n and custom AI solutions.',
  keywords: 'AI consultancy, automation, n8n workflows, business process optimization, AI integration',
  authors: [{ name: 'AI Consultancy Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 antialiased">
        {children}
      </body>
    </html>
  )
}

