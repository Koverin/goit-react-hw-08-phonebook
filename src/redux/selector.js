import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.isLoading;
export const selectError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contact, filter) => {
    return contact.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
