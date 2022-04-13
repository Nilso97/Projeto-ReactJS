import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProjects from './components/pages/NewProjects';
import Contact from './components/pages/Contact';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='newprojects'>Novos Projetos</Link>
        <Link to='/contact'>Contato</Link>
      </ul>
      <Container customClass='min-height'>
      <Routes>
        <Route exact path='/' element={<Home />}>
          Home
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
      <p>Footer</p>
      </Container>
    </Router>
  );
}

export default App;
