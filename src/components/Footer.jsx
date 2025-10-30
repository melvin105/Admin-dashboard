import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-8 md:mt-10 border-t border-color dark:text-gray-300 text-gray-600">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm">© {year} Admin Dashboard. All rights reserved.</p>
        <p className="text-sm">
          Built with <span className="font-semibold">React</span> and Syncfusion.
        </p>
      </div>
    </footer>
  )
}

export default Footer