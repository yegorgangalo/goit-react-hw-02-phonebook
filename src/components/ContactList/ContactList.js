import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends Component {
    static propTypes = {
      deleteContact: PropTypes.func.isRequired,
      filter: PropTypes.string.isRequired,
        contacts: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            experience: PropTypes.string.isRequired,
        })),
    }

    filterContacts = () => {
        const {contacts, filter} = this.props;
        return contacts.filter(contact =>
        Object.values(contact).some(val =>
          val.toLowerCase().includes(filter)));
    }

    render() {
        const filteredContacts = this.filterContacts();

        return <ul className={s.contactList} >
          {filteredContacts.map(({ id, name, number, experience }) =>
            <li key={id} className={s.item} >
              <span>{name}:</span>
              <span>{number},</span>
              <span>{experience}</span>
              <button type="button" onClick={()=> this.props.deleteContact(id)} >Delete</button>
            </li>)}
        </ul>
    }
}

export default ContactList;