import React from 'react';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { todoDeleted } from '../../redux/contacts/reducerProject';

export const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    <li key={id} >{name}:
        <span className={css.textNumber}>
            {number}
        </span>
        <button
            type='button'
            onClick={() => dispatch(todoDeleted(id))}
            className={css.btnDel}
        >
            Delete
        </button>
    </li>
};