// src/App.jsx
import React, { useEffect } from 'react';
import Shepherd from 'shepherd.js';
import '../node_modules/shepherd.js/dist/cjs/css/shepherd.css';
import { BrowserRouter, Route, Routes, Link ,useLocation } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Dashboard } from './pages/Dashboard';
import { SendMoney } from './pages/SendMoney';

function App() {
  
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
      },
      useModalOverlay: true,
    });

    tour.addStep({
      id: 'step1',
      title: 'Welcome to Paytm',
      text: 'Your one-stop destination for all payments.',
      attachTo: {
        element: '.welcome',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'step2',
      title: 'Sign In',
      text: 'Click here to sign in to your account.',
      attachTo: {
        element: '.signin-btn',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'step3',
      title: 'Sign Up',
      text: 'Click here to create a new account.',
      attachTo: {
        element: '.signup-btn',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Finish',
          action: tour.complete,
        },
      ],
    });

    tour.start();
  }, []);


  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 welcome">
      <div className="text-center p-10">
        <h1 className="text-6xl font-bold text-white animate-pulse">Paytm</h1>
        <p className="text-xl text-gray-200 mt-4">
          Your one-stop destination for all payments
        </p>
        <div className="mt-8 space-x-4">
          <Link to="/signin">
            <button className="signin-btn px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gray-100">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gray-100">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
