import React from 'react';
import styles from './Todo.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, state, id } = todo;
  const handleState = (e) => {
    onUpdate({ ...todo, state: e.target.checked ? 'completed' : 'active' });
  };
  const handleText = (e) => {
    onUpdate({ ...todo, text: e.target.value });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.li}>
      <input
        onChange={handleState}
        className={styles.check}
        type='checkbox'
        checked={state === 'completed'}
        id={id}
      />
      <input className={styles.todo} value={text} onChange={handleText} />
      <button className={styles.delete} onClick={handleDelete}>
        <AiOutlineClose />
      </button>
    </li>
  );
}
