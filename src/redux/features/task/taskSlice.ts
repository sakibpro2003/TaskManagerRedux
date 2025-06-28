import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = {
  tasks: [
    {
      id: "id",
      title: "title",
      description: "description",
      dueDate: "duedate",
      isComplete: false,
      priorith: "High",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
