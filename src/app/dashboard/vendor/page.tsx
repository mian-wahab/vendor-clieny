"use client";
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { VendorDetailsForm } from '@/components/dashboard/vendor/vendor-detail-form';
import VendorTable from '@/components/dashboard/vendor/vendor-table';

const Vendor = () => {
    const [trigger, setTrigger] = useState(false);

    const handleTrigger = () => {
        setTrigger(prev => !prev); // Toggle the trigger to refresh the table
    };

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Vendor</Typography>
            <Stack spacing={5}>
                <VendorDetailsForm onTrigger={handleTrigger} />
                <VendorTable trigger={trigger} />
            </Stack>
        </Stack>
    );
};

export default Vendor;
