import React from 'react';
import JobList from './components/JobList';
import './styles/style.scss';
import { IoIosRefresh } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

function App() {
  return (
    <div className="App">
      <header className="header bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Jobs Lists</h1>
        <div className="buttons flex space-x-2 mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Add New Job</button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">
          <IoIosRefresh />
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">
          <HiDotsVertical />
          </button>
        </div>
      </header>
      <main className="table-container p-4">
        <JobList />
      </main>
    </div>
  );
}

export default App;
