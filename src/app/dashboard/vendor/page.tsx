import React from 'react'
import Stack from '@mui/material/Stack';
import { Grid, Typography } from '@mui/material';
import { VendorDetailsForm } from '@/components/dashboard/vendor/vendor-detail-form';


const Vendor = () => {
    return (
        <Stack spacing={3}>
            <div>
                <Typography variant="h4">Vendor</Typography>
            </div>
            <Grid container spacing={3}>
                {/* <Grid lg={4} md={6} xs={12}>
                    <AccountInfo />
                </Grid> */}
                <Grid lg={8} md={6} xs={12}>
                    <VendorDetailsForm />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Vendor