import { useEffect, useState } from 'react';
import './App.css';
import { DarkModeProvider } from './components/context/DarkMode';
import Nav from './components/Nav/Nav';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { Repository } from './LocalStorage';

function App() {
  const [todos, setTodos] = useState(() => getLocalstorage()); // 이부분 주의할것!!
  const [filter, setFilter] = useState('all');

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleFilter = (type) => setFilter(type);

  useEffect(() => {
    Repository.setLocalStorage('todo', todos);
  }, [todos]);

  return (
    <DarkModeProvider>
      <section className="container">
        <Nav filter={filter} handleFilter={handleFilter} />
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          filter={filter}
          getFilteredTodo={getFilteredTodo}
        />
        <TodoForm onAdd={handleAdd} />
      </section>
    </DarkModeProvider>
  );
}

export default App;

function getLocalstorage() {
  return Repository.getLocalStorage('todo')
    ? Repository.getLocalStorage('todo')
    : [];
}

function getFilteredTodo(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.state === filter);
}
