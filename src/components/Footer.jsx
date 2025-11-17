import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-8 bg-white dark:bg-gray-800 border-t">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <div>© {new Date().getFullYear()} WebScanPro • Version 1.0</div>
        <div>
          <a className="mr-4" href="https://github.com/vsurya2011/Web-Scanpro" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:vsurya2011@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  )
}
