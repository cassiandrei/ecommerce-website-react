export default function Checkout() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary-light py-16 text-center">
        <h1 className="text-4xl font-bold text-dark">Checkout</h1>
        <p className="text-dark mt-2">Home &gt; Checkout</p>
      </div>

      {/* Checkout Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Billing Details */}
          <div>
            <h2 className="text-3xl font-semibold text-dark mb-8">Billing details</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark font-medium mb-2">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                </div>
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">Company Name (Optional)</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">Country / Region</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                  <option>Sri Lanka</option>
                  <option>India</option>
                  <option>Pakistan</option>
                </select>
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">Street address</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">Town / City</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">Province</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                  <option>Western Province</option>
                </select>
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">ZIP code</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">Phone</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">Email address</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
              </div>

              <div>
                <input type="text" placeholder="Additional information" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="space-y-4">
              <div className="flex justify-between text-lg font-medium text-dark">
                <span>Product</span>
                <span>Subtotal</span>
              </div>

              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="text-gray-500">Asgaard sofa × 1</span>
                <span className="text-dark">Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="text-dark">Subtotal</span>
                <span className="text-dark">Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="text-dark">Total</span>
                <span className="text-xl font-bold text-primary">Rs. 250,000.00</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8 space-y-4">
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                <span className="text-dark">Direct Bank Transfer</span>
              </label>
              <p className="text-gray-500 text-sm pl-7">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
              </p>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span className="text-gray-500">Cash On Delivery</span>
              </label>
            </div>

            <p className="text-dark mt-8">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>

            <button className="w-full border-2 border-dark text-dark py-4 mt-8 hover:bg-dark hover:text-white transition-colors rounded-lg font-medium">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
