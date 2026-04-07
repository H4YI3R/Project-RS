import {useState} from "react";

function Login () {
    const isLogin = false;
    return (
        <div>
            {isLogin ? <h2>환영합니다.</h2> : <h2>로그인 해주세요.</h2>}
        </div>
    );
}

function Message () {
    const hasMessage = true;

    return (
        <div>
            {hasMessage && <p>메세지가 있습니다.</p>}
        </div>
    );
}

function Score () {
    const hasScore = 60;
    return (
        <div>
            {hasScore ? <h2>합격</h2> : <h2>불합격</h2>}
        </div>
    )
}

function Fruits () {
    const isFruits = ["사과", "바나나"]
    return (
        <ul>
            {isFruits.map(isFruit => (
                <li>{isFruit}</li>
            ))}
        </ul>
    )
}

function FruitsKeyEdit () {
    const Fruits = [
        {id:1, name:"사과"},
        {id:2, name:"바나나"}
    ]
    return (
        <ul>
            {Fruits.map((fruit) => (
                <li key={fruit.id}>{fruit.name}</li>
            ))}
        </ul>
    )
}

function ConditionList () {
    const isConditionList = []
    if (isConditionList.length === 0) {
        return <p>데이터 없음</p>
    }
    return (
        <ul>
            {isConditionList.map(condition => (
                <li key={condition}>{condition}</li>
            ))}
        </ul>
    )
}

function Todays () {
    const todos = [
        {id:1, text:"공부", done: true},
        {id:2, text:"운동", done: false}
    ]
    return (
        <div>
            {todos.map(todo => (
                <p key={todo.id}>
                    {todo.text} - {todo.done ? "완료" : "미완료"}
                </p>
            ))}
        </div>
    )
}

function TodoList () {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([
        { id: 1, text: "React 복습하기", done: false },
        { id: 2, text: "과제 제출하기", done: true }
    ]);
    const addTodo = () => {
        if (input.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: input,
            done: false
        };

        setTodos([...todos, newTodo]);
        setInput("");
    };
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={addTodo}>추가</button>
            {todos.length === 0 ? (
                <p>등록된 할 일이 없습니다.</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.text} - {todo.done ? "완료" : "미완료"}
                            <button onClick={() => toggleTodo(todo.id)}>상태 변경</button>
                            <button onClick={() => removeTodo(todo.id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function PracticePage() {
    return (
        <div>
            <h1>실습 페이지</h1>
            <hr/>
            <h1>문제1. 조건부 렌더링 (객관식)</h1>
            <Login />
            <p>답: 2번</p>
            <hr/>
            <h1>문제2. &&연산자 이해</h1>
            <Message />
            <hr/>
            <h1>문제3. 조건부 렌더링 작성</h1>
            <Score />
            <hr/>
            <h1>문제4. 배열 렌더링 (객관식)</h1>
            <Fruits />
            <hr/>
            <h1>문제5. key 속성</h1>
            <p>key를 사용하지 않음.</p>
            <hr/>
            <h1>문제6. key 수정</h1>
            <FruitsKeyEdit />
            <h1>문제7. map 코드 오류 찾기</h1>
            <p>id, name 값이 매핑되어 있지 않음.</p>
            <hr/>
            <h1>문제8. 조건부 + 리스트</h1>
            <ConditionList />
            <hr/>
            <h1>문제9. Todo 상태 출력</h1>
            <Todays />
            <hr/>
            <h1>문제10. 실습</h1>
            <h2>다음 기능을 구현하시오.</h2>
            <h3>input 입력값 추가</h3>
            <h3>버튼 클릭 시 배열에 추가</h3>
            <h3>리스트로 출력</h3>
            <TodoList />
        </div>
    );
}

export default PracticePage;