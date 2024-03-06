import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = (props) => {
    const TodosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // 입력이 비어있을 경우 아무것도 하지 않음
            return;
        }

        TodosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = ''; // Input 창 클리어



    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>추가</button>
        </form>
    );
};
export default NewTodo;
