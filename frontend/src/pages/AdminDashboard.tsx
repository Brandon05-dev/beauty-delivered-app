import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { bookingAPI } from '../services/api';
import { toast } from 'sonner';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Filter,
  LogOut,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  Download
} from 'lucide-react';

interface Booking {
  _id: string;
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  serviceType: string;
  appointmentDate: string;
  appointmentTime: string;
  location: string;
  notes?: string;
  discountCode?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

interface Stats {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}

const AdminDashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBookings();
    fetchStats();
  }, []);

  useEffect(() => {
    filterBookings();
  }, [bookings, selectedStatus, selectedService, searchTerm]);

  const fetchBookings = async () => {
    try {
      const response = await bookingAPI.getAll();
      setBookings(response.data);
    } catch (error: any) {
      toast.error('Failed to fetch bookings');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await bookingAPI.getStats();
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const filterBookings = () => {
    let filtered = [...bookings];

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter((b) => b.status === selectedStatus);
    }

    // Filter by service
    if (selectedService !== 'all') {
      filtered = filtered.filter((b) => b.serviceType === selectedService);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((b) =>
        b.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.clientPhone.includes(searchTerm) ||
        b.clientEmail?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBookings(filtered);
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await bookingAPI.update(id, { status: newStatus });
      toast.success(`Booking ${newStatus.toLowerCase()} successfully`);
      fetchBookings();
      fetchStats();
    } catch (error) {
      toast.error('Failed to update booking status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) {
      return;
    }

    try {
      await bookingAPI.delete(id);
      toast.success('Booking deleted successfully');
      fetchBookings();
      fetchStats();
    } catch (error) {
      toast.error('Failed to delete booking');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case 'Cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Completed':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Cancelled':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-glamongo-ivory">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-glamongo-rose"></div>
          <p className="mt-4 text-glamongo-charcoal font-poppins">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-glamongo-ivory to-glamongo-blush/10">
      {/* Header */}
      <header className="bg-white border-b-2 border-glamongo-blush/30 shadow-rose sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-glamongo-charcoal">
                Glam<span className="text-glamongo-rose">Pro</span> Admin
              </h1>
              <p className="text-sm text-glamongo-charcoal/60 font-poppins mt-1">
                Booking Management Dashboard
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-poppins text-glamongo-charcoal/60">Logged in as</p>
                <p className="text-sm font-semibold text-glamongo-rose">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn-glamongo-outline py-2 px-4 inline-flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8"
          >
            <div className="bg-white rounded-xl p-6 border-2 border-glamongo-blush/30 shadow-rose">
              <p className="text-sm font-poppins text-glamongo-charcoal/60 mb-1">Total</p>
              <p className="text-3xl font-playfair font-bold text-glamongo-charcoal">{stats.total}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
              <p className="text-sm font-poppins text-yellow-700 mb-1">Pending</p>
              <p className="text-3xl font-playfair font-bold text-yellow-700">{stats.pending}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <p className="text-sm font-poppins text-green-700 mb-1">Confirmed</p>
              <p className="text-3xl font-playfair font-bold text-green-700">{stats.confirmed}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <p className="text-sm font-poppins text-blue-700 mb-1">Completed</p>
              <p className="text-3xl font-playfair font-bold text-blue-700">{stats.completed}</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <p className="text-sm font-poppins text-red-700 mb-1">Cancelled</p>
              <p className="text-3xl font-playfair font-bold text-red-700">{stats.cancelled}</p>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 border-2 border-glamongo-blush/30 shadow-rose mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-glamongo-rose" />
            <h2 className="text-lg font-playfair font-semibold text-glamongo-charcoal">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-poppins text-glamongo-charcoal/60 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-glamongo-rose" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Name, phone, or email..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-glamongo-blush/40 rounded-lg focus:border-glamongo-rose focus:outline-none font-poppins"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-poppins text-glamongo-charcoal/60 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 border-2 border-glamongo-blush/40 rounded-lg focus:border-glamongo-rose focus:outline-none font-poppins"
              >
                <option value="all">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            {/* Service Filter */}
            <div>
              <label className="block text-sm font-poppins text-glamongo-charcoal/60 mb-2">
                Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 border-2 border-glamongo-blush/40 rounded-lg focus:border-glamongo-rose focus:outline-none font-poppins"
              >
                <option value="all">All Services</option>
                <option value="Everyday Makeup">Everyday Makeup</option>
                <option value="Nail Services">Nail Services</option>
                <option value="Bridal Glam">Bridal Glam</option>
                <option value="Special Occasion">Special Occasion</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Bookings List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-playfair font-bold text-glamongo-charcoal">
              Bookings ({filteredBookings.length})
            </h2>
          </div>

          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border-2 border-glamongo-blush/30">
              <p className="text-glamongo-charcoal/60 font-poppins">No bookings found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking, index) => (
                <motion.div
                  key={booking._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 border-2 border-glamongo-blush/30 shadow-rose hover:shadow-rose-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Left: Client Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-glamongo-blush rounded-full flex items-center justify-center">
                          <span className="text-glamongo-rose font-playfair font-bold text-lg">
                            {booking.clientName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-playfair font-bold text-lg text-glamongo-charcoal">
                            {booking.clientName}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-glamongo-charcoal/60 mt-1">
                            <Phone className="w-4 h-4" />
                            <span className="font-poppins">{booking.clientPhone}</span>
                          </div>
                          {booking.clientEmail && (
                            <div className="flex items-center gap-2 text-sm text-glamongo-charcoal/60 mt-1">
                              <Mail className="w-4 h-4" />
                              <span className="font-poppins">{booking.clientEmail}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-glamongo-champagne/30 rounded-lg flex items-center justify-center">
                            <span className="text-xl">✨</span>
                          </div>
                          <div>
                            <p className="text-xs text-glamongo-charcoal/60 font-poppins">Service</p>
                            <p className="font-semibold text-glamongo-charcoal font-poppins">
                              {booking.serviceType}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-glamongo-champagne/30 rounded-lg flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-glamongo-rose" />
                          </div>
                          <div>
                            <p className="text-xs text-glamongo-charcoal/60 font-poppins">Date</p>
                            <p className="font-semibold text-glamongo-charcoal font-poppins">
                              {new Date(booking.appointmentDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-glamongo-champagne/30 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-glamongo-rose" />
                          </div>
                          <div>
                            <p className="text-xs text-glamongo-charcoal/60 font-poppins">Time</p>
                            <p className="font-semibold text-glamongo-charcoal font-poppins">
                              {booking.appointmentTime}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-glamongo-champagne/30 rounded-lg flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-glamongo-rose" />
                          </div>
                          <div>
                            <p className="text-xs text-glamongo-charcoal/60 font-poppins">Location</p>
                            <p className="font-semibold text-glamongo-charcoal font-poppins text-xs">
                              {booking.location.length > 30 
                                ? `${booking.location.substring(0, 30)}...` 
                                : booking.location
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      {booking.notes && (
                        <div className="bg-glamongo-ivory/50 rounded-lg p-3 mb-4">
                          <p className="text-xs text-glamongo-charcoal/60 font-poppins mb-1">Notes:</p>
                          <p className="text-sm text-glamongo-charcoal font-poppins">{booking.notes}</p>
                        </div>
                      )}
                    </div>

                    {/* Right: Status & Actions */}
                    <div className="flex-shrink-0 lg:w-64 space-y-3">
                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        <span className="font-semibold font-poppins">{booking.status}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2">
                        {booking.status !== 'Confirmed' && booking.status !== 'Completed' && (
                          <button
                            onClick={() => handleStatusUpdate(booking._id, 'Confirmed')}
                            className="flex-1 min-w-[120px] bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-poppins text-sm font-medium transition-colors"
                          >
                            Confirm
                          </button>
                        )}
                        
                        {booking.status === 'Confirmed' && (
                          <button
                            onClick={() => handleStatusUpdate(booking._id, 'Completed')}
                            className="flex-1 min-w-[120px] bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-poppins text-sm font-medium transition-colors"
                          >
                            Complete
                          </button>
                        )}
                        
                        {booking.status !== 'Cancelled' && booking.status !== 'Completed' && (
                          <button
                            onClick={() => handleStatusUpdate(booking._id, 'Cancelled')}
                            className="flex-1 min-w-[120px] bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-poppins text-sm font-medium transition-colors"
                          >
                            Cancel
                          </button>
                        )}
                        
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="w-full bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded-lg font-poppins text-sm font-medium transition-colors inline-flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>

                      {/* Booking ID */}
                      <p className="text-xs text-glamongo-charcoal/40 font-poppins">
                        ID: {booking._id.substring(0, 8)}...
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
