// src/components/DataTable.js
import { useEffect, useState } from 'react';
import {MaterialReactTable} from 'material-react-table';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from a fake API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const columns = [
    { accessorKey: 'userId', header: 'User ID' },
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'title', header: 'Title' },
    { accessorKey: 'body', header: 'Body' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Data Table From Data Base
      </Typography>
      <MaterialReactTable
        columns={columns}
        data={data}
        state={{ isLoading: loading }}
        enableColumnResizing
        enablePagination
        enableRowSelection
        enableSorting
        enableGlobalFilter
      />
    </Container>
  );
};

export default DataTable;
