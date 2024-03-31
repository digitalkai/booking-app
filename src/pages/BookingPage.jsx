import { getAuth } from 'firebase/auth';
import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import IconButton from '../components/IconButton';
import Houses from '../components/Houses';


export default function BookingPage() {

    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        navigate("/login");

    }

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>
            <div>

                <Container>
                    <Row>
                        <h2>Welcome, {currentUser.email}</h2>
                        <IconButton
                            className="bi bi-journals"
                            text="Check bookings"
                        />
                        <IconButton
                            className="bi bi-door-closed"
                            text="Logout"
                            onClick={handleLogout}
                        />


                    </Row>
                    <Houses />
                </Container>
            </div>

        </>
    );
}