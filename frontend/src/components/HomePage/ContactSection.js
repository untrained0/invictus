// components/ContactSection.js

import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="w-full border rounded py-2 px-3" />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded py-2 px-3" />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="message" className="text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border rounded py-2 px-3"></textarea>
          </div>
          <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
