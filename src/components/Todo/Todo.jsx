import React from 'react';
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, state, id } = todo;
  const handleState = (e) => {
    onUpdate({ ...todo, state: e.target.checked ? 'completed' : 'active' });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.li}>
      <input
        onChange={handleState}
        className={styles.check}
        type="checkbox"
        checked={state === 'completed'}
        id={id}
      />
      <label className={styles.todo} htmlFor={id}>
        {text}
      </label>
      <button className={styles.delete} onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
