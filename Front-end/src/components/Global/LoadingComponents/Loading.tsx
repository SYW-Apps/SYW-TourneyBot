import { CircularProgress, Typography, Box, Grid } from '@mui/material';

export default function Loading() {
    return (
        <Grid className='loading'>
            <Grid className="loading-container">
                <Grid className="loading-container">
                    <CircularProgress size={100} className="loading-icon" style={{ color: '#2DF' }} />
                </Grid>
                <Grid className="loading-container">
                    <Typography variant="h5">Loading...</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}