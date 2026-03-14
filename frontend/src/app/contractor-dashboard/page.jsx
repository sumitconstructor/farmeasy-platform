import React from 'react';
import { Truck, MapPin, Navigation, CheckCircle, Clock, User, Leaf } from 'lucide-react';

export default function ContractorDashboard() {
  
  // Fake list of available pickups
  const availableJobs = [
    { id: 101, farmer: "Harpreet Singh", location: "Amritsar, Punjab", distance: "12 km away", tons: "4.5", date: "Today, 2:00 PM" },
    { id: 102, farmer: "Rajesh Kumar", location: "Ludhiana, Punjab", distance: "28 km away", tons: "8.0", date: "Tomorrow, 9:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950 pb-12">
      
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-900">FarmEasy <span className="text-sm font-normal text-green-600">Contractor</span></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-green-900 hidden sm:block">Ramesh Logistics</span>
            <div className="h-10 w-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              RL
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Active Job Alert (If they have a job right now) */}
        <div className="bg-green-600 text-white rounded-3xl p-6 mb-8 shadow-lg shadow-green-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="bg-green-500 text-green-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">Current Active Pickup</span>
            <h2 className="text-2xl font-bold mb-1">Gurpreet's Farm (5.0 Tons)</h2>
            <p className="flex items-center gap-2 text-green-100">
              <MapPin className="h-4 w-4" /> Jalandhar, Punjab • 4 km away
            </p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <button className="flex-1 sm:flex-none bg-white text-green-700 hover:bg-green-50 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
              <Navigation className="h-5 w-5" /> Navigate
            </button>
            <button className="flex-1 sm:flex-none bg-green-800 text-white hover:bg-green-900 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
              <CheckCircle className="h-5 w-5" /> Complete
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
          <Clock className="h-6 w-6 text-green-600" />
          Available Pickup Requests
        </h2>

        {/* List of Available Jobs */}
        <div className="space-y-4">
          {availableJobs.map((job) => (
            <div key={job.id} className="bg-white/70 backdrop-blur-xl border border-white p-5 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl hidden sm:block">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-900">{job.farmer}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-green-700 mt-1">
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-green-500" /> {job.location}</span>
                    <span className="font-semibold text-green-800 bg-green-100 px-2 py-0.5 rounded-md">{job.distance}</span>
                    <span className="font-medium">{job.tons} Tons Estimated</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-green-100">
                <div className="text-sm font-medium text-green-800 text-left md:text-right">
                  Requested for: <br />
                  <span className="font-bold">{job.date}</span>
                </div>
                <button className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-xl font-bold transition">
                  Accept Job
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}