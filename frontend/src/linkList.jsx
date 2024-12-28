import React from 'react';

function LinkList({ links }) {
  return (
    <div className="h-[500px] w-[500px] bg-fuchsia-600 overflow-y-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-white font-bold mb-4 text-lg">Link List</h2>
      {links.map((link, index) => (
        (link.charCodeAt(0)>=97 && link.charCodeAt(0)<=122)?<div 
          key={index} 
          className="mb-2 p-3 bg-white rounded shadow hover:bg-gray-100 transition duration-200"
        >
          <p className="break-words text-gray-700">{link}</p>
        </div>:<></>
      ))}
    </div>
  );
}

export default LinkList;
