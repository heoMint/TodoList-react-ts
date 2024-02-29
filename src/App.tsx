import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
    // Todo의 데이터모델을 사용하는 객체배열
    // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
    const [todos, setTodos] = useState<Todo[]>([]);
    

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos)=>{
        // concat() 새로운 배열 생성
            return prevTodos.concat(newTodo);
        })
    };
    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />
        </div>
    );
}

export default App;
