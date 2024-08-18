"use client";
import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

import SpringModal from '@/components/modal';
import { VendorManagement } from '@/components/vendors/Vendor';
import { Vendor, VendorsTable } from '@/components/dashboard/customer/vendors-table';
import { VendorsFilters } from '@/components/dashboard/customer/vendors-filters';
import { GetVendors } from '@/service';
import { ToastType } from '@/contexts/enums';
import { useUser } from '@/hooks/use-user';

// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [

] satisfies Vendor[];



export default function Page(): React.JSX.Element {
  const { toast } = useUser();
  const [vendors, setVendors] = React.useState<Vendor[]>([]);
  const [keyword, setKeyword] = React.useState<string>('');
  const [open, setIsOpen] = React.useState<boolean>(false);
  const page = 0;
  const rowsPerPage = 10;

  const paginatedCustomers = applyPagination(vendors, page, rowsPerPage);
  const handleOpenCreateVendor = () => {
    setIsOpen(!open);
  }
  const handleAction = () => {
    getVendors();
  }

  const getVendors = async () => {
    const vendors = await GetVendors();
    if (vendors?.error) {
      toast.setToast({ isOpen: true, message: vendors.error, type: ToastType.ERROR });
      return setVendors([]);
    }
    console.log('vendors?.vendors?.data', vendors?.vendors?.data);
    setVendors(vendors?.vendors?.data as Vendor[]);
  }

  React.useEffect(() => {
    getVendors();
  }, []);

  const filteredVendors = vendors?.filter((vendor) => {
    return vendor?.fullName?.toLowerCase()?.includes(keyword) || vendor?.email?.toLowerCase()?.includes(keyword) || vendor?.userName?.toLowerCase()?.includes(keyword);
  });
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Vendors</Typography>
        </Stack>
        <div>
          <Button onClick={handleOpenCreateVendor} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <SpringModal open={open} setOpen={setIsOpen} content={<VendorManagement action={handleAction} />} />
      <VendorsFilters setKeyword={setKeyword} />
      <VendorsTable
        count={paginatedCustomers.length}
        page={page}
        rows={filteredVendors}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Vendor[], page: number, rowsPerPage: number): Vendor[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
