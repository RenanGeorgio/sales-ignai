import { createSlice } from "@reduxjs/toolkit";
import { IClient } from "types/interfaces";

const initialState: IClient[] = []; // Defina o tipo do estado inicial aqui

const { reducer, actions } = createSlice({
  name: "clients",
  initialState: initialState,
  reducers: {
    updateClients(state, action) {
      state = action.payload;
      return state;
    },
    addClient(state, action) {
      state.push(action.payload);
    },
    updateClient(state, action) {
      const { _id } = action.payload;
      const clientIndex = state.findIndex((client) => client._id === _id);
      state[clientIndex] = action.payload;
    },
    removeClient(state, action) {
      return state.filter((client) => client._id !== action.payload);
    },

    // contatos
    updateContactList(state, action) {
      const { id, contactInfo } = action.payload;
      return state.map((client) => {
        if (client._id === id) {
          return {
            ...client,
            contact: {
              ...client.contact,
              contactInfo,
            },
          };
        } else {
          return client;
        }
      });
    },
  },
});

export { actions as clientsActions };
export { reducer as clientsReducer };
