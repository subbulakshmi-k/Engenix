import React, { useState, useEffect, useMemo } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample products data - wrapped in useMemo to prevent re-creation on every render
  const allProducts = useMemo(() => [
    {
      id: 1,
      name: 'LED Smart Bulbs',
      price: 300,
      image: 'https://th.bing.com/th/id/OIP.JMHL5DZu1HD3I1uEiX_JWgHaHa?w=192&h=194&c=7&r=0&o=7&pid=1.7&rm=3',
      category: 'Lighting',
      description: 'Energy-efficient smart LED bulbs with app control and voice assistant support'
    },
    {
      id: 2,
      name: 'Circuit Breakers',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
      category: 'Safety',
      description: 'High-quality MCB circuit breakers for electrical safety and protection'
    },
    {
      id: 3,
      name: 'Power Outlets',
      price: 450,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop',
      category: 'Accessories',
      description: 'Modern modular power outlets with USB charging ports and surge protection'
    },
    {
      id: 4,
      name: 'Ceiling Fans',
      price: 2899,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=400&fit=crop',
      category: 'Appliances',
      description: 'Energy-efficient BLDC ceiling fans with remote control and timer function'
    },
    {
      id: 5,
      name: 'Extension Cords',
      price: 899,
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=400&fit=crop',
      category: 'Accessories',
      description: 'Heavy-duty extension cords with multiple sockets and overload protection'
    },
    {
      id: 6,
      name: 'LED Strip Lights',
      price: 699,
      image: 'https://images.unsplash.com/photo-1602837385569-08ac19ec83af?w=400&h=400&fit=crop',
      category: 'Lighting',
      description: 'Flexible RGB LED strip lights with remote control for decoration and mood lighting'
    },
    {
      id: 7,
      name: 'Voltage Stabilizer',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=400&h=400&fit=crop',
      category: 'Safety',
      description: 'Automatic voltage stabilizer with digital display for home appliances protection'
    },
    {
      id: 8,
      name: 'Smart Switches',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      category: 'Accessories',
      description: 'WiFi-enabled smart switches with voice control and mobile app integration'
    },
    {
      id: 9,
      name: 'Water Heater',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      category: 'Appliances',
      description: 'Instant electric water heater with digital temperature control and safety features'
    },
    {
      id: 10,
      name: 'Electrical Panel',
      price: 5999,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
      category: 'Safety',
      description: 'Complete electrical distribution panel with MCB, RCCB and surge protection'
    },
     {
      id: 11,
      name: 'LED Strip Lights',
      price: 699,
      image: 'https://images.unsplash.com/photo-1602837385569-08ac19ec83af?w=400&h=400&fit=crop',
      category: 'Lighting',
      description: 'Flexible RGB LED strip lights with remote control for decoration and mood lighting'
    },
     {
      id: 12,
      name: 'LED Strip Lights',
      price: 699,
      image: 'https://images.unsplash.com/photo-1602837385569-08ac19ec83af?w=400&h=400&fit=crop',
      category: 'Lighting',
      description: 'Flexible RGB LED strip lights with remote control for decoration and mood lighting'
    },
  ], []);

  const categories = ['All', 'Lighting', 'Safety', 'Accessories', 'Appliances'];

  useEffect(() => {
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover our comprehensive range of electrical products for all your needs
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-600">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <button className="btn-primary text-sm px-4 py-2">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Our experts are here to help you find the perfect electrical solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="btn-primary bg-electric-yellow text-gray-900 hover:bg-yellow-400">
              Call Our Experts
            </a>
            <a href="https://wa.me/919876543210" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
