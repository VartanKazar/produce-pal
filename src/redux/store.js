import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from "./slices/recipesSlice"
import userReducer from "./slices/userSlice"
import plannerReducer from "./slices/plannerSlice"

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
    planner: plannerReducer
  },
});
