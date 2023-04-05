import React from 'react';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import cssApp from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  saveContact = data => {
    const { name, number } = data;
    if (this.state.contacts.some(el => el.name === data.name)) {
      NotificationManager.info(`${data.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          { name: name, number: number, id: nanoid() },
          ...prevState.contacts,
        ],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContactsList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={cssApp['container']}>
        <h1>Phonebook</h1>
        <ContactForm saveContactFunc={this.saveContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <ContactList
          contacts={this.filterContactsList()}
          onDeleteContact={this.deleteContact}
        />
        <NotificationContainer />
      </div>
    );
  }
}

export default App;
