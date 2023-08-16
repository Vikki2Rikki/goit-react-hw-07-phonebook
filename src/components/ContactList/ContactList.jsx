import React from 'react';
import ContactListtItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.slyled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filtredContact = () =>
    filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <List>
      {contacts &&
        filtredContact().map(contact => (
          <ContactListtItem key={contact.id} contact={contact} />
        ))}
    </List>
  );
};

export default ContactList;
