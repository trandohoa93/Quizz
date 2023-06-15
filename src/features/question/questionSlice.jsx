import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = 'https://opentdb.com/api.php?amount=5';

export const fetchQuiz = createAsyncThunk(
  "quiz/fetchQuiz",
  async () => {
    const response = await fetch(API_BASE_URL);
    const ListQuiz = await response.json();
    return ListQuiz;
  }
);

const initialState = {
  waiting: true,
  loading: true,
  listQuiz: [],
  showResult: false,
  correct: 0,
  time: 0
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    start: (state) => {
      state.waiting = false
    },
    reset: (state) => {
      state.waiting = true
    },
    openResult: (state) => {
      state.showResult = true
    },
    closeResult: (state) => {
      state.showResult = false
      state.waiting = true
      state.correct = 0;
      state.time = 0;
    },
    setCorrect: (state) => {
      state.correct = state.correct + 1;
    },
    setTime: (state) => {
      state.time = state.time + 1;
      console.log(state.time)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuiz.fulfilled, (state, action) => {
        state.loading = false;
        state.listQuiz = action.payload;
      })
      .addCase(fetchQuiz.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {start, reset, openResult, closeResult, setCorrect, setTime, resetTime} = quizSlice.actions;

export default quizSlice.reducer;