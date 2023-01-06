import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    allUsers: [],
    allChats: [],
    selectedChat: null,
  },

  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    SetAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    SetAllChats: (state, action) => {
      state.allChats = action.payload;
    },
    SetSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

export const { SetUser, SetAllUsers, SetAllChats, SetSelectedChat } =
  userSlice.actions;

export default userSlice.reducer;
