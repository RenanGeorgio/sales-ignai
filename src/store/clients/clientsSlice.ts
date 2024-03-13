import { createSlice } from "@reduxjs/toolkit";
import { IClient } from "types/interfaces";


const initialState: IClient[] = []; // Defina o tipo do estado inicial aqui

const { reducer, actions } = createSlice({
  name: "clients",
  initialState: initialState,
  reducers: {
    updateClients(state, action) {
      state = action.payload
      return state
    }
  },
});

export { actions as clientsActions };
export { reducer as clientsReducer };
