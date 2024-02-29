
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';


function App() {
    // Todo의 데이터모델을 사용하는 객체배열
    // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;
