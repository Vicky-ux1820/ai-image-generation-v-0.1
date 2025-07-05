import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const OrderReceiptModal = ({ isOpen, onClose, order }) => {
  const receiptRef = useRef();

  if (!isOpen || !order) return null;

  const handleDownloadPDF = () => {
    if (receiptRef.current) {
      html2pdf().from(receiptRef.current).set({
        margin: 0.5,
        filename: `${order.order || 'order'}-receipt.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      }).save();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Order Receipt</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Receipt Preview */}
        <div ref={receiptRef} className="p-8 bg-iceberg/10 rounded-lg m-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-aztecPurple rounded-lg w-8 h-8 text-xl text-white flex items-center justify-center">
              S
            </div>
            <span className="text-2xl font-bold text-gray-900">ShopZen</span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Order Number:</span>
              <span className="font-semibold">{order.order}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Date:</span>
              <span>{order.date}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Customer:</span>
              <span>{order.customer}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Delivery:</span>
              <span>{order.delivery}</span>
            </div>
          </div>
          <div className="border-t border-b border-gray-200 py-4 mb-4">
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Items:</span>
              <span>{order.items}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Payment Status:</span>
              <span>{order.payment}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Fulfillment:</span>
              <span>{order.fulfillment}</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-lg font-bold text-gray-900">
            <span>Total:</span>
            <span>{order.total}</span>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="px-4 py-2 text-sm font-medium text-white bg-aztecPurple border border-transparent rounded-md hover:bg-aztecPurple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aztecPurple transition-colors duration-150"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReceiptModal; 