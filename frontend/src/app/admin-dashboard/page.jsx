'use client'; 

import React, { useState, useEffect } from 'react';
import { Users, Truck, Factory, Leaf, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  
  const [farmerCount, setFarmerCount] = useState("...");
  const [totalRevenue, setTotalRevenue] = useState("...");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // 1. Fetch Farmers from the LIVE RENDER URL
        const farmerRes = await fetch('https://farmeasy-platform.onrender.com/api/farmers');
        const farmerData = await farmerRes.json();
        setFarmerCount(farmerData.length); 

        // 2. Fetch Orders from the LIVE RENDER URL
        const orderRes = await fetch('https://farmeasy-platform.onrender.com/api/orders');
        const orderData = await orderRes.json();
        
        // 3. Calculate Total Revenue
        const calculatedRevenue = orderData.reduce((sum, order) => sum + order.totalAmount, 0);
        setTotalRevenue(calculatedRevenue.toLocaleString());

      } catch (error) {
        console.error("Error fetching data:", error);
        setFarmerCount("Error");
        setTotalRevenue("Error");
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950 pb-12">
      <nav className="bg-green-950 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-400" />
            <span className="text-xl font-bold tracking-wide">FarmEasy <span className="text-green-400 font-normal">Admin HQ</span></span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-green-900">Platform Overview</h1>
          <p className="text-green-700 mt-1">Real-time metrics from your live database.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm border-l-4 border-l-blue-500">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-200">LIVE DATA</span>
            </div>
            <p className="text-sm font-medium text-green-700">Registered Farmers</p>
            <h3 className="text-4xl font-extrabold text-green-950 mt-1">{farmerCount}</h3>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm opacity-60">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-amber-100 p-3 rounded-2xl">
                <Truck className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <p className="text-sm font-medium text-green-700">Active Contractors</p>
            <h3 className="text-3xl font-bold text-green-950 mt-1">42</h3>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm opacity-60">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-3 rounded-2xl">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <p className="text-sm font-medium text-green-700">Stubble Collected (Tons)</p>
            <h3 className="text-3xl font-bold text-green-950 mt-1">5,430</h3>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm border-l-4 border-l-teal-500 transform hover:-translate-y-1 transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-teal-100 p-3 rounded-2xl">
                <Factory className="h-6 w-6 text-teal-600" />
              </div>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md border border-teal-200">LIVE DATA</span>
            </div>
            <p className="text-sm font-medium text-green-700">Corporate Revenue</p>
            <h3 className="text-4xl font-extrabold text-green-950 mt-1 text-teal-700">₹{totalRevenue}</h3>
          </div>

        </div>
      </div>
    </div>
  );
}