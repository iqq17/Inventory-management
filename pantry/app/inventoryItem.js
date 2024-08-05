'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, TextField, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

export default function InventoryItem({ item, onRemove, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleSave = () => {
    onUpdate(editedItem);
    setIsEditing(false);
  };

  return (
    <Card elevation={3}>
      <CardContent>
        {isEditing ? (
          <Box>
            <TextField
              fullWidth
              label="Name"
              value={editedItem.name}
              onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
              margin="normal"
            />
            <TextField
              fullWidth
              type="number"
              label="Quantity"
              value={editedItem.quantity}
              onChange={(e) => setEditedItem({ ...editedItem, quantity: parseInt(e.target.value, 10) })}
              margin="normal"
            />
          </Box>
        ) : (
          <>
            <Typography variant="h6" component="div">
              {item.name}
            </Typography>
            <Typography color="text.secondary">
              Quantity: {item.quantity}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        {isEditing ? (
          <Button startIcon={<SaveIcon />} onClick={handleSave}>Save</Button>
        ) : (
          <Button startIcon={<EditIcon />} onClick={() => setIsEditing(true)}>Edit</Button>
        )}
        <Button startIcon={<DeleteIcon />} onClick={onRemove} color="secondary">Remove</Button>
      </CardActions>
    </Card>
  );
}