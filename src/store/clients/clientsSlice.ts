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
      const { id, contacts } = action.payload;
      console.log(contacts)
      state.map((client) => {
        if (client._id === id) {
          client.contacts = contacts;
          return client;
        } else {
          return client;
        }
      });
    },

    updateAddressList(state, action) {
      const { id, address } = action.payload;
      state.map((client) => {
        if (client._id === id) {
          client.adresses= address;
          return client;
        } else {
          return client;
        }
      });
    },

    removeAddress(state, action) {
      const { id, addressId } = action.payload;
      state.map((client) => {
        if (client._id === id) {
          client.adresses = client.adresses.filter((address) => address._id !== addressId);
          return client;
        } else {
          return client;
        }
      });
    },

    removeContact(state, action) {
      const { id, contactId } = action.payload;
      state.map((client) => {
        if (client._id === id) {
          client.contacts = client.contacts.filter((contact) => contact._id !== contactId);
          return client;
        } else {
          return client;
        }
      });
    },
  },
});

export { actions as clientsActions };
export { reducer as clientsReducer };
