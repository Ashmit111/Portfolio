"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaShoppingCart, FaUser, FaArrowRight, FaCheck } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Full-stack applications tailored to your business needs with modern technologies and scalable architecture.",
    features: [
      "Modern Web Applications",
      "API Development & Integration",
      "Database Design & Optimization",
      "Cloud Deployment & DevOps",
      "Performance Optimization"
    ],
    icon: FaCode,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and user-friendly interfaces.",
    features: [
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Inventory Management",
      "Admin Dashboard",
      "Mobile Responsive Design"
    ],
    icon: FaShoppingCart,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Portfolio Websites",
    description: "Professional portfolio websites that showcase your work and help you stand out in your field.",
    features: [
      "Responsive Design",
      "Interactive Animations",
      "SEO Optimization",
      "Contact Integration",
      "Performance Optimized"
    ],
    icon: FaUser,
    color: "from-purple-500 to-pink-500"
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-y-scroll scrollbar px-4 sm:px-8 py-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-cyan-300 font-mono mb-4">
          My Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 font-sans max-w-2xl mx-auto">
          Bringing your ideas to life with cutting-edge technology and innovative solutions
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-gray-800 bg-black/40 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-gray-700 transition-all"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-white">
                    <IconComponent className="text-xl text-cyan-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white font-mono tracking-tight mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <FaCheck className="text-cyan-400 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <div className="pt-2">
                  <motion.a
                    href="/contact"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-2 text-cyan-300 hover:text-white font-medium"
                  >
                    Get started
                    <FaArrowRight className="text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center border border-gray-800 rounded-2xl p-8 sm:p-10 bg-black/40"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white font-mono mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and bring your vision to life with modern, scalable solutions.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-white font-medium"
          >
            Contact me
            <FaArrowRight className="text-xs" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;