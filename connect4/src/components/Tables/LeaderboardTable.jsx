import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import {
  LeaderboardTableBody,
  LeaderboardTableHeader,
} from '../../imports/components.imports';

const columnLabels = [
  { id: 'username', label: 'Username', minWidth: 170 },
  { id: 'score', label: 'Score', minWidth: 100 },
  { id: 'wins', label: 'Wins', minWidth: 100 },
  { id: 'draws', label: 'Draws', minWidth: 100 },
  { id: 'losses', label: 'Losses', minWidth: 100 },
  { id: 'activeGame', label: 'In Game', minWidth: 170 },
];
const LeaderboardTable = ({ users }) => {
  const [page, setPage] = useState(0);
  const [pageRows, setPageRows] = useState(10);

  const changePage = (event, newPage) => {
    setPage(newPage);
  };

  const changePageRows = (event) => {
    setPageRows(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='Leaderboard'>
          <LeaderboardTableHeader columnLabels={columnLabels} />
          <LeaderboardTableBody
            users={users}
            page={page}
            pageRows={pageRows}
            columnLabels={columnLabels}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={users.length}
        rowsPerPage={pageRows}
        page={page}
        onPageChange={changePage}
        onRowsPerPageChange={changePageRows}
      />
    </Paper>
  );
};

export default LeaderboardTable;
