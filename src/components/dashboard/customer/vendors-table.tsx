'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import DrawIcon from '@mui/icons-material/Draw';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelection } from '@/hooks/use-selection';

function noop(): void {
  // do nothing
}

export interface Vendor {
  _id: string;
  id: string;
  fullName: string;
  userName: string;
  email: string;
  ftps: any[];
  createdAt: string;
}

interface VendorsTableProps {
  count?: number;
  page?: number;
  rows?: Vendor[];
  rowsPerPage?: number;
  setSelectedRow: (row: any) => void;
  setIsOpen: (open: boolean) => void;
  handleDelete: (id: string) => Promise<void>;
}

export function VendorsTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  setSelectedRow,
  setIsOpen,
  handleDelete
}: VendorsTableProps): React.JSX.Element {
  const rowIds = React.useMemo(() => {
    return rows.map((Vendor) => Vendor.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>

              <TableCell>Full Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Total FTP</TableCell>
              <TableCell>Join Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              console.log(row)
              const isSelected = selected?.has(row.id);

              return (
                <TableRow hover key={row.id} selected={isSelected}>

                  <TableCell>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      <Typography variant="subtitle2">{row.fullName}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell>
                    {row.email}
                  </TableCell>
                  <TableCell>{row.ftps?.length}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Avatar onClick={() => { setSelectedRow(row); setIsOpen(true) }} sx={{ cursor: 'pointer', background: '#4E36F5' }}><DrawIcon /></Avatar>
                      <Avatar onClick={() => { handleDelete(row?._id as string) }} sx={{ cursor: 'pointer', background: '#ff0e0e' }}><DeleteForeverIcon /></Avatar>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
