import React, { Component } from 'react';

class ContactList extends Component {
    static propTypes = {
        //
    }

    state = {

    }

    filterContacts = () => {
        const {contacts, filter} = this.props;
        return contacts.filter(contact =>
        Object.values(contact).some(val =>
          val.toLowerCase().includes(filter)));
    }

    render() {
        const filteredContacts = this.filterContacts();

        return <ul>
          {filteredContacts.map(({ id, name, number, experience }) =>
            <li key={id}>
              <span>{name}: </span>
              <span>{number}, </span>
              <span>{experience};</span>
              <button type="button" onClick={()=> this.props.deleteContact(id)} >Delete</button>
            </li>)}
        </ul>
    }
}

export default ContactList;