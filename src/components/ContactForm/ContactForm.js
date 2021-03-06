import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

class ContactForm extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })),
    }

    state = {
      name: '',
      number:'',
      experience: '',
      licence: false,
    }

    nameInputID = uuidv4()
    numberInputID = uuidv4()

    componentDidMount(){
        window.addEventListener('keydown', this.handleInputChange);

        /* щоб форма відправлялась при натисканні Enter лише при фокусі на кнопці сабміт, а не при фокусі будь-де у формі */
        const form = document.querySelector('form');
        form.addEventListener('keydown', (event) => {
        const btnSubmit = form.querySelector('button[type="submit"]');
        if(event.code === 'Enter' && event.target!==btnSubmit) {
           event.preventDefault();
        }
 });
    }

    // componentWillUnmount() {//не відміняється бо форма не розмонтовується
    //     window.removeEventListener('keydown', this.handleInputChange);
    // }

    // shouldComponentUpdate(nextProps, nextState) {//краще юзати PureComponent
    //     return nextState.experience !== this.state.experience;
    // }

    handleInputChange = ({ target, code }) => {
        const { name, value, type, checked } = target;
        if (code === 'Enter') {
            this.setState({
                [name]: type === 'checkbox' ? !checked : value
            });
            return;
        }
        this.setState({
            [name]: type === 'checkbox' ? checked : value
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

    reset = () => {
        this.setState({
            name: '',
            number: '',
            experience: '',
            licence: false,
        })
    }

    render() {
        // console.log(`re-render @ ${Date.now()}`);
        const { handleInputChange, addContact, nameInputID, numberInputID } = this;
        const { name, number, experience, licence } = this.state;

        return <form onSubmit={addContact} className={s.contactForm} >
            <label className={s.labelBlock} htmlFor={nameInputID}>
                <h3 className={s.title}>Name</h3>
                <input id={nameInputID} type="text" name="name" value={name} onChange={handleInputChange} />
            </label>
            <label className={s.labelBlock} htmlFor={numberInputID}>
                <h3 className={s.title}>Number</h3>
                <input id={numberInputID} type="text" name="number" value={number} onChange={handleInputChange}/>
            </label>
            <div className={`${s.labelBlock} ${s.radioBlock}`}>
                <h3 className={s.title}>Your Level</h3>
                <label>
                    <input type="radio" className={s.inputBox} name="experience" value="junior" onChange={handleInputChange} checked={experience==="junior"} />
                    junior
                </label>
                <label>
                    <input type="radio" className={s.inputBox} name="experience" value="middle" onChange={handleInputChange} checked={experience==="middle"} />
                    middle
                </label>
                <label>
                    <input type="radio" className={s.inputBox} name="experience" value="senior" onChange={handleInputChange} checked={experience==="senior"} />
                    senior
                </label>
            </div>
            <label  className={s.labelBlock}>
                <input type="checkbox"  className={s.inputBox} name="licence" onChange={handleInputChange} checked={licence} />
                Agree with Licence
            </label>

            <button type="submit"   className={s.button} disabled={!licence || name==='' || number==='' || experience===''}>Add Contact</button>
        </form>
    }
}

export default ContactForm;