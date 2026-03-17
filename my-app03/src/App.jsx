import {useState} from "react";

function App() {
    const name = "조현준";
    const fruits = ["청포도", "블루베리", "배", "사과", "귤"];
    const isLogin = true;

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>안녕하세요, {name}님</h1>

            {isLogin ? <p>로그인 상태입니다.</p> : <p>로그아웃 상태입니다.</p>}

            <h2>좋아하는 과일</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <button onClick={() => setCount((count) => count + 1)}>
                증가
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
                감소
            </button>

            <h1>{count}</h1>
        </div>
    );
}

export default App;

/*
- 실습과제
1 이름출력 : 본인이름
2 환영 메시지 : 인삿말
3 좋아하는 꽃, 음식 등등 목록 5가지
4 로그인 상태 표시
5 카운터 버튼 : 증가 감소*/
