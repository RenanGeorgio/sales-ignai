import { createSlice } from "@reduxjs/toolkit";
import { IContactInfo } from "types/interfaces";


const initialState: IContactInfo[] = []; // Defina o tipo do estado inicial aqui

const { reducer, actions } = createSlice({
  name: "clientContacts",
  initialState: initialState,
  reducers: {
    updateClientContacts(state, action) {
      state = action.payload
      return state
    }
  },
});

export { actions as clientContactsActions };
export { reducer as clientContactsReducer };
