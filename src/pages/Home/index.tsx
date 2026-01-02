import { Link } from 'react-router-dom';
import ProductCard from '../../components/shared/ProductCard';
import { products } from '../../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-primary-light flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl ml-auto bg-primary-light p-12 rounded-lg">
            <p className="text-dark font-semibold tracking-widest mb-2">New Arrival</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
              Discover Our New Collection
            </h1>
            <p className="text-dark mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-primary text-white px-16 py-4 font-bold hover:bg-primary/90 transition-colors"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Browse Range */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-2">Browse The Range</h2>
          <p className="text-gray-500 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Dining', 'Living', 'Bedroom'].map((category) => (
              <Link to="/shop" key={category} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-gray-500 text-lg">
                    {category}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dark">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-8">Our Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link
            to="/shop"
            className="inline-block mt-12 border-2 border-primary text-primary px-12 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Show More
          </Link>
        </div>
      </section>
    </div>
  );
}
