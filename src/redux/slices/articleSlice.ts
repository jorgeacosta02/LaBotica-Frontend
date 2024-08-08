import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllArticlesAction } from '../actions/articleActions';
import { IArticleData } from '../../Interfaces/articleInterfaces';

interface ArticleState {
    data: IArticleData[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: ArticleState = {
    data: [],
    loading: false,
    error: null,
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
      cleanArticles: (state) => {
        state.data = null;
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(
          getAllArticlesAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(
          getAllArticlesAction.fulfilled, (state, action: PayloadAction<IArticleData[]>) => {
          state.loading = false;
          state.data = action.payload;
          console.log('state.data :', state.data)
        })
        .addCase(
          getAllArticlesAction.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de los artículos';
          }
        );
    },
    // console.log(articleSlice);
});


export default articleSlice.reducer;

export const { cleanArticles } = articleSlice.actions;

export const selectArticleState = (state: any) => state.article;

