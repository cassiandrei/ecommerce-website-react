import { Link } from 'react-router-dom'
import { Search, Heart, ShoppingCart, User } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Header() {
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-black">Furniro</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link to="/" className="text-base font-medium text-black hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-base font-medium text-black hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/blog" className="text-base font-medium text-black hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-base font-medium text-black hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button className="text-black hover:text-primary transition-colors" aria-label="Account">
              <User className="w-6 h-6" />
            </button>
            <button className="text-black hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-black hover:text-primary transition-colors" aria-label="Wishlist">
              <Heart className="w-6 h-6" />
            </button>
            <Link to="/cart" className="text-black hover:text-primary transition-colors relative" aria-label="Cart">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
