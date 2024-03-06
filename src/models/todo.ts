// class 정의
class Todo {
    id: string;
    text: string;
    done: boolean;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString(); // id 값 생성
        this.done = false; // 할일이 생성되지 않았을 시 초기화
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
