export const handleFulfilledAllContacts = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledAddContact = (state, { payload }) => {
  state.items.unshift(payload);
};

export const handleFulfilledDeletedContact = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload.id);
};
export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
