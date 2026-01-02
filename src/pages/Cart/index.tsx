import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div>
        {/* Banner */}
        <div className="bg-primary-light py-16 text-center">
          <h1 className="text-4xl font-bold text-dark">Cart</h1>
          <p className="text-dark mt-2">Home &gt; Cart</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xl text-gray-500 mb-8">Your cart is empty</p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-white px-12 py-4 font-semibold hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <div className="bg-primary-light py-16 text-center">
        <h1 className="text-4xl font-bold text-dark">Cart</h1>
        <p className="text-dark mt-2">Home &gt; Cart</p>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-primary-light py-4 px-6 grid grid-cols-4 text-dark font-medium hidden md:grid">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="py-6 px-6 grid grid-cols-1 md:grid-cols-4 items-center border-b border-gray-200 gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-primary-light rounded flex items-center justify-center text-xs text-gray-500">
                    {item.product.name}
                  </div>
                  <span className="text-gray-500">{item.product.name}</span>
                </div>
                <span className="text-gray-500">{formatPrice(item.product.price)}</span>
                <div className="border border-gray-300 rounded inline-flex w-fit">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x border-gray-300">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-primary hover:text-primary/80"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="bg-primary-light p-8 h-fit">
            <h2 className="text-2xl font-bold text-dark text-center mb-8">Cart Totals</h2>

            <div className="flex justify-between py-4 border-b border-gray-300">
              <span className="text-dark">Subtotal</span>
              <span className="text-gray-500">{formatPrice(getCartTotal())}</span>
            </div>

            <div className="flex justify-between py-4 border-b border-gray-300">
              <span className="text-dark">Total</span>
              <span className="text-xl font-medium text-primary">{formatPrice(getCartTotal())}</span>
            </div>

            <Link
              to="/checkout"
              className="block w-full text-center border-2 border-dark text-dark py-4 mt-8 hover:bg-dark hover:text-white transition-colors rounded"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'High Quality', desc: 'crafted from top materials' },
              { title: 'Warranty Protection', desc: 'Over 2 years' },
              { title: 'Free Shipping', desc: 'Order over 150 $' },
              { title: '24 / 7 Support', desc: 'Dedicated support' },
            ].map((feature) => (
              <div key={feature.title}>
                <h3 className="text-xl font-semibold text-dark">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
