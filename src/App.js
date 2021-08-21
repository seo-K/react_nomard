import React from 'react';
import PropTypes from "prop-types"; //컴포넌트 연결 실수  검사해주는 똑똑한 애 (console로 알 수있음)
import './App.css';
import styled from "styled-components";



class App extends React.Component{
  render
}

export default function App(){
  return(
      <>
      <Title>내가 좋아하는 포켓몬</Title>
      <Wrap>
        {FoodILike.map(dish => 
        <Food 
          key={dish.id}
          name={dish.name} 
          picture={dish.image}
          rating={dish.rating}
        />
        )}
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