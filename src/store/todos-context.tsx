import React, { useState } from 'react';
import Todo from '../models/todo';

// 상태관리
type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            // concat() 새로운 배열 생성
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };
    return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};
export default TodosContextProvider;
