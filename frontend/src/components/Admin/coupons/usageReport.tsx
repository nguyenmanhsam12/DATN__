import React from 'react';

const UsageReport = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Usage Report</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-4 text-left">Coupon Code</th>
            <th className="border border-gray-300 p-4 text-left">Used By</th>
            <th className="border border-gray-300 p-4 text-left">Usage Count</th>
            <th className="border border-gray-300 p-4 text-left">Used At</th>
            <th className="border border-gray-300 p-4 text-left">Revenue Impact</th>
          </tr>
        </thead>
        <tbody>
          {/* Dữ liệu mẫu */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-4">SAVE20</td>
            <td className="border border-gray-300 p-4">Nguyễn Văn A</td>
            <td className="border border-gray-300 p-4">10</td>
            <td className="border border-gray-300 p-4">2024-10-01</td>
            <td className="border border-gray-300 p-4">$200</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-4">FREESHIP</td>
            <td className="border border-gray-300 p-4">Trần Thị B</td>
            <td className="border border-gray-300 p-4">5</td>
            <td className="border border-gray-300 p-4">2024-09-30</td>
            <td className="border border-gray-300 p-4">$50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsageReport;
