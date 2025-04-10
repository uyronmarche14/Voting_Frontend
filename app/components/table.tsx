"use client";
import React, { useState } from "react";

interface TableProps {
  title: string;
  data: {
    [key: string]: string;
  }[];
  onSelectionChange?: (selectedItems: any[]) => void;
}

export default function Table({ title, data, onSelectionChange }: TableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...Array(data.length).keys()]);
    }
    setSelectAll(!selectAll);
    onSelectionChange?.(selectAll ? [] : data);
  };

  const handleRowSelect = (index: number) => {
    const newSelectedRows = selectedRows.includes(index)
      ? selectedRows.filter((i) => i !== index)
      : [...selectedRows, index];

    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.length === data.length);
    onSelectionChange?.(newSelectedRows.map((i) => data[i]));
  };

  if (!data || data.length === 0) {
    return (
      <div className="relative overflow-x-auto pt-4">
        <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
          <thead className="text-base text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                {title}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={1}
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  const columnHeaders = Object.keys(data[0]);

  return (
    <div className="relative overflow-x-auto pt-4">
      <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
        <thead className="text-base text-gray-700 uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-3">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </th>
            {columnHeaders.map((header, index) => (
              <th
                scope="col"
                key={index}
                className="px-6 py-3 text-gray-700 font-bold hover:text-primary"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className={`bg-white hover:bg-gray-50 transition duration-300 ease-in-out ${
                selectedRows.includes(rowIndex) ? "bg-blue-50" : ""
              }`}
            >
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => handleRowSelect(rowIndex)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
              </td>
              {columnHeaders.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out"
                  onClick={() => handleRowSelect(rowIndex)}
                >
                  {item[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
