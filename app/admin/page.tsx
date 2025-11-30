"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      router.push('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light p-4 dark:bg-background-dark">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* Logo Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <span className="material-symbols-outlined text-3xl">shield_person</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Admin Portal</h1>
        </div>
        {/* Login Card */}
        <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-background-dark/50 sm:p-8">
          <div className="flex flex-col items-center">
            {/* HeadlineText */}
            <h2 className="pb-1 text-center text-2xl font-bold tracking-tight text-[#111418] dark:text-white">Admin Login</h2>
            {/* BodyText */}
            <p className="pb-6 text-center text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">Welcome back. Please enter your credentials.</p>
            {/* Form */}
            <form className="flex w-full flex-col gap-4" onSubmit={handleLogin}>
              {/* TextField: Email */}
              <div className="flex flex-col">
                <label className="pb-2 text-sm font-medium text-[#111418] dark:text-gray-300" htmlFor="email">Email Address</label>
                <input 
                  className="form-input h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary" 
                  id="email" 
                  placeholder="Enter your email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* TextField: Password */}
              <div className="flex flex-col">
                <label className="pb-2 text-sm font-medium text-[#111418] dark:text-gray-300" htmlFor="password">Password</label>
                <div className="relative flex w-full flex-1 items-stretch">
                  <input 
                    className="form-input h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 pr-10 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary" 
                    id="password" 
                    placeholder="Enter your password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#617589] dark:text-gray-400">
                    <span className="material-symbols-outlined cursor-pointer text-xl">visibility</span>
                  </div>
                </div>
              </div>
              {/* MetaText: Forgot Password */}
              <div className="flex justify-end pt-1">
                <a className="text-sm font-normal leading-normal text-primary underline hover:text-primary/80 dark:text-primary/90 dark:hover:text-primary/70" href="#">Forgot your password?</a>
              </div>
              {/* Login Button */}
              <button className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="submit">Log In</button>
            </form>
          </div>
        </div>
        {/* Footer Text */}
        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">© 2024 Admin Portal. All Rights Reserved.</p>
      </div>
    </div>
  );
}
