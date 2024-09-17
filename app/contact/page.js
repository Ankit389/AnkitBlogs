import React from 'react';
import Image from 'next/image'; // If you are using Next.js

const ContactPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen  "
      style={{
        backgroundImage: `url('/bg2.png')`, // Replace with the actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <form>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block">First Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Last Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email *</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Email *</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact Number *</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Contact Number"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
