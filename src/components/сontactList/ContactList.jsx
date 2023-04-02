import React from 'react';
import { useDispatch } from 'react-redux';

import {deleteContact} from '../../redux/contacts/contactsOperations';
import css from './ContactList.module.css';

export const ContactList = ({ iteams }) => {

    const dispatch = useDispatch();
    return (
        <ul className={css.list}>
            {iteams.map(({ id, name, phone }) => (
                <div key={id} >
                    <li className={css.item}>{name}:
                        <span className={css.textPhone}>
                            {phone}
                        </span>
                    </li>
                    <button
                        type='button'
                        onClick={() => dispatch(deleteContact(id))}
                        className={css.btnDel}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </ul>
    )

};