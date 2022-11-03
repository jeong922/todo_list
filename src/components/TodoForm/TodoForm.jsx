import React, { useState } from 'react';
import styles from './TodoForm.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({ onAdd }) {
  const [todo, setTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text: todo, state: 'active' });
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Add Todo'
        value={todo}
        onChange={handleChange}
      />
      <button className={styles.add}>Add</button>
    </form>
  );
}
