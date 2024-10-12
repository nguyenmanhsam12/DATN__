import React from 'react';

const Statistics = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Statistics Overview</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Total Revenue</h2>
          <p className="text-xl">$50,000</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Total Orders</h2>
          <p className="text-xl">1,200</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Total Users</h2>
          <p className="text-xl">5,000</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Conversion Rate</h2>
          <p className="text-xl">3.5%</p>
        </div>
      </div>
      {/* Biểu đồ có thể được thêm vào đây */}
    </div>
  );
};

export default Statistics;
