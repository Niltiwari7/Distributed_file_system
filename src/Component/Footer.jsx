import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Company. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="/about" className="text-gray-400 hover:text-white mx-2">About Us</a>
            <a href="/support" className="text-gray-400 hover:text-white mx-2">Help & Support</a>
            <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
            <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer