import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../app/firebase';

export function useInventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'inventory'));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInventory(items);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  const addItem = async (item) => {
    try {
      const docRef = await addDoc(collection(db, 'inventory'), item);
      setInventory([...inventory, { id: docRef.id, ...item }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await deleteDoc(doc(db, 'inventory', id));
      setInventory(inventory.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      await updateDoc(doc(db, 'inventory', id), updatedItem);
      setInventory(inventory.map(item => item.id === id ? { ...item, ...updatedItem } : item));
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return { inventory, addItem, removeItem, updateItem };
}