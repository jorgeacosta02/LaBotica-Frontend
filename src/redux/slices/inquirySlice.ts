import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllInquiriesAction } from '../actions/inquiryActions';
import { IArticleData } from '../../Interfaces/articleInterfaces';

interface InquiryState {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: InquiryState = {
    data: [],
    loading: false,
    error: null,
};

const inquirySlice = createSlice({
    name: 'inquiry',
    initialState,
    reducers: {
      cleanInquiry: (state) => {
        state.data = null;
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(
          getAllInquiriesAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(
          getAllInquiriesAction.fulfilled, (state, action: PayloadAction<IArticleData[]>) => {
          state.loading = false;
          state.data = action.payload;
          // console.log('state.data :', state.data)
        })
        .addCase(
          getAllInquiriesAction.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de los artículos';
          }
        );
    },
    // console.log(articleSlice);
});


export default inquirySlice.reducer;

export const { cleanInquiry } = inquirySlice.actions;

export const selectInquiryState = (state: any) => state.inquiry;

