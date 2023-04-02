import { Outlet } from 'react-router-dom';
import Form from '../form/Form';

export const ContactAddPage = () => {
  return (
    <div>
      <h2>Contacts Create</h2>
      <Form />
      <Outlet />
    </div>
  );
}