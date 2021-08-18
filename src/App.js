import React from 'react';
import './App.css';
import styled from "styled-components";



function Food({ name, picture }){
  return <div>
    <h1>i like {name}</h1>
    <img src={picture} alt={name}/>
    </div>
}

const FoodILike = [
  {
    id:1,
    name:"피카추",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChxqtfUyNaXCND8srksd33u4as7CoOo8nJw&usqp=CAU"
  },
  {
    id:2,
    name:"꼬부기",
    image:"https://pbs.twimg.com/profile_images/869268915930619904/L2QF2nef_400x400.jpg"
  },
  {
    id:3,
    name:"파이리",
    image:"https://mblogthumb-phinf.pstatic.net/20160831_233/retspe_1472618970822TqkYd_GIF/%C6%C4%C0%CC%B8%AE_%281%29.gif?type=w800"
  },
  {
    id:4,
    name:"이상해씨",
    image:"https://post-phinf.pstatic.net/MjAyMDA0MDFfMjkg/MDAxNTg1NjgwNzM1NDYx.bja0-A08m7C9AyATQ_cZsk7c6WVbCqxHUosvy5EiLD4g.bWWDC1loThgXpCVMjRICLLpiWO-hhCn1wV5mypqrumMg.JPEG/%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.jpg?type=w1200"
  },
  
];

export default function Content(){
  return(
      <>
      <Title>내가 좋아하는 포켓몬</Title>
      <Wrap>
        {FoodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)}
        {/* {FoodILike.map(renderFood)} */}
      </Wrap>
    </>
  );
}


const Title = styled.p`
    color: #909090;
    font-size: 2em;
`

const Wrap = styled.ul`
    display:flex;
    justify-content: space-evenly;
`