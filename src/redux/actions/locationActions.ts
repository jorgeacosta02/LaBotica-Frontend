import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { IArticleFormDB } from '../../Interfaces/articleInterfaces';


export const getAllLocationsAction: any = createAsyncThunk('http://localhost:5000/location', async () => {
  try {
    const response = await axios.get('http://localhost:5000/location');
    // console.log('response.data en getAllLocationsAction: ', response.data);
    const data = response.data;
    // console.log('data: ', data)
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});