import React from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';

export default function TodoList({
  todos,
  onDelete,
  onUpdate,
  getFilteredTodo,
  filter,
}) {
  const filtered = getFilteredTodo(todos, filter);

  return (
    <ul className={styles.todos}>
      {filtered.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
