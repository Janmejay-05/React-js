import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24  relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg mb-6">
            We are a passionate team dedicated to delivering high-quality
            solutions that make a difference. Our goal is to create innovative
            and impactful experiences for our clients.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Our Mission
              </h3>
              <p className="text-gray-600 mt-2">
                To provide innovative and reliable solutions that empower
                businesses and individuals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Our Vision
              </h3>
              <p className="text-gray-600 mt-2">
                To be a global leader in delivering top-notch services and
                products that create a lasting impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Our Values
              </h3>
              <p className="text-gray-600 mt-2">
                Integrity, innovation, and excellence are at the core of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
