import React, { useState, useRef, useEffect } from 'react';
import {Navbar} from "../../components/navbar";

interface Todo {
    id: number;
    text: string;
}

export const Task = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Estudar React' },
        { id: 2, text: 'Fazer exercícios' },
        { id: 3, text: 'Ler um livro' },
    ]);
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
        <Navbar>
            <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg font-sans">
                <h2 className="text-center text-indigo-600 mb-6 text-2xl tracking-wide">📝 To Do List</h2>
                <div className="flex gap-3">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Nova tarefa"
                        onKeyDown={e => e.key === 'Enter' && addTodo()}
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base transition"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-indigo-600 text-white rounded-lg px-5 py-2 font-semibold text-base hover:bg-indigo-700 transition"
                    >
                        Adicionar
                    </button>
                </div>

                <ul className="mt-8 space-y-3 list-none">
                    {todos.length === 0 && (
                        <li className="text-center text-gray-400 italic">Nenhuma tarefa adicionada.</li>
                    )}

                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm"
                        >
                            <span className="text-base">{todo.text}</span>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                className="bg-red-500 text-white rounded-md px-4 py-1 font-medium text-sm hover:bg-red-600 transition"
                            >
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Navbar>
    );
};
