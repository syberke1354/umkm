import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, TrendingUp, DollarSign, ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export const DashboardOverview = () => {
  const stats = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Total Products',
      value: '156',
      change: '+12%',
      changeType: 'positive'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Total Customers',
      value: '2,847',
      change: '+18%',
      changeType: 'positive'
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Orders This Month',
      value: '1,234',
      change: '+25%',
      changeType: 'positive'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Revenue',
      value: 'Rp 45.2M',
      change: '+15%',
      changeType: 'positive'
    }
  ];

  const recentOrders = [
    { id: '#001', customer: 'Ahmad Rizki', product: 'Active Inizio Azure', amount: 'Rp 500,000', status: 'Completed' },
    { id: '#002', customer: 'Sari Dewi', product: 'Hageshi Beige', amount: 'Rp 399,900', status: 'Processing' },
    { id: '#003', customer: 'Budi Santoso', product: 'Gozen Black', amount: 'Rp 499,000', status: 'Shipped' },
    { id: '#004', customer: 'Maya Putri', product: 'Corsa Classic', amount: 'Rp 450,000', status: 'Completed' },
  ];

  const topProducts = [
    { name: 'Active Inizio Azure', sales: 234, revenue: 'Rp 117M' },
    { name: 'Hageshi Beige', sales: 189, revenue: 'Rp 75.6M' },
    { name: 'Gozen Black', sales: 156, revenue: 'Rp 77.8M' },
    { name: 'Corsa Classic', sales: 143, revenue: 'Rp 64.4M' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, Admin! 👋
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your Stride store today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-800">
                      {stat.value}
                    </p>
                    <p className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="p-3 bg-[#c0ff00] rounded-full">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-800">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">{order.amount}</p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Top Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#c0ff00] rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-800">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sales} sales</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};