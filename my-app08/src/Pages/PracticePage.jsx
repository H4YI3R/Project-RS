import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

 function UserCards() {

    const UserCard = ({ name }) => {
         return (
             <div style={{ border: "1px solid black", margin: "10px" }}>
                 <h2>{name}</h2>
             </div>
         );
     };

    return (
        <div>
            <UserCard name="Alice" />
            <UserCard name="Bob" />
            <UserCard name="Charlie" />
        </div>
    );
}

function NameList() {
    const names = ["Alice", "Bob", "Charlie"];

    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
}

function LoginToggle() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            {isLogin ? <h3>환영합니다!</h3> : <h3>로그인 해주세요</h3>}

            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "로그아웃" : "로그인"}
            </button>
        </div>
    );
}

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: input,
        };

        setTodos([...todos, newTodo]);
        setInput("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const TodoItem = ({ todo, onDelete }) => {
        return (
            <li>
                {todo.text}
                <button onClick={() => onDelete(todo.id)}>삭제</button>
            </li>
        );
    };

    return (
        <div>
            <h3>Todo List</h3>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>추가</button>

            {todos.length === 0 ? (
                <p>할 일이 없습니다</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={deleteTodo}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

function PracticePage() {

    return (
        <div>
            <h1> 7주차 </h1>
            <hr/>
            <h2>실습 문제1 - 기본 State + 이벤트</h2>
            <Counter />
            <hr/>
            <h2>실습 문제2 - Props + 컴포넌트 분리</h2>
            <UserCards />
            <hr/>
            <h2>실습 문제3 - 리스트 렌더링 (map+key)</h2>
            <NameList />
            <hr/>
            <h2>실습 문제4 - 조건부 렌더링 + State</h2>
            <LoginToggle />
            <hr/>
            <h2>실습 문제5 - 종합 (TodoList)</h2>
            <TodoApp/>
            <hr/>
        </div>
    );
}

export default PracticePage;