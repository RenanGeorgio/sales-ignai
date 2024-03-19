import { createSlice } from "@reduxjs/toolkit";
import { Leads } from "../../types";

const initialState: Leads[] = []; // Defina o tipo do estado inicial aqui

const { reducer, actions } = createSlice({
  name: "leads",
  initialState: initialState,
  reducers: {
    updateLeads(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export { actions as leadsActions };
export { reducer as leadsReducer };
