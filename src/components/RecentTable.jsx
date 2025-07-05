import React, { useState, useEffect } from 'react'
import chatIcon from '../assets/chat-line.svg'
import billIcon from '../assets/bill-check.svg'
import searchIcon from "../assets/search-icon.svg"
import transferIcon from "../assets/transfer-sort.svg"
import sortIcon from "../assets/sort-icon.svg"
import dotsIcon from "../assets/menu-dots.svg"
import OrderReceiptModal from './OrderReceiptModal';

const RecentTable = ({ onNewOrder }) => {
    const [activeTab, setActiveTab] = useState('All');
    const [tabs, setTabs] = useState(['All', 'Pending', 'Success', 'Unfulfilled']);
    const [recentOrders, setRecentOrders] = useState([
        {
          order: '#1002',
          date: '11 Feb, 2024',
          customer: 'Wade Warren',
          payment: 'Pending',
          total: '$20.00',
          delivery: 'N/A',
          items: '2 items',
          fulfillment: 'Unfulfilled',
        },
        {
          order: '#1004',
          date: '13 Feb, 2024',
          customer: 'Esther Howard',
          payment: 'Success',
          total: '$22.00',
          delivery: 'N/A',
          items: '3 items',
          fulfillment: 'Fulfilled',
        },
      ]);
    const [showReceipt, setShowReceipt] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Handle new orders from modal
    useEffect(() => {
      if (onNewOrder) {
        const handleNewOrder = (newOrder) => {
          setRecentOrders(prev => [newOrder, ...prev]);
        };
        
        // Store the handler for external use
        window.handleNewOrder = handleNewOrder;
      }
    }, [onNewOrder]);

    // Tab filter logic
    const filteredOrders = recentOrders.filter(order => {
      if (activeTab === 'All') return true;
      if (activeTab === 'Pending') return order.payment === 'Pending';
      if (activeTab === 'Success') return order.payment === 'Success';
      if (activeTab === 'Unfulfilled') return order.fulfillment === 'Unfulfilled';
      // For custom tabs, match payment or fulfillment status (case-insensitive)
      return (
        order.payment.toLowerCase() === activeTab.toLowerCase() ||
        order.fulfillment.toLowerCase() === activeTab.toLowerCase()
      );
    });

    const handleBillClick = (order) => {
      setSelectedOrder(order);
      setShowReceipt(true);
    };
    const handleCloseReceipt = () => {
      setShowReceipt(false);
      setSelectedOrder(null);
    };

    return (
     <>
     <div className='tabs-and-filters flex flex-wrap items-center justify-between mb-4 gap-2'>
      <div className='tabs-group flex flex-wrap p-1 rounded-md bg-iceberg/40 gap-2'>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-md  text-sm font-medium transition-colors duration-150
              ${activeTab === tab ? 'bg-aztecPurple text-white ' : ' text-gray-600  hover:bg-gray-100'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='filter-grp flex flex-wrap gap-2'>
         <button className='p-2 border rounded-md hover:bg-iceberg flex items-center justify-center min-w-[40px] min-h-[40px]'>
            <img className='h-4 w-4' src={searchIcon} alt="search" />
         </button>
         <button className='p-2 border rounded-md hover:bg-iceberg flex items-center justify-center min-w-[40px] min-h-[40px]'>
            <img className='h-4 w-4' src={sortIcon} alt="sort-icon" />
         </button>
         <button className='p-2 border rounded-md hover:bg-iceberg flex items-center justify-center min-w-[40px] min-h-[40px]'>
            <img className='h-4 w-4' src={transferIcon} alt="transfer-icon" />
         </button>
         <button className='p-2 border rounded-md hover:bg-iceberg flex items-center justify-center min-w-[40px] min-h-[40px]'>
            <img className='h-4 w-4' src={dotsIcon} alt="dots-icon" />
         </button>
      </div>
     </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" className="form-checkbox rounded" />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Order</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Customer</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Payment</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Total</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Delivery</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Items</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Fulfillment</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 ">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order, idx) => (
              <tr key={order.order} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox rounded" />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.order}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded-xl border ${order.payment === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
                    <span className={`mr-1 h-2 w-2 rounded-full ${order.payment === 'Pending' ? 'bg-yellow-400' : 'bg-green-400'}`}></span>
                    {order.payment}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.delivery}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{order.items}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded-xl border ${order.fulfillment === 'Unfulfilled' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
                    <span className={`mr-1 h-2 w-2 rounded-full ${order.fulfillment === 'Unfulfilled' ? 'bg-red-400' : 'bg-green-400'}`}></span>
                    {order.fulfillment}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap flex gap-4">
                  <span className=" w-4 h-4 cursor-pointer rounded-full flex items-center justify-center text-gray-400" onClick={() => handleBillClick(order)}>
                   <img src={billIcon} alt="bill-icon" />
                  </span>
                  <span className=" w-4 h-4 cursor-pointer rounded-full flex items-center justify-center text-gray-400">
                    <img src={chatIcon} alt="chat-icon" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <OrderReceiptModal isOpen={showReceipt} onClose={handleCloseReceipt} order={selectedOrder} />
    </>
     
    )
}

export default RecentTable
