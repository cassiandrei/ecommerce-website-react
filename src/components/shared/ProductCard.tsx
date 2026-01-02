import { Link } from 'react-router-dom';
import { Heart, Share2, ArrowLeftRight } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-gray-100 relative overflow-hidden">
      {/* Badges */}
      {product.discount && (
        <span className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-accent-red text-white flex items-center justify-center text-sm font-medium">
          -{product.discount}%
        </span>
      )}
      {product.isNew && (
        <span className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-accent-teal text-white flex items-center justify-center text-sm font-medium">
          New
        </span>
      )}

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block aspect-[4/5] bg-gray-200 relative overflow-hidden">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
          {product.name}
        </div>
      </Link>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-white text-primary px-12 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Add to cart
        </button>
        <div className="flex items-center gap-4 text-white">
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Share</span>
          </button>
          <Link to={`/comparison`} className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeftRight className="w-4 h-4" />
            <span className="text-sm font-semibold">Compare</span>
          </Link>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Like</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-gray-100">
        <h3 className="font-semibold text-dark text-lg mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-dark">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
