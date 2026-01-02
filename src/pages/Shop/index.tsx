import { useState } from 'react';
import ProductCard from '../../components/shared/ProductCard';
import { products } from '../../data/products';

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState('Default');

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Paginate
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Banner */}
      <div className="bg-primary-light py-16 text-center">
        <h1 className="text-4xl font-bold text-dark">Shop</h1>
        <p className="text-dark mt-2">Home &gt; Shop</p>
      </div>

      {/* Filters */}
      <div className="bg-primary-light py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-dark">Filter</span>
            <span className="text-dark">|</span>
            <span className="text-dark">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalProducts)} of {totalProducts} results
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-dark">Show</span>
            <select
              className="border border-gray-300 px-3 py-2"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={16}>16</option>
              <option value={32}>32</option>
              <option value={64}>64</option>
            </select>
            <span className="text-dark">Sort by</span>
            <select
              className="border border-gray-300 px-3 py-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-12 h-12 rounded ${
                currentPage === i + 1
                  ? 'bg-primary text-white'
                  : 'bg-primary-light text-dark hover:bg-primary hover:text-white transition-colors'
              }`}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="w-12 h-12 bg-primary-light text-dark rounded hover:bg-primary hover:text-white transition-colors"
            >
              Next
            </button>
          )}
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
