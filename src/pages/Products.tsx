import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Product } from '../types/product';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Active Inizio Azure',
    description: 'Sepatu running premium dengan teknologi cushioning terdepan',
    price: 500000,
    color: 'White',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Running',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'Hageshi Beige',
    description: 'Sepatu casual dengan desain minimalis dan nyaman untuk sehari-hari',
    price: 399900,
    color: 'Beige',
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Casual',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '3',
    name: 'Gozen Black',
    description: 'Sepatu formal elegan untuk acara resmi dan profesional',
    price: 499000,
    color: 'Black',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Formal',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '4',
    name: 'Corsa Classic',
    description: 'Sepatu olahraga dengan teknologi anti-slip dan breathable material',
    price: 450000,
    color: 'Navy',
    image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Sport',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '5',
    name: 'Ace Neptune Charcoal',
    description: 'Sepatu lifestyle dengan desain urban dan material premium',
    price: 550000,
    color: 'Charcoal',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Lifestyle',
    inStock: true,
    createdAt: new Date()
  },
  {
    id: '6',
    name: 'Active Venturi Sapphire',
    description: 'Sepatu training dengan support maksimal untuk workout intensif',
    price: 475000,
    color: 'Blue',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Training',
    inStock: true,
    createdAt: new Date()
  }
];

export const Products = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Running', 'Casual', 'Formal', 'Sport', 'Lifestyle', 'Training'];

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Halo, saya tertarik dengan ${product.name} (${product.color}) seharga Rp ${product.price.toLocaleString('id-ID')}. Apakah masih tersedia?`;
    const whatsappUrl = `https://wa.me/6289506147763?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Products Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-[#c0ff00]">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Jelajahi koleksi sepatu premium kami yang dirancang khusus untuk gaya hidup modern Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-[#c0ff00] text-black hover:bg-[#a8d600]'
                      : 'hover:bg-[#c0ff00] hover:text-black'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                Tidak ada produk ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau filter kategori
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#c0ff00] text-black text-sm font-semibold rounded-full">
                          {product.category}
                        </div>
                        
                        {/* Stock Status */}
                        <div className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${
                          product.inStock 
                            ? 'bg-green-500 text-white' 
                            : 'bg-red-500 text-white'
                        }`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-500">
                            Color: {product.color}
                          </span>
                          <span className="text-2xl font-bold text-[#c0ff00]">
                            Rp {product.price.toLocaleString('id-ID')}
                          </span>
                        </div>
                        
                        <Button 
                          className="w-full bg-black hover:bg-gray-800 text-white group"
                          onClick={() => handleWhatsAppOrder(product)}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                          {product.inStock ? 'Beli via WhatsApp' : 'Stok Habis'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};