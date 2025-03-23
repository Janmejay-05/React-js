import React from "react";
import Login from "./Login";

const Features = () => {
  return (
    <>
      <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Features
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Discover the powerful features that make our platform stand out and
            deliver exceptional value.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-4xl text-blue-500 mb-3">🚀</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Fast Performance
              </h3>
              <p className="text-gray-600 mt-2">
                Our platform is optimized for speed to ensure seamless user
                experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-4xl text-green-500 mb-3">🔒</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 mt-2">
                We prioritize security and reliability to keep your data safe at
                all times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-4xl text-yellow-500 mb-3">🎨</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Modern Design
              </h3>
              <p className="text-gray-600 mt-2">
                A sleek, user-friendly interface designed for the best
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
