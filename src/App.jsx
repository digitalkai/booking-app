import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AuthPage from './pages/AuthPage'
import BookingPage from './pages/BookingPage';
// import { Provider } from 'react-redux';
// import store from './store';
import { AuthProvider } from './components/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="*" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </AuthProvider>
  );
}
