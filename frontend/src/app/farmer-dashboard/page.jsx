'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, MapPin, Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function FarmerDashboard() {
  const [userName, setUserName] = useState('Farmer');

  // When the page loads, check memory for the user's real name!
  useEffect(() => {
    const savedName = localStorage.getItem('farmEasy_userName');
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950">
      
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">FarmEasy Dashboard</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <User className="h-5 w-5 text-green-700" />
            </div>
            <span className="font-semibold text-green-900 hidden sm:block">{userName}</span>
            <Link href="/">
              <button className="ml-4 text-sm font-medium text-red-600 hover:text-red-800 transition">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* WELCOME HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-green-900">Welcome back, {userName}! 🌾</h1>
          <p className="text-green-700 mt-2">Manage your farm details and schedule stubble pickups here.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* SCHEDULE PICKUP CARD */}
          <div className="bg-white rounded-3xl shadow-sm border border-green-100 p-8">
            <h2 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-green-600" /> Schedule a Pickup
            </h2>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Farm Location (Village/District)</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="e.g., Sangrur, Punjab" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Land Size (Acres)</label>
                  <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="e.g., 5" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Crop Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none bg-white">
                    <option>Rice Paddy</option>
                    <option>Wheat</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Preferred Pickup Date</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none" />
                </div>
              </div>

              <button type="button" onClick={() => alert('Pickup Scheduled! A contractor will contact you soon.')} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition shadow-md mt-4 flex items-center justify-center gap-2">
                Book Truck Now <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* EARNINGS & STATUS CARD */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-3xl shadow-lg p-8 text-white">
              <h2 className="text-lg font-medium text-green-100 mb-1">Estimated Earnings</h2>
              <div className="text-4xl font-extrabold mb-4">₹12,500</div>
              <p className="text-green-50 text-sm opacity-90">Based on your recent 5-acre rice paddy clearance.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-green-100 p-8">
              <h2 className="text-xl font-bold text-green-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <div>
                    <div className="font-bold text-green-900">Pickup Completed</div>
                    <div className="text-sm text-green-700">Oct 12, 2023 • 3 Acres</div>
                  </div>
                  <div className="font-bold text-green-700">+₹7,500</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                  <div>
                    <div className="font-bold text-yellow-900">Truck Scheduled</div>
                    <div className="text-sm text-yellow-700">Pending arrival • 2 Acres</div>
                  </div>
                  <div className="bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">Pending</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}