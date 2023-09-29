import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import PagenotFound from './PagenotFound';
import{Route,Routes} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
          <Navbar expand="lg" variant="light" bg="black">
      <Container>
        <Navbar.Brand href="#"><h1>Task Managment App</h1> </Navbar.Brand>
      </Container>
    </Navbar>

<Routes>

<Route  path='/' element={<Admin></Admin>}></Route>
<Route path='/add' element={<Add></Add>}></Route>
<Route path='/edit/:id' element={<Edit/>}></Route>
<Route path={'*'} element={<PagenotFound></PagenotFound>}></Route>



</Routes>

    </div>
  );
}

export default App;
