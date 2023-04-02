import { Route, Routes } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactsOperations';

import RootLayout from './RootLayout';
import { HomePage } from './pages/HomePage';
import { ContactAddPage } from './pages/ContactAddPage';

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

  return (
    <> <Routes>
      <Route
        path="/"
        element={<RootLayout path="/" end />}
      >
        <Route path='/' exact
          element={<HomePage />}>
        </Route>

        <Route path='/contacts'
          element={<ContactAddPage />}>
        </Route>
      </Route>
    </Routes>
    </>
  );
};


