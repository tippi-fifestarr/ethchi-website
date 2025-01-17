import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Tickets from './pages/tickets/Tickets';
import ComingSoon from './pages/ComingSoon';
import links from './utils/links';
import HackerTicketRedirect from './pages/HackerTicketRedirect';


function App() {
  return (
    <>  
      <Navbar /> 

      <Routes>
        <Route path={links.sitePaths.home} element={<Home />} />
        <Route path={links.sitePaths.about} element={<About />} />
        <Route path={links.sitePaths.tickets} element={<Tickets />} />
        <Route path={links.sitePaths.comingSoon} element={<ComingSoon />} />
        <Route path={links.sitePaths.hackerTicketRedirect} element={<HackerTicketRedirect />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
