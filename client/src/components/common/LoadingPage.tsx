import React from 'react'

function LoadingPage() {
  return (
    <div aria-label="Loading..." role="status" className="flex items-center space-x-2 h-screen justify-center">
  <svg className="h-12 w-12 animate-spin stroke-gray-500 dark:stroke-gray-200" viewBox="0 0 256 256">
    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="195.9"
      y1="60.1"
      x2="173.3"
      y2="82.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="195.9"
      y1="195.9"
      x2="173.3"
      y2="173.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="60.1"
      y1="195.9"
      x2="82.7"
      y2="173.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="60.1"
      y1="60.1"
      x2="82.7"
      y2="82.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
  </svg>
  <span className="text-base font-light text-gray-500 dark:text-gray-200">Loading...</span>
</div>
  )
}

export default LoadingPage