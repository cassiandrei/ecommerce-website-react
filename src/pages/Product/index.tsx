import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { getProductById, products, formatPrice } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/shared/ProductCard';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '9'); // Default to Asgaard Sofa
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'L');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '#816DFA');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-dark">Product not found</h1>
        <Link to="/shop" className="text-primary mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-primary-light py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-dark">
            <Link to="/" className="hover:text-primary">Home</Link>
            {' > '}
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            {' > '}
            <span className="text-gray-500">{product.name}</span>
          </p>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {(product.images || [product.image]).slice(0, 4).map((_, i) => (
                <div key={i} className="w-20 h-20 bg-primary-light rounded cursor-pointer hover:ring-2 ring-primary flex items-center justify-center text-xs text-gray-500">
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex-1 aspect-square bg-primary-light rounded flex items-center justify-center text-gray-500">
              {product.name}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-medium text-dark">{product.name}</h1>
            <p className="text-2xl text-gray-500 mt-2">{formatPrice(product.price)}</p>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-primary">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-gray-500">| {product.reviews} Customer Review</span>
            </div>

            <p className="text-dark mt-6">{product.description}</p>

            {product.sizes && (
              <div className="mt-8">
                <p className="text-gray-500 mb-2">Size</p>
                <div className="flex gap-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded transition-colors ${
                        selectedSize === size
                          ? 'bg-primary text-white'
                          : 'bg-primary-light hover:bg-primary hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && (
              <div className="mt-8">
                <p className="text-gray-500 mb-2">Color</p>
                <div className="flex gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full ${
                        selectedColor === color ? 'ring-2 ring-offset-2 ring-dark' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <div className="flex border border-gray-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 border-2 border-dark text-dark py-3 font-medium hover:bg-dark hover:text-white transition-colors rounded"
              >
                Add To Cart
              </button>
              <Link
                to="/comparison"
                className="border-2 border-dark text-dark px-8 py-3 font-medium hover:bg-dark hover:text-white transition-colors rounded"
              >
                + Compare
              </Link>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8 space-y-4 text-gray-500">
              <p>SKU: {product.sku}</p>
              <p>Category: {product.category}</p>
              <p>Tags: {product.tags.join(', ')}</p>
              <div className="flex items-center gap-4">
                <span>Share:</span>
                <a href="#" className="text-dark hover:text-primary"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-dark hover:text-primary"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-dark hover:text-primary"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200 mt-16 pt-16">
          <div className="flex gap-8 border-b border-gray-200 mb-8">
            <button className="pb-4 border-b-2 border-dark font-medium">Description</button>
            <button className="pb-4 text-gray-500 hover:text-dark">Additional Information</button>
            <button className="pb-4 text-gray-500 hover:text-dark">Reviews [{product.reviews}]</button>
          </div>
          <p className="text-gray-500">{product.description}</p>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-medium text-dark text-center mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="inline-block border-2 border-primary text-primary px-12 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Show More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
