import React, { useState } from 'react';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const MOCKDATA = [
  { id: 1, text: '리액트', isChecked: false },
  { id: 2, text: '타입스크립트', isChecked: false },
  { id: 3, text: '자바스크립트', isChecked: false },
];

const Todolist: React.FC = () => {
  const title: string = '오늘 할일';

  const [todos, setTodos] = useState<Todo[]>(MOCKDATA);
  const [newTodo, setNewTodo] = useState<string>('');
  const [showDatail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const changeCheckbox = (id: number) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
    });
  };

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className='container'>
        <div className='input-group'>
          <input
            type='text'
            placeholder='할일 입력'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className='add' onClick={addTodo}>
            추가
          </button>
        </div>
        <div className='board'>
          <ul>
            {todos.map(({ id, text }) => (
              <li key={id}>
                <div className='checkfield'>
                  <input
                    type='checkbox'
                    id={String(id)}
                    name={text}
                    onChange={() => changeCheckbox(id)}
                  />
                  <label htmlFor={String(id)}>{text}</label>
                </div>
                <button className='delete' onClick={() => deleteTodo(id)}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Todolist;
