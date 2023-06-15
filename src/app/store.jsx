import { configureStore } from '@reduxjs/toolkit'
import quizSlice from '../features/question/questionSlice'

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
  },
})