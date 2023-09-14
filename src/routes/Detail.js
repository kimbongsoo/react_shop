import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { tab } from '@testing-library/user-event/dist/tab';

// let YellowBtn = styled.button`
//   background : yellow;
//   color : black;
//   padding : 10px;
// `

// let Box = styled.div`
//   background : grey;
//   padding : 20px;
// `

function Detail(props){

// let [alert, setAlert] = useState(true)
//   useEffect(()=>{
//     let a = setTimeout(()=>{ setAlert(false) }, 2000)

//     return ()=>{
//       clearTimeout(a)
//     }
//   }, [])
  let [tab, setTab] = useState(0);
  let {id} = useParams();
  let findShoes = props.shoes.find(function(x){
    return x.id == id
  });

  let [num, setNum] = useState('')

  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])
    
  return (
<div className="container">
  {/* <input onChange={(e)=>{setNum(e.target.value)}}></input>
  {
    alert == true ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null
  } */}
  {/* <Box><YellowBtn>버튼</YellowBtn></Box> */}
  <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{findShoes.title}</h4>
      <p>{findShoes.content}</p>
      <p>{findShoes.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
  </Nav>
  <TabContent tab={tab} shoes={props.shoes}></TabContent>
</div> 
    )
}
function TabContent(props){
  let [fade, setFade] = useState('')
  
  useEffect(()=> {
    let a = setTimeout(()=> {setFade('end')}, 100)

    return ()=>{
      clearTimeout(a)
      setFade('')
    }
  }, [props.tab])

  return (<div className={`start ${fade}`}>
    {[<div>{props.shoes[0].title}</div>, <div>{props.shoes[1].title}</div>, <div>{props.shoes[2].title}</div>][props.tab] }
  </div>)
}

// function TabContent(props){
//   if (props.tab === 0){
//     return <div>내용0</div>
//   }
//   if (props.tab === 1){
//     return <div>내용1</div>
//   }
//   if (props.tab === 2){
//     return <div>내용2</div>
//   }
// }
export default Detail;