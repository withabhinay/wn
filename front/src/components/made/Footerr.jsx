import React from 'react'

export default function Footerr ()  {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.svg" alt="Wellnotes Logo" className="h-8 mb-4" />
          <p className="text-sm">It's time to incentivize your thoughts and build productive well-being.</p>
          <p className="text-sm mt-2">Copyright © 2024 - All rights reserved</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Leaderboard</a></li>
            <li><a href="#" className="hover:text-white">Whitepaper</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Terms of services</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Licenses</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white hover:bg-blue-700 p-2">
          Join Us
        </button>
      </div>
    </div>
  </footer>
  )
}

