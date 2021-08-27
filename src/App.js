import React from 'react';
import PropTypes from "prop-types"; //컴포넌트 연결 실수  검사해주는 똑똑한 애 (console로 알 수있음)
import './App.css';
import styled from "styled-components";

//Function 컴포넌트 + return()
//함수이면서 뭔가를 return 함. 그리고 화면에 나옴
// export default function App(){
//   return(

//   );
// }


//클래스 컴포넌트 + render(){}
//react component로부터 확장되어 자동으로 실행되어 화면에 나옴
//특징 : 구조는 같지만 컴포넌트 안에 데이터만 바꿀때 사용 State / setState
//setState를 호출할때마다 react는 새로운 state와 함께 render function을 호출한다.
class App extends React.Component{
  //바꿀 데이터를 state 안에 넣는다
  state = {
    count: 0
  };
//state 값은 절대 수정하면 안된다!!! = setState 와 짝꿍
//리액트는 상태를 변경할때 render function을 호출해서 바꿔주길 원한다.

//state = object
  add = () =>{
    // this.setState({count: this.state.count + 1 })
    this.setState(current => ({ count : current.count + 1}))
  };
  minus = () =>{
    // this.setState({count: this.state.count - 1 })
    this.setState(current => ({ count : current.count - 1}))
  };

  componentDidMout(){
    console.log('컴포넌트 생성되어따')
  }
  componentDidUpdate(){
    console.log('업데이트 되어따')
  }
  componentWillUnmount() {
    console.log('컴포넌트 죽었따')
  }

  //버튼을 클릭하면 add함수가 실행되고 setState 값이 알아서 state를 리프레쉬하고 render function을 호출
  render(){
    console.log("랜더링 되어따")
    return <div>
      <h1>The numver is: {this.state.count}</h1>
      <button onClick={this.add}>더하기</button>
      <button onClick={this.minus}>빼기</button>
      {/* /add() 로 괄호 치면 즉시 실행되어 버튼눌렀을때 실행 시키려면 add 만 써야한다. */}
    </div>
  }
}

export default App;

//라이프 사이클 방식
// react가 컴포넌트를 생성, 제거하는 방법
//mounting (생성 create) [constructor] [componentDidMout() = 생성된걸 알리는 ]
//update (업데이트 = 데이터값 바뀔때) [componentDidUpdate() = 업데이트 된후 알리는]
//unmounting (제거 kill) []