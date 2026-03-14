import React from 'react';
import Link from 'next/link';
import { Leaf, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950 flex flex-col">
      
      {/* NAVIGATION BAR */}
      <nav className="bg-green-100/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-green-900 tracking-wide">FarmEasy</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-green-800">
          <span className="hover:text-green-600 cursor-pointer transition">How it Works</span>
          
          {/* Marketplace Link */}
          <Link href="/corporate-marketplace">
            <span className="hover:text-green-600 cursor-pointer transition">Marketplace</span>
          </Link>
          
          <span className="hover:text-green-600 cursor-pointer transition">Impact</span>
        </div>

        {/* Login / Register Link */}
        <Link href="/register">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md transition transform hover:scale-105">
            Login / Register
          </button>
        </Link>
      </nav>

      {/* HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-green-800 to-green-600 text-white relative overflow-hidden">
        
        {/* Background Overlay (Optional stylistic touch) */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Turn Crop Residue Into <br />
            <span className="text-green-300">Sustainable Revenue.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop burning, start earning. We collect rice and wheat stubble from
            your farm and turn it into 100% biodegradable utensils for a greener tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            
            {/* Farmer Dashboard Link */}
            <Link href="/farmer-dashboard">
              <button className="w-full sm:w-auto bg-green-400 hover:bg-green-300 text-green-950 px-8 py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-2 shadow-xl transition transform hover:-translate-y-1">
                I am a Farmer <ArrowRight className="h-5 w-5" />
              </button>
            </Link>

            {/* Corporate Checkout Link */}
            <Link href="/checkout">
              <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:-translate-y-1">
                Corporate Orders
              </button>
            </Link>

          </div>
        </div>
      </main>

      {/* BOTTOM SECTION */}
      <div className="bg-white py-12 text-center">
         <h2 className="text-3xl font-bold text-green-900">How FarmEasy Works</h2>
         <p className="text-green-600 mt-2">Connecting farmers to sustainable corporate buyers.</p>
         
         {/* Hidden secret link to Admin Dashboard for you! */}
         <div className="mt-8">
            <Link href="/admin-dashboard">
              <span className="text-xs text-gray-400 hover:text-green-500 cursor-pointer">Admin Access</span>
            </Link>
         </div>
      </div>

    </div>
  );
}