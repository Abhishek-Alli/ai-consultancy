import { Brain, Zap } from 'lucide-react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]} bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg`}>
        {/* Brain Icon */}
        <Brain className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-6 h-6'} text-white`} />
        {/* Lightning Bolt Overlay */}
        <Zap className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} text-white absolute -bottom-1 -right-1`} />
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`logo-text text-gray-900 ${textSizes[size]}`}>
          GAINAI.ONLINE
        </span>
      )}
    </div>
  )
}

export default Logo
