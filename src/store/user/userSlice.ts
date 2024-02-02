import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    updateUser(state, action) {
        state.user = action.payload;
    }
  },
});

export { actions as userActions }
export { reducer as userReducer }