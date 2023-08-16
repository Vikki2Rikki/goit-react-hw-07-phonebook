import React from 'react';
import { ItemWrap, DeleteBtn, ItemText } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/thunks';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ItemWrap>
      <ItemText>
        <p>{contact.name}: </p>
        <p> {contact.phone}</p>
      </ItemText>
      <DeleteBtn onClick={() => dispatch(deleteContactThunk(contact.id))}>
        X
      </DeleteBtn>
    </ItemWrap>
  );
};

export default ContactListItem;
