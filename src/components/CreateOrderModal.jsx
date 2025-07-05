import React, { useState } from 'react'
import searchIcon from "../assets/search-icon.svg"

const CreateOrderModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    order: '',
    date: '',
    customer: '',
    payment: 'Pending',
    total: '',
    delivery: 'N/A',
    items: '',
    fulfillment: 'Unfulfilled'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      order: formData.order || `#${Math.floor(1000 + Math.random() * 9000)}`,
      date: formData.date || new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).replace(',', ''),
      items: formData.items || '1 item'
    };
    onSubmit(orderData);
    setFormData({
      order: '',
      date: '',
      customer: '',
      payment: 'Pending',
      total: '',
      delivery: 'N/A',
      items: '',
      fulfillment: 'Unfulfilled'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Order</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Order Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order Number
              </label>
              <input
                type="text"
                name="order"
                value={formData.order}
                onChange={handleInputChange}
                placeholder="e.g., #1005"
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
              />
            </div>

            {/* Customer */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Name
              </label>
              <input
                type="text"
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
                placeholder="Enter customer name"
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
                required
              />
            </div>

            {/* Total */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Amount
              </label>
              <input
                type="text"
                name="total"
                value={formData.total}
                onChange={handleInputChange}
                placeholder="e.g., $25.00"
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
                required
              />
            </div>

            {/* Items */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Items
              </label>
              <input
                type="text"
                name="items"
                value={formData.items}
                onChange={handleInputChange}
                placeholder="e.g., 3 items"
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
              />
            </div>

            {/* Payment Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Status
              </label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleInputChange}
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
              >
                <option value="Pending">Pending</option>
                <option value="Success">Success</option>
              </select>
            </div>

            {/* Fulfillment Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fulfillment Status
              </label>
              <select
                name="fulfillment"
                value={formData.fulfillment}
                onChange={handleInputChange}
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
              >
                <option value="Unfulfilled">Unfulfilled</option>
                <option value="Fulfilled">Fulfilled</option>
              </select>
            </div>

            {/* Delivery */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery
              </label>
              <input
                type="text"
                name="delivery"
                value={formData.delivery}
                onChange={handleInputChange}
                placeholder="e.g., N/A or delivery info"
                className="w-full pl-3 pr-3 py-2 bg-iceberg/10 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aztecPurple transition-colors duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-aztecPurple border border-transparent rounded-md hover:bg-aztecPurple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aztecPurple transition-colors duration-150"
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrderModal; 