import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  <input onChange={(e)=>{setNum(e.target.value)}}></input>
  {
    alert == true ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null
  }
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
</div> 
    )
}

export default Detail;