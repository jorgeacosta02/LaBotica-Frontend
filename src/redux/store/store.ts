import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import langReducer from '../slices/langSlice'
import messageReducer from '../slices/messageSlice'
import userReducer from '../slices/userAuthSlice'
import articleReducer from '../slices/articleSlice'
import locationReducer from '../slices/locationSlice'
import inquiryReducer from '../slices/inquirySlice'


export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    lang: langReducer,
    message: messageReducer,
    userReducer: userReducer,
    article: articleReducer,
    location: locationReducer,
    inquiry: inquiryReducer,
  }
})