import ContactList from './ContactList';
import { ContactsForm } from './ContactsForm';
import Filter from './Filter';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const App = () => {
  const data = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(data);
  console.log(contacts);
  console.log(setContacts);

  const [filterStr, setFilter] = useState('');

  useEffect(() => {
    const stor = JSON.parse(localStorage.getItem('contacts'));
    if (stor) {
      setContacts(stor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const res = contacts.some(el => el.name === newContact.name);
    res
      ? alert(`Name ${newContact.name} has already in the list`)
      : setContacts(prevState => [
          ...prevState,
          { id: nanoid(), ...newContact },
        ]);
  };

  const getFilteredData = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filterStr.toLowerCase())
    );
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const filteredData = getFilteredData(contacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onChangeFilterValue={handleFilter} value={filterStr} />
      <ContactList onDelete={handleDelete} paramList={filteredData} />
    </div>
  );
};
