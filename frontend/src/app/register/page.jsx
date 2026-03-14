'use client'; // Required for forms and interactivity in Next.js

import React, { useState } from 'react';
import { Leaf, Phone, MapPin, Sprout, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FarmerRegistration() {
  
  // 1. Create temporary storage (State) for what the user types
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    landArea: ''
  });
  
  // Track if we are currently saving or if we finished saving
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // 2. This function runs every time a user types a letter
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. This function runs when they click the Submit button!
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setIsSubmitting(true);

    try {
      // 🚀 SEND DATA TO OUR BACKEND ENGINE!
      const response = await fetch('http://localhost:5000/api/farmers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Turn our data into a text string to send over the internet
      });

      if (response.ok) {
        setSuccess(true); // Yay! It worked!
        setFormData({ fullName: '', phone: '', landArea: '' }); // Clear the form
      } else {
        alert('Oops! Something went wrong on the server.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Could not connect to the backend server. Is it running?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      <div className="max-w-md w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white p-8">
        
        <div className="text-center mb-8">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-green-950">Join FarmEasy</h2>
          <p className="text-green-700 mt-2">Register to sell your crop residue</p>
        </div>

        {/* If successfully registered, show a success message. Otherwise, show the form! */}
        {success ? (
          <div className="bg-green-100 border border-green-300 rounded-2xl p-6 text-center animate-pulse">
            <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-2">Registration Complete!</h3>
            <p className="text-green-700">Welcome to the green revolution. We have saved your details securely.</p>
            <button 
              onClick={() => setSuccess(false)} 
              className="mt-6 text-green-800 font-bold hover:underline"
            >
              Register another farm
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="e.g. Harpreet Singh"
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 bg-white/50 outline-none transition"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-green-500" />
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 bg-white/50 outline-none transition"
                />
              </div>
            </div>

            {/* Land Area */}
            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Land Area (in Acres)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Sprout className="h-5 w-5 text-green-500" />
                </div>
                <input 
                  type="number" 
                  name="landArea"
                  value={formData.landArea}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 5"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 bg-white/50 outline-none transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg mt-4"
            >
              {isSubmitting ? 'Saving to Database...' : 'Complete Registration'} 
              {!isSubmitting && <ArrowRight className="h-5 w-5" />}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}