import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ApiInfoTable = ({ maxHeight }) => {
  const [apiData, setApiData] = useState([
    { productName: 'Product A', unitPrice: 10, revenue: 100 },
    { productName: 'Product B', unitPrice: 15, revenue: 200 },
    { productName: 'Product C', unitPrice: 20, revenue: 150 },
    { productName: 'Product A', unitPrice: 10, revenue: 100 },
    { productName: 'Product B', unitPrice: 15, revenue: 200 },
    { productName: 'Product C', unitPrice: 20, revenue: 150 },
  ]);

  return (
    <TableContainer component={Paper} style={{ maxHeight: maxHeight, overflowY: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.productName}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApiInfoTable;
