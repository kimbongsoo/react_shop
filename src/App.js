import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import axios from 'axios';

function App() {
  let obj = {name: 'kim'}
  JSON.stringify(obj)
  localStorage.setItem('data', obj)

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Shop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={()=> { navigate('/')}}>Home</Nav.Link>
      <Nav.Link onClick={()=> { navigate('/cart')}}>Cart</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
    
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
      <Route path='/detail/:id' element={<div><Detail shoes={shoes}/> </div>}/>
      <Route path='/cart' element={<div><Cart/></div>}/>
      {/* <Route path='*' element={<div>없는페이지</div>}/> */}
    </Routes>

    {/* <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((data)=>{
        let copy = [...shoes, ...data.data]
        setShoes(copy)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button> */}
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
