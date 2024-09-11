"use client"
import * as React from 'react';
import { Button, Stack, Typography, Modal, TextField, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetFtps,
  // createCronJob
 } from '@/service'; // Add your service for API calls
import { Ftp } from '@/components/dashboard/ftp/ftps-table';
import { createCron } from '@/service/schedule/createCron';

export default function Page(): React.JSX.Element {
  const [ftps, setFtps] = React.useState<Ftp[]>([]);
  const [open, setOpen] = React.useState(false); // Modal open state
  const [selectedFtp, setSelectedFtp] = React.useState<Ftp | null>(null); // Selected FTP for which cron job is being created
  const [operations, setOperations] = React.useState('download'); // Cron job operations
  const [schedule, setSchedule] = React.useState(''); // Cron job schedule

  const page = 0;
  const rowsPerPage = 10;
  const paginatedFtps = applyPagination(ftps, page, rowsPerPage);

  const getFtps = async () => {
    const ftps = await GetFtps();
    if (ftps?.error) {
      return setFtps([]);
    }
    setFtps(ftps?.ftps?.data as Ftp[]);
  };

  React.useEffect(() => {
    getFtps();
  }, []);

  const handleCreateCron = (ftp: Ftp) => {
    setSelectedFtp(ftp);
    setOpen(true);
  };

  const handleSubmitCronJob = async () => {
    if (!selectedFtp || !operations || !schedule) {
      return;
    }

    // Call backend API to create the cron job
    const response = await createCron({ ftpId: selectedFtp._id, operations, schedule });
    console.log('response', response);
    
    if (response?.statusText != 'Created') {
      alert('Error creating cron job');
    } else {
      setOpen(false); 
      setOperations('');
      setSchedule('');
    }
  };

  return (
    <Stack spacing={3}>
      <Typography variant="h4">FTP Schedule</Typography>

      {/* FTP Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>FTP Host</TableCell>
              <TableCell>FTP User</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedFtps.map((ftp) => (
              <TableRow key={ftp._id}>
                <TableCell>{ftp.host}</TableCell>
                <TableCell>{ftp.ftpUser}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleCreateCron(ftp)}>
                    Create Cron Job
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Cron Job Creation */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6">Create Cron Job for {selectedFtp?.host}</Typography>

          <TextField
            fullWidth
            label="Operations"
            placeholder="Enter operations"
            value={operations}
            onChange={(e) => setOperations(e.target.value)}
            margin="normal"
            disabled
          />
          <TextField
            fullWidth
            label="Schedule"
            placeholder="Enter schedule (cron format)"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            margin="normal"
          />
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSubmitCronJob}>
              Submit
            </Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}

// Pagination function
function applyPagination(rows: Ftp[], page: number, rowsPerPage: number): Ftp[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

// Modal style
const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
