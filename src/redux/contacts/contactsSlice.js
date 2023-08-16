import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import {
  handleFulfilled,
  handleFulfilledAddContact,
  handleFulfilledAllContacts,
  handleFulfilledDeletedContact,
  handlePending,
  handleRejected,
} from './handler';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './thunks';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledAllContacts)
      .addCase(addContactThunk.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeletedContact)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled', handleFulfilled),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
