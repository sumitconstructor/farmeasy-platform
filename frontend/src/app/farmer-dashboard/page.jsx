import React from 'react';
import { Sprout, Truck, CircleDollarSign, CalendarPlus, Clock, CheckCircle2, Leaf, LogOut } from 'lucide-react';

export default function FarmerDashboard() {
  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950 pb-12">
      
      {/* Dashboard Top Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-900">FarmEasy</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-green-900">Harpreet Singh</p>
              <p className="text-xs text-green-600">Punjab Farm (5 Acres)</p>
            </div>
            <div className="h-10 w-10 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold border-2 border-green-500">
              HS
            </div>
            <button className="text-green-600 hover:text-red-500 transition">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-green-900">Welcome back, Harpreet! 👋</h1>
          <p className="text-green-700 mt-1">Here is the status of your farm residue collection.</p>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-emerald-100 p-3 rounded-2xl">
                <CircleDollarSign className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-600">Total Earnings</p>
                <h3 className="text-2xl font-bold text-green-900">₹12,500</h3>
              </div>
            </div>
            <p className="text-xs text-green-600 bg-green-100 inline-block px-2 py-1 rounded-md">Paid weekly via Razorpay</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-2xl">
                <Sprout className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-600">Residue Sold</p>
                <h3 className="text-2xl font-bold text-green-900">8.5 Tons</h3>
              </div>
            </div>
            <p className="text-xs text-green-600 bg-green-100 inline-block px-2 py-1 rounded-md">Converted to 17k utensils</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-2xl">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-600">Active Pickups</p>
                <h3 className="text-2xl font-bold text-green-900">1 Pending</h3>
              </div>
            </div>
            <p className="text-xs text-green-600 bg-green-100 inline-block px-2 py-1 rounded-md">Arriving tomorrow</p>
          </div>
        </div>

        {/* Bottom Grid (Booking & Tracking) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Book Pickup Section */}
          <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
              <CalendarPlus className="h-6 w-6 text-green-600" />
              Book New Pickup
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-green-800 mb-1">Select Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 outline-none bg-white/50 text-green-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-800 mb-1">Estimated Quantity (Tons)</label>
                <input type="number" placeholder="Based on your 5 acres..." defaultValue="2.5" className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 outline-none bg-white/50 text-green-900" />
              </div>
              <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-green-200 mt-2">
                <Truck className="h-5 w-5" /> Request Contractor Vehicle
              </button>
            </form>
          </div>

          {/* Pickup Status Section */}
          <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-green-600" />
              Recent Pickups
            </h2>
            
            <div className="space-y-4">
              {/* Active Item */}
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Truck className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Tomorrow, 10:00 AM</p>
                    <p className="text-xs text-amber-700 font-medium">Contractor assigned: Ramesh</p>
                  </div>
                </div>
                <span className="bg-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">On The Way</span>
              </div>

              {/* Completed Item */}
              <div className="bg-green-50 border border-green-100 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-200 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Oct 12, 2025</p>
                    <p className="text-xs text-green-700 font-medium">2.0 Tons Collected</p>
                  </div>
                </div>
                <span className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Completed</span>
              </div>

              {/* Completed Item */}
              <div className="bg-green-50 border border-green-100 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-200 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Sep 28, 2025</p>
                    <p className="text-xs text-green-700 font-medium">4.0 Tons Collected</p>
                  </div>
                </div>
                <span className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Completed</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}