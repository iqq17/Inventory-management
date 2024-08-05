'use client';

import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, quantity: parseInt(quantity, 10) });
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          label="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          type="number"
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" startIcon={<AddIcon />}>
          Add Item
        </Button>
      </Box>
    </form>
  );
}