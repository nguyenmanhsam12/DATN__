import React, { useState, useEffect, useContext } from 'react';
import api from '../../../config/axios';
import { ICategory } from '../../../interface/categories';
import { CategoryCT } from '../../../context/CategoryContext';
import { Link } from 'react-router-dom';

type Props = {};

const ListCategories = (props: Props) => {
  const {categories, onDelete} = useContext(CategoryCT)

  return (
        <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Danh Sách Danh Mục</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Tên</th>
              <th className="py-2 px-4 border-b">Slug</th>
              <th className="py-2 px-4 border-b">Parent ID</th>
              <th className="py-2 px-4 border-b">Ngày Tạo</th>
              <th className="py-2 px-4 border-b">Ngày Cập Nhật</th>
              <th className="py-2 px-4 border-b">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category: ICategory, i:number)=>(
                <tr key={category.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{i+1}</td>
                  <td className="py-2 px-4 border-b">{category.name}</td>
                  <td className="py-2 px-4 border-b">{category.slug}</td>
                  <td className="py-2 px-4 border-b">{category.parent_id}</td>
                  <td className="py-2 px-4 border-b">{category.created_at ? String(category.created_at) : 'Không có'}</td>
                  <td className="py-2 px-4 border-b">{category.updated_at ? String(category.updated_at) : 'Không có'}</td>
                  <td className="py-2 px-4 border-b">
                    <Link to={`/dashboard/edit-categories/${category.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</Link>
                    <button onClick={()=>onDelete(category.id)} className="ml-3 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default ListCategories;
