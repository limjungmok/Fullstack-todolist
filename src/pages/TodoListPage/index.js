import React, { Component } from 'react';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';

class TodoListPage extends Component {
  plusButtonRef = React.createRef();
  inputRef = React.createRef();

  state = {
    count: 0,
    dummyData: [
      {title: '타이틀1', text: '설명1'},
      {title: '타이틀2', text: '설명2'},
      {title: '타이틀3', text: '설명3'}
    ]
  };

  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { innerHeight } = window;
    console.log('resize', innerHeight);
  }

  handlePlus = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  handleMinus = () => {
    this.setState(prevState => ({
      count: prevState.count -1
    }));
  }

  handleFocus = () => {
    const { current } = this.inputRef;
    console.log(current); 
    current.focus();
    current.style.backgroundColor = 'orange';
  }

  render() {
    const {
      count,
      dummyData
    } = this.state;

    return (
      <>
        <Header />
        <TodoList todos = {dummyData}/>
        <span>TodoList Page {count}</span>
        <button 
          count = {count}
          onClick = {this.handlePlus}
          >+</button>
        <button 
          count = {count}
          onClick = {this.handleMinus}
          >-</button>

        <div>
          <input 
            type="text"
            ref={this.inputRef}
            />
          <button 
            onClick={this.handleFocus}
            >Focus</button>
        </div>
      </>
    );
  }
};

export default TodoListPage;