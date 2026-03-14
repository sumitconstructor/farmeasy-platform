'use client';

import React, { useState } from 'react';
import { Leaf, CreditCard, Award, CheckCircle, Download, ShieldCheck } from 'lucide-react';

export default function CheckoutAndCertificate() {
  
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    totalAmount: 26500
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the order to the LIVE RENDER URL
      const response = await fetch('https://farmeasy-platform.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsPaid(true);
      } else {
        alert("Payment failed on the server.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Could not connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 font-sans text-green-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-center items-center gap-2">
        <Leaf className="h-8 w-8 text-green-600" />
        <span className="text-3xl font-extrabold text-green-900">FarmEasy Checkout</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-xl font-bold text-green-900 mb-6 border-b border-green-100 pb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <div><h3 className="font-bold text-green-800">Biodegradable Plates</h3><p className="text-sm text-green-600">Qty: 5,000</p></div>
                <span className="font-bold text-green-900">₹22,500</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div><h3 className="font-bold text-green-800">Eco-Friendly Cups</h3><p className="text-sm text-green-600">Qty: 2,000</p></div>
                <span className="font-bold text-green-900">₹4,000</span>
              </div>
              <div className="border-t border-green-100 pt-4 mt-4 flex justify-between items-center text-lg">
                <span className="font-bold text-green-900">Total Due:</span>
                <span className="font-extrabold text-green-700 text-2xl">₹26,500</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-xl font-bold text-green-900 mb-6 border-b border-green-100 pb-4">Billing Details</h2>
              
              {isPaid ? (
                <div className="text-center py-6 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-green-900">Payment Successful!</h3>
                  <p className="text-green-700 mt-2">Your impact certificate is now unlocked on the right.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handlePayment}>
                  <div>
                    <label className="block text-sm font-medium text-green-900 mb-1">Company Name</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="e.g. Taj Hotels" className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 outline-none bg-white/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-900 mb-1">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="purchasing@company.com" className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 outline-none bg-white/50" />
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg mt-8">
                    <ShieldCheck className="h-5 w-5" /> {isSubmitting ? 'Processing...' : 'Pay ₹26,500 Securely'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block flex items-center gap-1 mx-auto w-max">
                <Award className="h-4 w-4" /> Earned with this order
              </span>
              <h2 className="text-2xl font-bold text-green-900">Your Impact Certificate</h2>
            </div>

            <div className={`bg-white p-2 rounded-xl shadow-2xl border-4 ${isPaid ? 'border-green-400 rotate-0' : 'border-green-100 rotate-1'} transition duration-500 w-full max-w-lg`}>
              <div className="border-2 border-dashed border-green-300 p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] rounded-lg relative overflow-hidden">
                <Leaf className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 text-green-50 opacity-10 pointer-events-none" />
                <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h1 className="text-3xl font-serif font-bold text-green-950 mb-2 uppercase tracking-widest">Certificate</h1>
                <h2 className="text-xl font-serif text-green-800 mb-8 italic">of Environmental Sustainability</h2>
                
                <p className="text-green-900 text-sm mb-2">This is proudly presented to</p>
                <h3 className="text-2xl font-bold text-green-700 border-b border-green-300 pb-2 mb-6 inline-block min-w-[200px]">
                  {formData.companyName || '[ Your Company Name ]'}
                </h3>
                
                <p className="text-green-800 leading-relaxed text-sm mb-8">
                  For your commitment to a greener planet. By purchasing <strong>7,000</strong> biodegradable utensils, you have successfully prevented the burning of agricultural stubble.
                </p>
                
                {isPaid && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white font-bold px-3 py-1 rounded shadow transform rotate-12">
                    OFFICIAL
                  </div>
                )}
              </div>
            </div>

            {isPaid ? (
              <button className="mt-8 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition animate-bounce">
                <Download className="h-5 w-5" /> Download High-Res PDF
              </button>
            ) : (
              <button disabled className="mt-8 bg-green-100 text-green-400 cursor-not-allowed py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-2 border border-green-200">
                <Download className="h-5 w-5" /> Download High-Res PDF
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}