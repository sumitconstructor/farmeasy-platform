import Link from 'next/link';
import React from 'react';
import { Leaf, Truck, Factory, ArrowRight, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-800 bg-clip-text text-transparent">
              FarmEasy
            </span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-green-800">
            {/* Scroll Links */}
            <a href="#how-it-works" className="hover:text-green-600 transition">How it Works</a>
            
            {/* Page Link */}
            <Link href="/checkout" className="hover:text-green-600 transition">Marketplace</Link>
            
            {/* Scroll Link */}
            <a href="#impact" className="hover:text-green-600 transition">Impact</a>
          </div>
          
          <Link href="/register">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md transition transform hover:scale-105">
              Login / Register
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Agriculture Field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
            Turn Crop Residue Into <br />
            <span className="text-green-300">Sustainable Revenue.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-green-50 max-w-3xl mx-auto mb-10">
            Stop burning, start earning. We collect rice and wheat stubble from your farm and turn it into 100% biodegradable utensils for a greener tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            <Link href="/farmer-dashboard">
              <button className="w-full sm:w-auto bg-green-400 hover:bg-green-300 text-green-950 px-8 py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-2 shadow-xl transition transform hover:-translate-y-1">
                I am a Farmer →
              </button>
            </Link>
            
            <Link href="/checkout">
              <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:-translate-y-1">
                Corporate Orders
              </button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (GLASSMORPHISM CARDS) */}
      <section id="how-it-works" className="py-20 bg-green-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">How FarmEasy Works</h2>
            <p className="text-green-700 text-lg">A simple, transparent process from farm to fork.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300">
              <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">1. Farmers Register</h3>
              <p className="text-green-700 leading-relaxed">
                Farmers add their land details and book a pickup slot. We estimate the stubble quantity automatically.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300">
              <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">2. We Collect</h3>
              <p className="text-green-700 leading-relaxed">
                Our trusted contractors navigate directly to your farm via GPS, collect the stubble, and you get paid weekly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">3. We Transform</h3>
              <p className="text-green-700 leading-relaxed">
                Stubble is converted into premium, eco-friendly utensils using advanced pulp molding technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section id="impact" className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-300 mb-2">50k+</div>
              <div className="text-green-100 font-medium">Tons Collected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-300 mb-2">12k+</div>
              <div className="text-green-100 font-medium">Farmers Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-300 mb-2">8k+</div>
              <div className="text-green-100 font-medium">Fires Prevented</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-green-300 mb-2">25k+</div>
              <div className="text-green-100 font-medium">Tons CO₂ Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-950 text-green-400 py-8 text-center">
        <p>© 2026 FarmEasy. Making India Greener, One Farm at a Time.</p>
      </footer>
    </div>
  );
}