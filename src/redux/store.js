import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contacts/reducerProject';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },

})


