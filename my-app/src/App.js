import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import NewProjects from './components/pages/NewProjects';
import Contact from './components/pages/Contact';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />}>
            Home
          </Route>
          <Route exact path='/projects' element={<Projects />}>
            Projetos
          </Route>
          <Route exact path='/company' element={<Company />}>
            Empresa
          </Route>
          <Route exact path='/newprojects' element={<NewProjects />}>
            Novos Projetos
          </Route>
          <Route exact path='/contact' element={<Contact />}>
            Contato
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
