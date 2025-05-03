import React, { useState } from 'react';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // Perform search logic here
    const searchResults = await performSearch(query);
    setResults(searchResults);
  };

  const performSearch = async (query: string): Promise<string[]> => {
    // Mock search function
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Result 1', 'Result 2', 'Result 3']);
      }, 500);
    });
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
          Search
        </button>
      </form>
      <ul className="mt-4">
        {results.map((result, index) => (
          <li key={index} className="border-b p-2">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
