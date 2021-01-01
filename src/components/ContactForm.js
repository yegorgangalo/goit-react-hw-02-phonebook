import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
    static propTypes = {
        //
    }

    state = {
      name: '',
      number:'',
      experience: '',
      licence: false,
    }

    nameInputID = uuidv4()
    numberInputID = uuidv4()

    handleInputChange = ({ target }) => {
      this.setState({
        [target.name]: target.value
      })
    }

    addContact = (event) => {
        event.preventDefault();
        const { name, number, experience } = this.state;

        if(this.props.contacts.some(contact => contact.name===name || contact.number===number) ){
          alert(`Contact with such ${name} or ${number} is already in Phonebook`);
          return;
        }

        this.props.onSubmit({
            id: uuidv4(),
            name: name,
            number: number,
            experience: experience,
        });
        this.reset();
    }

    handleLicenceChange = ({target}) => {
        this.setState({
            licence: target.checked,
        })
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
            experience: '',
            licence: false,
        })
    }

    render() {
        const {name, number, experience, licence } = this.state;
        return <form onSubmit={this.addContact}>
            <label htmlFor={this.nameInputID}>
                Name
                <input id={this.nameInputID} type="text" name="name" value={name} onChange={this.handleInputChange} />
            </label>
            <label htmlFor={this.numberInputID}>
                Number
                <input id={this.numberInputID} type="text" name="number" value={number} onChange={this.handleInputChange}/>
            </label>
            <p>Your Level</p>
            <label>
                junior
                <input type="radio" name="experience" value="junior" onChange={this.handleInputChange} checked={this.state.experience==="junior"} />
            </label>
            <label>
                middle
                <input type="radio" name="experience" value="middle" onChange={this.handleInputChange} checked={this.state.experience==="middle"} />
            </label>
            <label>
                senior
                <input type="radio" name="experience" value="senior" onChange={this.handleInputChange} checked={this.state.experience==="senior"} />
            </label>
            <label>
                <input type="checkbox" name="licence" value="" onChange={this.handleLicenceChange} checked={this.state.licence} />
                Згоден з умовами угоди
            </label>

            <button type="submit" disabled={!licence || name==='' || number==='' || experience===''}>Add Contact</button>
        </form>
    }
}

export default ContactForm;