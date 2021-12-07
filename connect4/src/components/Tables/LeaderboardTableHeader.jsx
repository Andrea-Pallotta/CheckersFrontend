import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const LeaderboardTableHeader = ({ columnLabels }) => {
  return (
    <TableHead>
      <TableRow>
        {columnLabels.map((column) => (
          <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default LeaderboardTableHeader;
