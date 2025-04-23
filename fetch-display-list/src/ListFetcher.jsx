// ListFetcher.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListComponent from './ListComponent';
import './ListFetcher.css'; 

const ListFetcher = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(""); // For search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch with Axios
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Filter data
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fetcher-container">
      <h2 className="header-text">User List</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {loading && <p>Loading data...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <ListComponent
          items={filteredData}
          renderItem={(item) => (
            <>
              <strong>{item.name}</strong> <br />
              <em>{item.email}</em>
            </>
          )}
        />
      )}
    </div>
  );
};

export default ListFetcher;
