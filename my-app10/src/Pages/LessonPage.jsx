import { useState, useEffect } from 'react';
import Timer from "../component/JSX/Timer";

const basicwork = () => {
    console.log('기본작업');
    return ['홍길동', '김철수'];
}

function KT() {
    const [time, setTime] = useState(1);
    const handleClick = () => {
        setTime(time + 1);
    };
    console.log("렌더링 됨");

    return (
        <div>
            <span>현재 시각 : {time}시</span>
            <button onClick = {handleClick}> 업데이트 </button>
        </div>
    )
}

function NI() {
    const [names, setNames] = useState(basicwork());
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleInput = () => {
        setNames((preState) => {
            console.log(preState);
            return [...preState, input];
        });
    };

    return(
        <div>
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={handleInput}>입력</button>
            {names.map((name, index) =>{
                return <p key={index}>{name}</p>;
            })}
        </div>
    )
}

function CU() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const handleCountUpdate = () => {
        setCount(count + 1);
    }
    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // 렌더링 될떄마다 실행됨
    // useEffect(() => {
    //     console.log("렌더링 됨")
    // });
    // useEffect(() => {
    //     console.log("count 변경 됨")
    // },{count});
    // useEffect(() => {
    //     console.log("name 변경 됨")
    // },{name});
    useEffect(() => {
        console.log("마운트 될때마다 실행됨")
    },{count});

    return (
        <div>
            <p>Count :{count}번</p>
            <button onClick={handleCountUpdate}>업데이트</button>
            <div>
                <input type="text" value={name} onChange={handleInputChange} />
                <div>Name : {name}</div>
            </div>
        </div>
    );
}

function TM () {
    const [showTimer, setShowTimer] = useState(false);

    return(
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>
                Toggle Timer
            </button>
        </div>
    );
}

function LessonPage() {

    return (
        <div>
            <h1> 10주차 </h1>
            <hr/>
            <KT/>
            <hr/>
            <NI/>
            <hr/>
            <CU/>
            <hr/>
            <TM/>
            <hr/>
        </div>
    );
}

export default LessonPage;