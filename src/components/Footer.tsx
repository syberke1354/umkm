import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, TwitterIcon, SendIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stride</h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Elevate your step with Stride - where style meets comfort seamlessly. 
              Our meticulously crafted shoes redefine fashion, ensuring each stride 
              is a statement.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#c0ff00] transition-colors cursor-pointer"
              >
                <TwitterIcon className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#c0ff00] transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#c0ff00] transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-gray-300 hover:text-[#c0ff00] transition-colors">
                About us
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-[#c0ff00] transition-colors">
                Product
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-[#c0ff00] transition-colors">
                Contact us
              </Link>
              <Link to="/about#vision" className="block text-gray-300 hover:text-[#c0ff00] transition-colors">
                Vision & Mission
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <div className="relative">
              <Input
                placeholder="Your email address"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 pr-12"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 bg-[#c0ff00] hover:bg-[#a8d600] text-black"
              >
                <SendIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Stride. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};