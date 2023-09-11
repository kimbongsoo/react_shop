import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={()=> { navigate('/')}}>Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    <Link to='/'>홈</Link>
    
    <Link to='detail'>상세페이지</Link>
    
    <Routes>
      <Route path='/' element={<div>    
    <div className='main-bg'></div>
    <div className='container'>
      <div className='row'>
    {shoes.map((a, i)=>{
      return <Card shoes={shoes[i]} i={i+1}></Card>
    })}
    </div>
    </div>
    </div>}/>
      <Route path='/detail' element={<div><Detail/> </div>}/>
      <Route path='*' element={<div>없는페이지요</div>}/>
    </Routes>

    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}
export default App;
