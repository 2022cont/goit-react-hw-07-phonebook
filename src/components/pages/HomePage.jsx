import { Outlet } from 'react-router-dom';
import { FindContactsList } from '../findContacts/findContacts';

export const HomePage = () => {
   
    return (
        <div>
            <FindContactsList />
            <Outlet />
        </div>
    );
}