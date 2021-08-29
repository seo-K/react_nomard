import React from 'react';
import axois from 'axios';
import PropTypes from "prop-types"; //컴포넌트 연결 실수  검사해주는 똑똑한 애 (console로 알 수있음)
import './App.css';
import Movie from "./Movie";
import styled from "styled-components";

class App extends React.Component{
  //바꿀 데이터를 state 안에 넣는다
  state = {
    isLoading: true,
    movies: []
  };

  //movies가 시간이 오래걸린다고 알려주는 async / await ! 이거 자바스크립트에서 배웠긴함
  getMovies = async() => {
    const {
      data: {
        data: { movies }
      }
    } = await axois.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies.data.data.movies)
    // console.log(movies)
    // this.setState({ movies : movies }) 와 같다.
    this.setState({ movies, isLoading : false })
  }
  componentDidMount(){
    this.getMovies();
  }

  // componentDidMount(){
  //   setTimeout( () => {
  //     this.setState({ isLoading : false});
  //   }, 6000);
  // }

  render(){
    const {isLoading, movies} = this.state;
    return <div> {isLoading ? "Loading" : movies.map(movie =>
      <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
    )}</div>;
  }
}
export default App;

//라이프 사이클 방식
// react가 컴포넌트를 생성, 제거하는 방법
//mounting (생성 create) [constructor] [componentDidMout() = 생성된걸 알리는 ]
//update (업데이트 = 데이터값 바뀔때) [componentDidUpdate() = 업데이트 된후 알리는]
//unmounting (제거 kill) []