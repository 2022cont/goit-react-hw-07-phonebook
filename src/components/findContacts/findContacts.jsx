import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getContacts, getIsLoading, getError } from '../../redux/contacts/selectorsProject';
import { ContactList } from 'components/сontactList/ContactList';

import css from './findContacts.module.css';



export const FindContactsList = () => {
    const [filterName, setFilterName] = useState('');
    const data = useSelector(getContacts);

    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);


    const onInputClick = event => {
        event.preventDefault();
        setFilterName(event.target.value);
    };


    const filtered = !filterName
        ? data
        : data.filter((contact) =>
            contact.name.toLowerCase().includes(filterName.toLowerCase())
        );

    return (
        <>
            <label className={css.title}>Find contact </label>
            <input
                type="text"
                placeholder={filterName ? filterName : 'Search ...'}
                value={filterName}

                onChange={onInputClick}
            />
            {error && (
                <p> Reload the page, please  and try again</p>
            )}

            <h2>Phone contacts</h2>
            {!isLoading ? (<b>Loading phonebook data.... </b>) : (
                <ContactList iteams={filtered} />
            )}
        </>
    )

}