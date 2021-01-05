import React, { PureComponent } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends PureComponent {
    static defaultProps = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', experience: 'junior'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', experience: 'middle'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79', experience: 'junior'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', experience: 'senior'},
        {id: 'id-5', name: 'Ann Hits', number: '227-91-46', experience: 'junior'},
        {id: 'id-6', name: 'Ed Clirence', number: '217-01-46', experience: 'middle'},
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

    deleteContact = (id) => {
      this.setState((prevState) => {
        const withoutDelContactArray = prevState.contacts.filter(contact => contact.id !==id)
        return {
          contacts: [...withoutDelContactArray]
        }
      })
    }

    render() {
      const { contacts, filter } = this.state;

      return (<>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact} />
        </>
        )
    }
}

export default App;
