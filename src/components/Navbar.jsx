import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side: Logo and Products Link */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <Link href="/products" className="text-gray-700 hover:text-gray-900">
          Products
        </Link>
      </div>

      {/* Right Side: Cart Button */}
      <div>
       <Link href='/cart'> <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
