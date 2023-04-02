import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOperations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);

export const contactsReduser = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers:
    (builder) => {
      builder

        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.isLoading = true;
        })

        .addCase(addContact.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })

        .addCase(deleteContact.fulfilled, (state, action) => {
          const index = state.items.findIndex(
            item => item.id === action.payload.id
          );
          state.items.splice(index, 1);
        })

        .addMatcher(isAnyOf(...getActions('pending')), state => {
          state.isLoading = true;
        })
        .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })

    },


});

export default contactsReduser.reducer;
