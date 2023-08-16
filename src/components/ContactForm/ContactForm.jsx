import React, { useState } from 'react';
import {
  FormContainer,
  WrapInput,
  Input,
  BtnSubmit,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContactThunk } from 'redux/contacts/thunks';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleInput = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  const addContactHandle = () => {
    const createNewContact = {
      name: name,
      phone: phone,
    };

    if (items?.some(({ name }) => name === createNewContact.name)) {
      alert(`${createNewContact.name} is already in contacts.`);
      reset();
      return;
    }
    dispatch(addContactThunk(createNewContact));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormContainer>
      <form className="form" onClick={evt => evt.preventDefault()}>
        <WrapInput>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </WrapInput>
        <WrapInput>
          <label htmlFor="exampleInputNumber" className="form-label">
            Phone number
          </label>
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </WrapInput>
        <BtnSubmit type="submit" onClick={() => addContactHandle()}>
          Add contact
        </BtnSubmit>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
