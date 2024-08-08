import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAllInquiriesAction: any = createAsyncThunk('http://localhost:5000/inventory', async () => {
  try {
    const response = await axios.get('http://localhost:5000/inventory');
    // console.log('response.data en getAllInquiriesAction: ', response.data);
    const data = response.data;
    // console.log('data: ', data)
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});