import React, { useState, useMemo } from "react";
import _ from "lodash"; // Install lodash for debounce

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Debounced search handler
  const handleSearch = _.debounce((value) => {
    setSearchTerm(value);
  }, 300); // Debounce for 300ms

  // Filter results using useMemo for efficiency
  const filteredResultsMemo = useMemo(() => {
    if (!searchTerm) return data; // Return all if input is empty
    return data.filter(
      (item) => item.toLowerCase().includes(searchTerm.toLowerCase()) // Substring match
    );
  }, [searchTerm, data]);

  return (
    <div>
      <div className="h-[500px] w-[500px] bg-fuchsia-600 overflow-y-auto p-4 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-white font-bold mb-4 text-lg">Link List</h2>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
           className="input input-bordered w-full max-w-xs pl-4 mb-4"
        />
        <ul>
          {filteredResultsMemo.map((link, index) =>
            link.charCodeAt(0) >= 97 && link.charCodeAt(0) <= 122 ? (
              <div
                key={index}
                className="mb-2 p-3 bg-white rounded shadow hover:bg-gray-100 transition duration-200"
              >
                <p className="break-words text-gray-700">{link}</p>
              </div>
            ) : (
              <></>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
