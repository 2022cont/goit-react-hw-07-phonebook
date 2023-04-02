import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from './dataProject';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {

    try {
      const contacts = await contactsApi.getContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {

    try {
      const contact = await contactsApi.getContactsId(contactId);
      return contact;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (value, { rejectWithValue }) => {

    try {
      const contact = await contactsApi.getAddContact( value );
      return contact;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
);