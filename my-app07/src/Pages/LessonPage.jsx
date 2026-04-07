function Login() {
    const isLogin = false;
    return (
        <div>
            {isLogin ? <h1>환영합니다.</h1> : <h1>로그인해주세요.</h1>}
        </div>
    );
}

function Admin() {
    const isAdmin = true;
    let message;
    if(isAdmin) {
        message = <h1>관리자 페이지</h1>
    } else {
        message = <h1>일반 사용자 페이지</h1>
    }
    return <div>{message}</div>
}

function Notice() {
    const hasNotice = true;
    return (
        <div>
            <h1>공지사항</h1>
            {hasNotice && <p>새 공지가 있습니다.</p>}
        </div>
    );
}

function FruitsList() {
    const fruits = ["사과", "바나나", "오렌지"]
    return (
        <ul>
            {fruits.map(fruit => (<li>{fruit}</li>))}
        </ul>
    )
}

function StudentList() {
    const students = [
        {id:1, name:"김철수"},
        {id:2, name:"이영희"},
        {id:3, name:"박민수"}
    ];
    return (
        <ul>
            {students.map(student => (
                <li key={student.id}>{student.name}</li>
            ))}
        </ul>
    )
}

function TodoDay() {
    const today = [
        {id:1, text:"React 공부하기", done:true},
        {id:2, text:"과제 제출하기", done:false}
    ]
    return (
        <div>
            <h1>할 일 목록</h1>
            {today.length === 0 ? (
                <p>할 일이 없습니다.</p> ) : (
                    <ui>
                        {today.map((todays) => (
                            <li key={todays.id}>{todays.text} - {todays.done ? "완료" : "미완료"}
                            </li>
                            ))}
                    </ui>
            )}
        </div>
    )
}

function LessonPage() {

    return (
        <div>
            <h1> 6주차 </h1>
            <hr/>
            <Login />
            <hr/>
            <Admin />
            <hr/>
            <Notice />
            <hr/>
            <FruitsList />
            <hr/>
            <StudentList />
            <hr/>
            <TodoDay />
            <hr/>
        </div>
    );
}

export default LessonPage;