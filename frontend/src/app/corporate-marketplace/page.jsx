import React from 'react';
import { ShoppingCart, Award, Package, Leaf, Plus, Info } from 'lucide-react';

export default function CorporateMarketplace() {
  
  // We use a simple list of products here to make the UI easy to build
  const products = [
    { id: 1, name: "Biodegradable Plates", price: "₹4.50", desc: "10-inch plates from 100% wheat stubble." },
    { id: 2, name: "Eco-Friendly Cups", price: "₹2.00", desc: "250ml beverage cups. Leak-proof." },
    { id: 3, name: "Stubble Cutlery Set", price: "₹3.50", desc: "Spoon, fork, and knife. Heat-resistant." },
    { id: 4, name: "Food Containers", price: "₹8.00", desc: "500ml with lids. Microwave safe." },
    { id: 5, name: "Natural Straws", price: "₹0.80", desc: "Does not get soggy like paper straws." },
  ];

  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950 pb-16">
      
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-900">FarmEasy <span className="text-sm font-normal text-green-600">for Business</span></span>
          </div>
          <button className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-xl font-medium transition">
            <ShoppingCart className="h-5 w-5" />
            Cart (0)
          </button>
        </div>
      </nav>

      {/* Header / Sustainability Pitch */}
      <div className="bg-green-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-50">Zero Waste. Zero Pollution.</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto mb-8">
            Purchase premium biodegradable utensils for your business. Every order directly prevents stubble burning and supports Indian farmers.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl text-green-100">
            <Award className="h-6 w-6 text-yellow-400" />
            <span className="font-medium">Get a Sustainability Certificate with every bulk order!</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <Info className="h-6 w-6 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="text-amber-900 font-bold">B2B Bulk Orders Only</h3>
            <p className="text-amber-800 text-sm mt-1">
              To keep our environmental impact high and logistics efficient, the minimum order quantity for all corporate purchases is <strong>500 units</strong>.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
          <Package className="h-6 w-6 text-green-600" />
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* We use the "map" function to loop through our products list and create a card for each one! */}
          {products.map((product) => (
            <div key={product.id} className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition group">
              
              {/* Fake Image Placeholder */}
              <div className="w-full h-48 bg-green-100 rounded-2xl mb-4 flex items-center justify-center group-hover:bg-green-200 transition">
                <Leaf className="h-12 w-12 text-green-400 opacity-50" />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-green-900">{product.name}</h3>
                <span className="bg-green-100 text-green-800 font-bold px-2 py-1 rounded-lg text-sm">{product.price} <span className="text-xs font-normal">/ea</span></span>
              </div>
              
              <p className="text-green-700 text-sm mb-6 h-10">
                {product.desc}
              </p>
              
              {/* Order Controls */}
              <div className="flex items-center gap-3">
                <div className="flex-1 border border-green-200 rounded-xl px-3 py-2 bg-white/50 flex items-center justify-between">
                  <span className="text-xs text-green-600 font-medium">Qty:</span>
                  <input type="number" defaultValue="500" min="500" className="w-16 text-right bg-transparent outline-none font-bold text-green-900" />
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition shadow-md shadow-green-200">
                  <Plus className="h-5 w-5" />
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}