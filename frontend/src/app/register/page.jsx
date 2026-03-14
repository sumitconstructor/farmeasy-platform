'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Leaf, ArrowLeft, Smartphone, ShieldCheck, User } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter(); // The intelligent router!
  const [isLogin, setIsLogin] = useState(false);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  
  // States to remember what they typed
  const [name, setName] = useState('');
  const [role, setRole] = useState('Farmer');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep(2);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const toggleMode = (mode) => {
    setIsLogin(mode);
    setStep(1);
    setPhone('');
    setOtp(['', '', '', '']);
    setName('');
  };

  // THIS IS THE MAGIC FUNCTION!
  const handleVerify = () => {
    if (!isLogin) {
      // 1. Save their details to browser memory
      localStorage.setItem('farmEasy_userName', name);
      localStorage.setItem('farmEasy_userRole', role);

      // 2. Route them to the correct page based on the dropdown
      if (role === 'Farmer') {
        router.push('/farmer-dashboard');
      } else if (role === 'Corporate Buyer') {
        router.push('/checkout');
      } else {
        router.push('/'); // Fallback
      }
    } else {
      // If logging in, just go home for now
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4 font-sans relative">
      <div className="absolute top-6 left-6">
        <Link href="/">
          <div className="flex items-center gap-2 text-green-700 hover:text-green-900 transition cursor-pointer font-medium bg-white px-4 py-2 rounded-full shadow-sm">
            <ArrowLeft className="h-5 w-5" /> Back to Home
          </div>
        </Link>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
        <div className="bg-green-600 pt-8 pb-0 text-center">
          <Leaf className="h-12 w-12 text-white mx-auto mb-3" />
          <h2 className="text-3xl font-extrabold text-white">
            {isLogin ? 'Welcome Back!' : 'Join FarmEasy'}
          </h2>
          <p className="text-green-100 mt-2 mb-6">
            {isLogin ? 'Log in to your account' : 'Create your account to get started'}
          </p>

          <div className="flex bg-green-700/50 rounded-t-2xl mx-4">
            <button onClick={() => toggleMode(true)} className={`flex-1 py-3 font-bold text-sm rounded-t-xl transition ${isLogin ? 'bg-white text-green-700' : 'text-green-100 hover:text-white'}`}>Log In</button>
            <button onClick={() => toggleMode(false)} className={`flex-1 py-3 font-bold text-sm rounded-t-xl transition ${!isLogin ? 'bg-white text-green-700' : 'text-green-100 hover:text-white'}`}>Register</button>
          </div>
        </div>

        <div className="p-8">
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-5 animate-in fade-in duration-300">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none" 
                        placeholder="Enter your name" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">I am a...</label>
                    <select 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none bg-white"
                    >
                      <option value="Farmer">Farmer</option>
                      <option value="Corporate Buyer">Corporate Buyer</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input 
                    type="tel" 
                    required 
                    maxLength="10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none" 
                    placeholder="10-digit mobile number" 
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition shadow-md mt-4">
                Send OTP
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <ShieldCheck className="h-16 w-16 text-green-500 mx-auto" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Verify your Phone</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  We sent a 4-digit code to <span className="font-bold text-gray-800">+91 {phone}</span>
                </p>
              </div>

              <div className="flex justify-center gap-3 mt-6">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    className="w-14 h-14 text-center text-2xl font-extrabold border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition bg-gray-50"
                  />
                ))}
              </div>

              {/* No more <Link> tag here, we trigger the function instead! */}
              <button 
                onClick={handleVerify}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition shadow-md mt-8"
              >
                {isLogin ? 'Verify & Log In' : 'Verify & Register'}
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Didn't receive the code? <button onClick={() => setStep(1)} className="text-green-600 font-bold hover:underline">Resend or Change Number</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}