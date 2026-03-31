import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </div>
    );
}

function NameInput() {
    const [name, setName] = useState("");

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>입력한 이름: {name}</p>
        </div>
    );
}

function Toggle() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "닫기" : "열기"}
            </button>

            {isOpen ? <p>내용이 보입니다.</p> : null}
        </div>
    );
}

function FruitList() {
    const [fruits, setFruits] = useState(["사과", "바나나"]);

    const addFruit = () => {
        setFruits([...fruits, "포도"]);
    };

    return (
        <div>
            <button onClick={addFruit}>과일 추가</button>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

function Profile() {
    const [user, setUser] = useState({
        name: "민지",
        age: 20,
    });

    const changeAge = () => {
        setUser({
            ...user,
            age: 21,
        });
    };

    return (
        <div>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
            <button onClick={changeAge}>나이 변경</button>
        </div>
    );
}

function ProductCard({ name, price }) {
    const [liked, setLiked] = useState(false);

    return (
        <div>
            <h3>{name}</h3>
            <p>{price}원</p>
            <button onClick={() => setLiked(!liked)}>
                {liked ? "❤️ 좋아요 취소" : "🤍 좋아요"}
            </button>
        </div>
    );
}

function LessonPage() {

    return (
        <div>
            <h1>5주차 </h1>
            <hr/>
            <Counter />
            <hr/>
            <NameInput />
            <hr/>
            <Toggle />
            <hr/>
            <FruitList />
            <hr/>
            <Profile />
            <hr/>
            <ProductCard />
            <hr/>

        </div>
    );
}

export default LessonPage;