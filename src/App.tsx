import React, { useState, useRef, useEffect } from 'react';

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(
    [
      { id: 1, text: 'Estudar React' },
      { id: 2, text: 'Fazer exercícios' },
      { id: 3, text: 'Ler um livro' },
    ]
  );
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
    inputRef.current?.focus();
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: 420,
        margin: '60px auto',
        fontFamily: 'Segoe UI, sans-serif',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: 32,
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#4f46e5', marginBottom: 24, letterSpacing: 1 }}>📝 To Do List</h2>
      <div style={{ display: 'flex', gap: 12 }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Nova tarefa"
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid #d1d5db',
            outline: 'none',
            fontSize: 16,
            transition: 'border 0.2s',
          }}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          style={{
            background: '#4f46e5',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 18px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          Adicionar
        </button>
      </div>
      <ul style={{ marginTop: 32, padding: 0, listStyle: 'none' }}>
        {todos.length === 0 && (
          <li style={{ color: '#9ca3af', textAlign: 'center', fontStyle: 'italic' }}>
            Nenhuma tarefa adicionada.
          </li>
        )}
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#f3f4f6',
              borderRadius: 8,
              padding: '10px 16px',
              marginBottom: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
          >
            <span style={{ fontSize: 16 }}>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{
                background: '#ef4444',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '6px 14px',
                fontWeight: 500,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
