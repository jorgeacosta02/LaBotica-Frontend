import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllLocationsAction } from '../actions/locationActions';
import { ILocationData } from '../../Interfaces/locationInterfaces';

interface ILocationState {
    data: ILocationData[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: ILocationState = {
    data: [],
    loading: false,
    error: null,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
      cleanLocations: (state) => {
        state.data = null;
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(
          getAllLocationsAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(
          getAllLocationsAction.fulfilled, (state, action: PayloadAction<ILocationData[]>) => {
          state.loading = false;
          state.data = action.payload;
          console.log('state.data :', state.data)
        })
        .addCase(
          getAllLocationsAction.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de los artículos';
          }
        );
    },
    // console.log(articleSlice);
});


export default locationSlice.reducer;

export const { cleanLocations } = locationSlice.actions;

export const selectLocationState = (state: any) => state.location
