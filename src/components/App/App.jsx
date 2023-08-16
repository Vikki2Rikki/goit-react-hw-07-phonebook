import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { Wrapper, MainTitle, Title } from './App.styled';
import { fetchContactsThunk } from 'redux/contacts/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/selectors';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      {error && alert(error)}
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;
