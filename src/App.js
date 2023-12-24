import { Routes, Route, Navigate, } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import FAQpage from './pages/Faq';
//import MemberMembershipPage from './pages/ResourcePage';
import ResourcePage from './pages/ResourcePage';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
                <Route path='about' element={<AboutPage />} />
                <Route path='resourcepage' element={<ResourcePage />} />
                <Route path='faq' element={<FAQpage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;