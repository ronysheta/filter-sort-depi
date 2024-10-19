import React, { useState, useEffect } from 'react';
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Page() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching data. Please try again later.");
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

async function getData() {
  const response = await fetch('http://localhost:8000/tasks');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}