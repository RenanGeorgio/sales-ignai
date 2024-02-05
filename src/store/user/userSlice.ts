import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "user",
  initialState: {
    name: null,
    email: null,
    company: null,
  },
  reducers: {
    updateUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export { actions as userActions };
export { reducer as userReducer };
