import React, { useState } from 'react';
import StatsGrid from './StatsGrid';
import RecentTable from './RecentTable';
import Header from './Header';
import CreateOrderModal from './CreateOrderModal';
import calendarIcon from "../assets/calender-icon.svg"
import exportIcon from "../assets/export-icon.svg"
import addCircleIcon from "../assets/add-circle-icon.svg"

const Dashboard = ({ isSidebarOpen}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateOrder = (newOrder) => {
    // Add the new order to the table
    if (window.handleNewOrder) {
      window.handleNewOrder(newOrder);
    }
  };

  return (
    <div className={`min-h-screen w-[100%]  transition-all duration-300 ${
      isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
    }`}>
      
      <header>
      <Header></Header>
      </header>
      
      <div className='w-full px-6 flex justify-between items-start'>
        <div className='flex flex-col gap-4'>
        <h1 className='text-2xl tracking-wider font-semibold '>
        Orders
        </h1>
        <button className='secondary-button text-md items-center bg-iceberg/40 hover:shadow-sm hover:bg-iceberg/60 rounded-md border py-2 px-3 border-gray-200 flex gap-2 '>
          <img className='h-4 w-4' src={calendarIcon} alt="calendar" />
         <span className='text-sm text-gray-600'>Jan 1 - Jan 6, 2025</span>
        </button>
        </div>
         
        <div className='flex flex-wrap gap-2 justify-end'>
        <button className='secondary-button text-md items-center bg-iceberg/40 hover:shadow-sm hover:bg-iceberg/60  rounded-md border py-2 px-3 border-gray-200 flex gap-2 '>
          <img className='h-4 w-4' src={exportIcon} alt="export-icon" />
         <span className='text-sm text-gray-600'>Export</span>
        </button>
        <button className='secondary-button text-md items-center bg-iceberg/40 hover:shadow-sm hover:bg-iceberg/60  rounded-md border py-2 px-3 border-gray-200 flex gap-2 '>
         <span className='text-sm text-gray-600'>More Actions</span>
        </button>
        <button 
          onClick={() => setIsModalOpen(true)}
          className='primary-button text-md items-center bg-aztecPurple  rounded-md border py-2 px-3 flex gap-2 '
        >
        <img className='h-4 w-4' src={addCircleIcon} alt="add" />
         <span className='text-sm text-white'>Create Order</span>
        </button>
        </div>
      </div>

      <main className="p-6">
       <StatsGrid></StatsGrid>
       <RecentTable onNewOrder={handleCreateOrder}></RecentTable>
      </main>

      <CreateOrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateOrder}
      />
    </div>
  );
};

export default Dashboard;