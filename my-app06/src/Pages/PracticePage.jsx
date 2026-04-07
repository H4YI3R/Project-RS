import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
            <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </div>
    );
}

function ProductCard() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => setLiked((prev) => !prev);

    return (
        <div>
            <button onClick={toggleLike}>
                {liked ? "❤️ 좋아요 취소" : "🤍 좋아요"}
            </button>
        </div>
    );
}

function TextInput() {
    const [text, setText] = useState("");
    const handleChange = (e) => setText(e.target.value);

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="텍스트 입력"
            />
            <p>출력창: {text}</p>
        </div>
    );
}

function ListManager() {
    const [items, setItems] = useState([
        { id: 1, name: "사과", category: "fruit" },
        { id: 2, name: "바나나", category: "fruit" },
        { id: 3, name: "콜라", category: "drink" },
    ]);

    const [input, setInput] = useState("");
    const [category, setCategory] = useState("fruit");
    const [filter, setFilter] = useState("all");

    const handleAdd = () => {
        if (!input.trim()) return;

        const newItem = {
            id: Date.now(),
            name: input,
            category,
        };

        setItems((prev) => [...prev, newItem]);
        setInput("");
    };

    const filteredItems = items.filter((item) => {
        if (filter === "all") return true;
        return item.category === filter;
    });

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="항목 입력"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="fruit">과일</option>
                <option value="drink">음료</option>
            </select>

            <button onClick={handleAdd}>추가</button>

            <hr />
            <button onClick={() => setFilter("all")}>전체</button>
            <button onClick={() => setFilter("fruit")}>과일</button>
            <button onClick={() => setFilter("drink")}>음료</button>

            <hr />
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>
                        {item.name} (
                        {item.category === "fruit" ? "과일" : "음료"})
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <>
            <h2>{title}</h2>
            {children}
            <hr />
        </>
    );
}

function PracticePage() {
    return (
        <div>
            <h1>실습 페이지</h1>

            <Section title="실습1. 카운터 만들기">
                <Counter />
            </Section>

            <Section title="실습2. 좋아요 토글 버튼">
                <ProductCard />
            </Section>

            <Section title="실습3. 입력값 실시간 출력">
                <TextInput />
            </Section>

            <Section title="실습4 & 5. 리스트 추가 + 필터">
                <ListManager />
            </Section>
        </div>
    );
}

export default PracticePage;