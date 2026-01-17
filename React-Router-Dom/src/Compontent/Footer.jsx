import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full bg-cyan-900 flex items-center justify-center py-4'>
      <p className="text-sm">
        © {new Date().getFullYear()} Vinay. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
