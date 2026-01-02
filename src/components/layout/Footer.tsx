import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Furniro.</h3>
            <p className="text-gray-500 text-sm">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-500 font-medium mb-6">Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-black font-medium hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-black font-medium hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-black font-medium hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-gray-500 font-medium mb-6">Help</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-black font-medium hover:text-primary transition-colors">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-medium hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-medium hover:text-primary transition-colors">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-500 font-medium mb-6">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-black bg-transparent py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="text-black font-medium border-b border-black hover:text-primary hover:border-primary transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-black">2023 Furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
