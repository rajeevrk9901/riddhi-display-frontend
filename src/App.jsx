import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import CallToMain from './components/home/CallToMain';
import Subscribe from './components/home/Subscribe';
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import DownloadPage from './pages/DownloadPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';





function App() {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutUsPage/>} />
        <Route path='/Contact' element={<ContactPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/Download' element={<DownloadPage/>} />
        <Route path='/Services' element={<ServicesPage/>} />
        <Route path='/Products' element={<ProductsPage/>} />

    </Routes>

    <CallToMain/>
    <Subscribe/>
    <Footer/>
      
    </BrowserRouter>
  )
}

export default App;
