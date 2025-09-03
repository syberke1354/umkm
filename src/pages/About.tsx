import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const About = () => {
  const visionMission = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visi",
      description: "Menjadi brand sepatu lokal terdepan yang menginspirasi gaya hidup aktif dan percaya diri melalui produk berkualitas tinggi dan desain inovatif."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Misi",
      description: "Menghadirkan sepatu berkualitas premium dengan desain yang memadukan tren global dan sentuhan lokal, memberikan kenyamanan maksimal untuk setiap aktivitas."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Awal Perjalanan",
      description: "Stride didirikan dengan visi menciptakan sepatu lokal berkualitas internasional."
    },
    {
      year: "2021",
      title: "Ekspansi Produk",
      description: "Meluncurkan koleksi pertama dengan 50+ varian sepatu untuk berbagai aktivitas."
    },
    {
      year: "2022",
      title: "Pengakuan Nasional",
      description: "Meraih penghargaan 'Best Local Footwear Brand' dari Indonesia Fashion Week."
    },
    {
      year: "2023",
      title: "Inovasi Berkelanjutan",
      description: "Mengembangkan teknologi sole yang ramah lingkungan dan lebih nyaman."
    },
    {
      year: "2024",
      title: "Ekspansi Digital",
      description: "Meluncurkan platform e-commerce dan mencapai 100,000+ pelanggan setia."
    },
    {
      year: "2025",
      title: "Visi Masa Depan",
      description: "Menargetkan ekspansi ke pasar Asia Tenggara dengan inovasi produk terbaru."
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100K+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "500+", label: "Product Variants" },
    { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Cities Reached" },
    { icon: <Target className="w-8 h-8" />, number: "5", label: "Years Experience" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="About Hero"
            className="w-full h-full object-cover opacity-20"
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
              About <span className="text-[#c0ff00]">Stride</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Perjalanan kami dimulai dari passion untuk menciptakan sepatu yang tidak hanya stylish, 
              tetapi juga memberikan kenyamanan maksimal untuk setiap langkah Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Visi & Misi
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#c0ff00] rounded-full text-black">
                        {item.icon}
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-[#c0ff00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-black rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-medium text-gray-800">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <History className="w-12 h-12 text-[#c0ff00]" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Sejarah Stride
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perjalanan panjang kami dalam menciptakan sepatu berkualitas tinggi
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#c0ff00] hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="px-4 py-2 bg-[#c0ff00] text-black font-bold rounded-full">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-6 h-6 bg-[#c0ff00] rounded-full border-4 border-white shadow-lg" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};