import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          className="header"
          title = "React"
          subTitle = "TodoList" />
        App
      </div>
    );
  }
}

const Header = ({className, title, subTitle}) => {
  const isTodoList = subTitle === 'TodoList';

  return (
    <header className={`${title}-${className}`}>
      {isTodoList && (
        <div>투두리스트~</div>
      )}
      {title}
      {subTitle}
    </header>
  );
}


export default App;
