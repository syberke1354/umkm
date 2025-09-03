import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo, saya ${formData.name} (${formData.email}). ${formData.message}`;
    const whatsappUrl = `https://wa.me/6289506147763?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "No Telepon",
      details: "+62 895-0614-7763",
      action: () => window.open('tel:+6289506147763')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      details: "Jl. Raya Cikampak Cicadas, RT.1/RW.1, Cicadas, Kec. Ciampea, Kabupaten Bogor, Jawa Barat 16620"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      details: "Setiap hari, 08:00 - 22:00 WIB"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@stride.id",
      action: () => window.open('mailto:info@stride.id')
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Contact Hero"
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
              Contact <span className="text-[#c0ff00]">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Hubungi kami untuk pertanyaan, saran, atau bantuan. Tim kami siap membantu Anda!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card 
                      className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                        info.action ? 'cursor-pointer hover:bg-gray-50' : ''
                      }`}
                      onClick={info.action}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-[#c0ff00] rounded-full text-black">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {info.details}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    Kirim Pesan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Masukkan nama lengkap Anda"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Masukkan email Anda"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tulis pesan Anda di sini..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0ff00] focus:border-transparent resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-[#c0ff00] hover:bg-[#a8d600] text-black font-semibold py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Kirim via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-lg text-gray-600">
              Kunjungi toko fisik kami untuk merasakan langsung kualitas produk Stride
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#c0ff00] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Stride Store Bogor
                </h3>
                <p className="text-gray-600 max-w-md">
                  Jl. Raya Cikampak Cicadas, RT.1/RW.1, Cicadas, Kec. Ciampea, 
                  Kabupaten Bogor, Jawa Barat 16620
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};