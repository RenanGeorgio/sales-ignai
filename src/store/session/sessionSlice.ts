import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "session",
  initialState: {
    status: false,
  },
  reducers: {
    signIn(state) {
      return {
        ...state,
        status: true,
      };
    },
    signOut() {
      return {
        status: false,
      }; 
    },
  }
});

export { actions as sessionActions };
export { reducer as sessionReducer };
