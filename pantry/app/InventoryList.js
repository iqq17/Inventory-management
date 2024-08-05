'use client';

import { Grid } from '@mui/material';
import InventoryItem from '../app/inventoryItem';

export default function InventoryList({ items, onRemoveItem, onUpdateItem }) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <InventoryItem 
            item = {item} 
            onRemove={() => onRemoveItem(item.id)}
            onUpdate={(updatedItem) => onUpdateItem(item.id, updatedItem)}
          />
        </Grid>
      ))}
    </Grid>
  );
}