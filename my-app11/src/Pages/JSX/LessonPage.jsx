import {
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
} from "react";

import "../CSS/LessonPage.css";

const initialTodos = [];

function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false,
                },
            ];

        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);

        case "LOAD_TODOS":
            return action.payload;

        default:
            return state;
    }
}

function LessonPage() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");

    const inputRef = useRef(null);

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            dispatch({
                type: "LOAD_TODOS",
                payload: JSON.parse(savedTodos),
            });
        }

        inputRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = useCallback(() => {
        if (input.trim() === "") return;

        dispatch({
            type: "ADD_TODO",
            payload: input,
        });

        setInput("");
        inputRef.current.focus();
    }, [input]);

    const toggleTodo = useCallback((id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id,
        });
    }, []);

    const deleteTodo = useCallback((id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id,
        });
    }, []);

    const filteredTodos = useMemo(() => {
        if (filter === "active") {
            return todos.filter((todo) => !todo.completed);
        }

        if (filter === "completed") {
            return todos.filter((todo) => todo.completed);
        }

        return todos;
    }, [todos, filter]);

    const completedCount = useMemo(() => {
        return todos.filter((todo) => todo.completed).length;
    }, [todos]);

    const activeCount = todos.length - completedCount;

    return (
        <div className="app">
            <h1>Todo Hooks App</h1>

            <div className="input-box">
                <input
                    ref={inputRef}
                    value={input}
                    placeholder="할 일을 입력하세요"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTodo();
                        }
                    }}
                />

                <button onClick={addTodo}>추가</button>
            </div>

            <div className="filters">
                <button onClick={() => setFilter("all")}>
                    전체
                </button>

                <button onClick={() => setFilter("active")}>
                    진행 중
                </button>

                <button onClick={() => setFilter("completed")}>
                    완료
                </button>
            </div>

            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            className={
                                todo.completed ? "completed" : ""
                            }
                        >
                            {todo.text}
                        </span>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>

            <div className="stats">
                <p>전체: {todos.length}</p>
                <p>진행 중: {activeCount}</p>
                <p>완료: {completedCount}</p>
            </div>
        </div>
    );
}

export default LessonPage;