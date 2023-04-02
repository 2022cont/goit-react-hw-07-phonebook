import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/contacts/contactsOperations';
import { getContacts } from '../../redux/contacts/selectorsProject';
import css from './Form.module.css';


export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const data = useSelector(getContacts);

    const handleInput = event => {

        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'number':
                setNumber(event.target.value);
                break;
            default:
                return;
        };

    };

    const handleAddSubmit = event => {
        event.preventDefault();
        const value = { name: name, phone: number };
    
        if (data.find(element => element.name === value.name)) {
            reset();
            return alert(name + " is already in contacts")
        }
        if (data.find(element => element.phone === value.phone)) {
            reset();
            return alert(number + " is already in contacts")
        }
        dispatch(addContact({name,number}));
        reset();

    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={css.form} onSubmit={handleAddSubmit}>
            <label className={css.labelForm}>Name</label>
            <input
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                className={css.inputForm}
                required

                onChange={handleInput}
            />

            <label className={css.labelForm}>Number</label>
            <input
                value={number}
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                className={css.inputForm}
                required

                onChange={handleInput}
            />


            <button type='submit' className={css.btnSubmit}>ADD contact</button>
        </form>)

};



