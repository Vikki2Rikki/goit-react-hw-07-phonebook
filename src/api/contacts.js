import axios from 'axios';

axios.defaults.baseURL = 'https://64d520cfb592423e469528ab.mockapi.io/';

export const fetchContacts = async () => {
  const { data } = await axios.get('contacts');
  console.log('data', data);
  return data;
};

export const addContact = async dataContact => {
  const { data } = await axios.post('/contacts', dataContact);
  console.log('data', data);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
