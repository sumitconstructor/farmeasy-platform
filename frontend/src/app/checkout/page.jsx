'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Leaf, CheckCircle } from 'lucide-react';

export default function CorporateMarketplace() {
  const [cart, setCart] = useState([]);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  // Your beautiful biodegradable products!
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Plates (100 Pack)",
      description: "100% biodegradable plates made from compressed wheat stubble. Microwave safe.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Stubble Bowls (50 Pack)",
      description: "Sturdy, leak-proof bowls perfect for hot soups or cold salads.",
      price: 12.50,
      image: "https://images.unsplash.com/photo-1620601550992-07eb6ea097f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Biodegradable Cutlery Set",
      description: "Forks, knives, and spoons (200 pieces). Zero plastic, zero guilt.",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1585287515024-6cc579cddbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (isCheckedOut) {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
        <h1 className="text-4xl font-bold text-green-900 mb-4">Order Confirmed!</h1>
        <p className="text-xl text-green-700 mb-8 max-w-md">
          Thank you for choosing sustainability. Your order helps farmers and saves the planet.
        </p>
        <Link href="/">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition">
            Return Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/">
          <div className="flex items-center gap-2 text-green-700 hover:text-green-500 transition cursor-pointer">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Home</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 text-green-900">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">Corporate Marketplace</span>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
          <ShoppingCart className="h-5 w-5" />
          <span>{cart.length} Items</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* PRODUCTS GRID */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Sustainable Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 h-12">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-extrabold text-green-700">${product.price}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SHOPPING CART SIDEBAR */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-green-600"/> Your Cart
            </h3>
            
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
            ) : (
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700 font-medium">{item.name}</span>
                    <span className="text-gray-900 font-bold">${item.price}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-700">Total:</span>
                <span className="text-3xl font-extrabold text-green-700">${total}</span>
              </div>
            </div>

            <button 
              onClick={() => cart.length > 0 && setIsCheckedOut(true)}
              className={`w-full py-4 rounded-xl font-bold text-lg transition ${cart.length > 0 ? 'bg-green-600 hover:bg-green-700 text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              Checkout Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
