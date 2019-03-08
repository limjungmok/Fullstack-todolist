import React from 'react';
import styles from './TodoList.module.scss';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => {
  return (
    <ul className={styles.base}>
      {todos.map((todo, index) => (
        <li className={styles.todo} key={index}>
          <span className={styles.title}>{todo.title}</span>
          <span className={styles.text}>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array
};

TodoList.defaultProps = {
  todos: [
    {title: '기본 타이틀', text: '기본 설명'}
  ]
};

export default TodoList;