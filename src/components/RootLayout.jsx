import { Outlet } from 'react-router-dom';
import { Container } from './App.styled';
import MainNavigation from 'components/navigation/MainNavigation';

export default function RootLayout() {
    return (
        <Container>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
  
        </Container>
    )

} 