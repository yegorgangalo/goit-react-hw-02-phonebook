import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
    static defaultProps = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', experience: 'junior'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', experience: 'middle'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79', experience: 'junior'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', experience: 'senior'},
      ],
    }

    static propTypes = {
        //
    }

    state = {
      contacts: this.props.contacts,
      filter: '',
    }

    changeFilter = ({ target: {name, value} }) => {
      this.setState({
        [name]: value.toLowerCase(),
      });
    }

    formSubmitHandler = (newContact) => {
        this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact]
        }
      })
    }

    render() {
      const { contacts, filter } = this.state;
      const filteredContacts = contacts.filter(contact =>
        Object.values(contact).some(val =>
          val.toLowerCase().includes(filter)));

      return (<>
        <Form onSubmit={this.formSubmitHandler}/>
        <h1>Contacts</h1>
        <input type="text" name="filter" value={filter} onChange={this.changeFilter} />
        <ul>
          {filteredContacts.map(({ id, name, number, experience }) =>
            <li key={id}>
              <span>{name}: </span>
              <span>{number}, </span>
              <span>{experience};</span>
            </li>)}
        </ul>
        </>
        )
    }
}

export default App;
