import { createSlice } from "@reduxjs/toolkit";

const SliceContacts = createSlice({
  name: "Contact",
  initialState: [],
  reducers: {
    add(state, action) { 
      return state.concat(action.payload)
    },
    remove(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    }
  },
});

const SliceFilter = createSlice({
  name: "Filter",
  initialState: "",
  reducers: {
    filterContacts(state, action) {
      return action.payload
    }
  }
});

export const { add, remove } = SliceContacts.actions;
export const { filterContacts } = SliceFilter.actions;

export { SliceFilter, SliceContacts };