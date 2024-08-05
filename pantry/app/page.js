'use client';

import { useState } from 'react';
import { Container, Box, Paper } from '@mui/material';
import Header from '../app/header';
import SearchBar from '../app/searchBar';
import AddItemForm from '../app/AddItemForm';
import InventoryList from '../app/InventoryList';
import { useInventory } from '../app/useInventory';

export default function Home() {
  const { inventory, addItem, removeItem, updateItem } = useInventory();
  const [searchTerm, setSearchTerm] = useState('');

  // Ensure that inventory is an array and each item has a 'name' property
  const filteredInventory = Array.isArray(inventory) ? inventory.filter(item =>
    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Header />
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <SearchBar onSearch={setSearchTerm} />
          <AddItemForm onAddItem={addItem} />
        </Paper>
        <InventoryList
          items={filteredInventory} 
          onRemoveItem={removeItem}
          onUpdateItem={updateItem}
        />
      </Box>
    </Container>
  );
}
