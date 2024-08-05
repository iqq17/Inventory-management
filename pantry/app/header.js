'use client';

import { Typography, Box } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function Header() {
  return (
    <Box display="flex" alignItems="center" mb={4}>
      <InventoryIcon sx={{ fontSize: 40, mr: 2 }} color="primary" />
      <Typography variant="h4" component="h1" fontWeight="bold">
        Inventory Management System
      </Typography>
    </Box>
  );
}