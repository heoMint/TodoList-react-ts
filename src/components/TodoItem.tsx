import React from 'react';
import classes from './TodoItem.module.css';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { TfiTrash } from 'react-icons/tfi';

const TodoItem: React.FC<{
    text: string;
    onRemoveTodo: () => void;
    id: string;
    done: boolean;
    onCheckedTodo: () => void;
}> = (props) => {
    return (
        <div>
            <li className={`${classes.item} ${props.done ? classes.done : ''}`}>
                <div className={classes.checkedBox} onClick={props.onCheckedTodo}>
                    {!props.done ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}
                </div>
                {props.text}
                <button className={classes.button} onClick={props.onRemoveTodo}>
                    <TfiTrash />
                </button>
            </li>
        </div>
    );
};
export default TodoItem;
