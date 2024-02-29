// class 정의
class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}


/**
// 타입(type) 정의
type TodoType = {
    id: string;
    text: string;
};

// 인터페이스(interface) 정의
interface TodoInterface {
    id: string;
    text: string;
}

// 데이터 모델 생성
const todo: TodoType = {
    id: new Date().toISOString(),
    text: 'Write a sample todo',
};
 */

export default Todo;
