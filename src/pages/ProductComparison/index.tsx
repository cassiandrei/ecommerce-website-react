export default function ProductComparison() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary-light py-16 text-center">
        <h1 className="text-4xl font-bold text-dark">Product Comparison</h1>
        <p className="text-dark mt-2">Home &gt; Comparison</p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Features Column */}
          <div>
            <h3 className="text-2xl font-medium text-dark mb-8">Go to Product page for more Products</h3>
            <button className="text-primary underline">View More</button>
          </div>

          {/* Product Columns */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i}>
              <div className="aspect-square bg-primary-light rounded-lg mb-4" />
              <h4 className="text-xl font-medium text-dark">Asgaard Sofa</h4>
              <p className="text-lg text-dark font-medium">Rs. 250,000.00</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-primary">★★★★☆</span>
                <span className="text-gray-500 text-sm">4.7 (204 Reviews)</span>
              </div>
            </div>
          ))}

          {/* Add Product */}
          <div className="flex items-center justify-center">
            <button className="text-primary font-semibold">+ Add A Product</button>
          </div>
        </div>

        {/* Comparison Details */}
        <div className="mt-16 border-t border-gray-200">
          <div className="grid grid-cols-4 py-4 border-b border-gray-200">
            <div className="font-medium text-dark">General</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {['Sales Package', 'Model Number', 'Secondary Material', 'Configuration', 'Upholstery Material', 'Upholstery Color'].map((attr) => (
            <div key={attr} className="grid grid-cols-4 py-4 border-b border-gray-200">
              <div className="text-dark">{attr}</div>
              <div className="text-dark">1 sectional sofa</div>
              <div className="text-dark">1 sectional sofa</div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
