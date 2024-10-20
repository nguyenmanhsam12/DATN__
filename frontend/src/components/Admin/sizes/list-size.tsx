import { useContext } from "react";
import { SizeCT } from "../../../context/SizeContext";
import { Sizes } from "../../../interface/size";
import { Link } from "react-router-dom";

const ListSize = () => {
    const { sizes, onDelete } = useContext(SizeCT);
    

    if (!Array.isArray(sizes) || sizes.length === 0) {
        return <div>No sizes available</div>; 
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Size</th>
                            <th className="border border-gray-300 px-4 py-2">Created At</th>
                            <th className="border border-gray-300 px-4 py-2">Updated At</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sizes.map((size: Sizes, i: number) => (
                            <tr key={size.id}>
                                <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{size.size}</td>
                                <td className="border border-gray-300 px-4 py-2">{size.created_at ? String(size.created_at) : 'Không có'}</td>
                                <td className="border border-gray-300 px-4 py-2">{size.updated_at ? String(size.updated_at) : 'Không có'}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link to={`/dashboard/edit-sizes/${size.id}`} className="bg-yellow-400 text-white px-2 py-1 rounded">Edit</Link>
                                    <button onClick={()=> onDelete(size.id)} className=" ml-3 bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListSize;
