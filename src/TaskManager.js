import React, { useState, useEffect } from 'react';
import { DataTable, TableHeader, TableHeaderCell, TableRow, TableBody, TableCell } from 'shadcn-ui';
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortColumn, setSortColumn] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Fetch tasks from an API
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  const sortTasks = (column) => {
    const order = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedTasks = [...filteredTasks].sort((a, b) => {
      if (order === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      }
      return a[column] < b[column] ? 1 : -1;
    });
    setTasks(sortedTasks);
    setSortColumn(column);
    setSortOrder(order);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <DataTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell onClick={() => sortTasks('title')}>Title</TableHeaderCell>
            <TableHeaderCell onClick={() => sortTasks('dueDate')}>Due Date</TableHeaderCell>
            <TableHeaderCell onClick={() => sortTasks('priority')}>Priority</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map(task => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.dueDate}</TableCell>
              <TableCell>{task.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </DataTable>
    </div>
  );
};

export default TaskManager;
