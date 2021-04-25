import clsx from 'clsx';
import React from 'react';
import { SearchIcon } from '../Icons';

function SearchBar({ className = '' }) {
  return (
    <div
      className={clsx(
        'bg-gray-200 p-2 rounded-full flex items-center px-5',
        className,
      )}
    >
      <SearchIcon size={3} />

      <input
        type="text"
        className="bg-gray-200 outline-none ml-3 text-sm"
        placeholder="Search"
      />

      <div className="border-l border-gray-800 mx-2 h-full">&nbsp;</div>

      <select className="bg-gray-200 outline-none text-sm">
        <option>All</option>
        <option>Posts</option>
        <option>Questions</option>
        <option>Jobs</option>
      </select>
    </div>
  );
}

export default SearchBar;
