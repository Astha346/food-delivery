"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            FoodServe
          </h2>
          <p className="text-sm leading-6">
            Delicious meals delivered to your doorstep quickly and safely. Order your favorite dishes anytime.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-400">Menu</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-400">Help Center</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Nepalgunj, Nepal</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>+977 9800000000</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span>support@foodserve.com</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;