import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const LeaderboardTableBody = ({ users, page, pageRows, columnLabels }) => {
  return (
    <TableBody>
      {users.slice(page * pageRows, page * pageRows + pageRows).map((row) => {
        return (
          <TableRow hover role='checkbox' tabIndex={-1} key={row.username}>
            {columnLabels.map((column) => {
              const value = row[column.id];
              return <TableCell key={column.id}>{value}</TableCell>;
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default LeaderboardTableBody;
