import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import ContactList from './ContactList';
import ContactsForm from './ContactsForm';
import Filter from './Filter';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  function handleAdd(newContact) {
    setContacts([...contacts, newContact]);
  }

  function handleSearch(e) {
    setFilter(e.currentTarget.value);
  }

  function handleFilter() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }

  function handleDelete(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm onFormChange={handleAdd} contacts={contacts} />
      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter handleSearch={handleSearch} />
          <ContactList contacts={handleFilter()} handleDelete={handleDelete} />
        </>
      ) : (
        <p>
          No contacts yet. <br /> It's time to create new contacts!
        </p>
      )}
    </Container>
  );
}
